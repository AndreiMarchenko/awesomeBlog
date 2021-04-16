<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditProfile\ChangeInfoRequest;
use App\Http\Requests\EditProfile\ChangeNameRequest;
use App\Http\Requests\EditProfile\ChangePasswordRequest;
use App\Http\Requests\EditProfile\ChangePictureRequest;
use App\Mail\PasswordMail;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class EditProfileController extends Controller
{
    public function changeName(ChangeNameRequest $request)
    {
        Auth::user()
            ->update(['name' => $request->input('name')]);

        return response()->json([
            'message' => 'Name successfully changed',
            'name' => Auth::user()->name
        ], 200);
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = Auth::user();

        if (! Hash::check($request->input('password'), $user->password)) {
            return response()->json(
                ['errors' => ['Wrong current password']]
            , 400);
        }

        $user->update([
                'password' => Hash::make($request->input('newPassword'))
            ]);

        Mail::to($user->email)->queue(new PasswordMail($request->input('newPassword')));

        return response()->json([
            'message' => 'Password successfully changed',
        ], 200);
    }

    public function changePicture(ChangePictureRequest $request)
    {
        $path = $request->file('picture')->store('images', 'public');

        Auth::user()
            ->update(['profile_picture' => $path]);

        return response()->json([
            'path' => $path
        ]);
    }

    public function changeInfo(ChangeInfoRequest $request)
    {
        Auth::user()->update([
                'info' => $request->input('info')
            ]);

        return response()->json([
            'message' => 'Info successfully changed',
            'info' => Auth::user()->info,
        ]);
    }
}

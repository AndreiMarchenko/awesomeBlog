<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangeNameRequest;
use App\Http\Requests\ChangePasswordRequest;
use App\Http\Requests\ChangePictureRequest;
use App\Mail\PasswordMail;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class EditProfileController extends Controller
{
    public function changeName(ChangeNameRequest $request)
    {
        User::where('id', Auth::id())
            ->update(['name' => $request->input('name')]);

        return response()->json([
            'message' => 'Name successfully changed',
            'name' => $request->input('name')
        ], 200);
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $currentPassword = User::where('id', Auth::id())
            ->value('password');

        if (! Hash::check($request->input('password'), $currentPassword)) {
            return response()->json(
                ['errors' => ['Wrong current password']]
            , 400);
        }

        User::where('id', Auth::id())
            ->update([
                'password' => bcrypt($request->input('newPassword'))
            ]);

        $email = User::where('id', Auth::id())
            ->pluck('email')->first();

        Mail::to($email)->queue(new PasswordMail($request->input('newPassword')));

        return response()->json([
            'message' => 'Password successfully changed',
        ], 200);
    }

    public function changePicture(ChangePictureRequest $request)
    {
        $path = $request->file('picture')->store('images', 'public');

        User::where('id', Auth::id())
            ->update(['profile_picture' => $path]);

        return response()->json([
            'path' => $path
        ]);
    }

    public function changeInfo(ChangePictureRequest $request)
    {
        User::where('id', Auth::id())
            ->update([
                'info' => $request->input('info')
            ]);

        return response()->json([
            'message' => 'Info successfully changed',
            'info' => $request->input('info')
        ]);
    }
}

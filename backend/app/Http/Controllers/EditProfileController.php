<?php

namespace App\Http\Controllers;

use App\Http\Requests\changeNameRequest;
use App\Http\Requests\changePasswordRequest;
use App\Http\Requests\changePictureRequest;
use App\Mail\Mailtrap;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class EditProfileController extends Controller
{
    public function changeName(changeNameRequest $request) {

        User::where('id', Auth::id())
            ->update(['name' => $request->name]);

        return response()->json([
            'message' => 'Name successfully changed',
            'name' => $request->name
        ], 200);
    }

    public function changePassword(changePasswordRequest $request) {

        $currentPassword = User::where('id', Auth::id())
            ->value('password');

        if (! Hash::check($request->password, $currentPassword)) {
            return response()->json(
                ['errors' => ['Wrong current password']]
            , 400);
        }

        User::where('id', Auth::id())
            ->update(['password' => bcrypt($request->newPassword)]);

        $email = User::where('id', Auth::id())
            ->pluck('email')->first();

        Mail::to($email)->send(new Mailtrap($request->newPassword));

        return response()->json([
            'message' => 'Password successfully changed',
        ], 200);
    }

    public function changePicture(changePictureRequest $request) {
        $path = $request->file('picture')->store('images', 'public');

        User::where('id', Auth::id())
            ->update(['profile_picture' => $path]);

        return response()->json([
            'path' => $path
        ]);
    }

    public function changeInfo(changePictureRequest $request) {

        User::where('id', Auth::id())
            ->update(['info' => $request->info]);

        return response()->json([
            'message' => 'Info successfully changed',
            'info' => $request->info
        ]);
    }
}

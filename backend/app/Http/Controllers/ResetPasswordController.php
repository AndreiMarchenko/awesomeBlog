<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetPasswordRequest;
use App\Mail\Mailtrap;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    public function resetPassword(ResetPasswordRequest $request) {
        $newPassword = Str::random(10);

        $encPassword = bcrypt($newPassword);

        User::where('email', $request->email)
            ->update(['password' => $encPassword]);

        Mail::to($request->email)->queue(new Mailtrap($newPassword));

        return response()->json([
            'message' => 'email with password sent'
        ],200);
    }
}

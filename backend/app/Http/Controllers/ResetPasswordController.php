<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResetPasswordRequest;
use App\Mail\PasswordMail;
use App\Mail\ResetPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    public function sendResetPasswordLink(ResetPasswordRequest $request)
    {
        $user = User::where('email', $request->input('email'))
            ->first();

        $stringToHash = $user->id . $user->email . $user->updated_at;
        $linkQuery = Hash::make($stringToHash);
        $urlEncodedLinkQuery = urlencode($linkQuery);

        $link = action([self::class, 'resetPassword'], [
            'email' => $request->input('email'),
            'hash' => $urlEncodedLinkQuery
        ]);

        Mail::to($request->input('email'))->queue(new ResetPasswordMail($link));

        return response()->json([
            'message' => 'reset password email was sent'
        ],200);
    }

    public function resetPassword(Request $request, $email)
    {
        $user = User::where('email', $email)
            ->first();

        $urlEncodedQueryHash = $request->query('hash');
        $queryHash = urldecode($urlEncodedQueryHash);
        $stringToHash = $user->id . $user->email . $user->updated_at;

        if (! Hash::check($stringToHash, $queryHash)) {
            return view('resetPasswordNotification', [
                'success' => false
            ]);
        }

        $password = Str::random(10);

        $user->update([
            'password' => Hash::make($password)
        ]);

        Mail::to($email)->queue(new PasswordMail($password));
        return view('resetPasswordNotification', [
            'success' => true
        ]);
    }
}

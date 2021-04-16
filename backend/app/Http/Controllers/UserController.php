<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * get specified user.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function get(User $user) {
        if (! Auth::check()) {
            return response() -> json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($user);
    }
}

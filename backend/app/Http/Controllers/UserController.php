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

        return response()->json(array_merge(
            $user->toArray(),
            [
                'isFollowedByAuth' => (bool) $user->followers()->find(Auth::id()),
                'followerCount' => $user->followers()->count(),
                'followingCount' => $user->followings()->count()
            ]
        ));
    }

    /**
     * get user followers.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFollowers(User $user) {
        if (! Auth::check()) {
            return response() -> json(['error' => 'Unauthorized'], 401);
        }

        return response()->json(
            ['followers' => $user->followers->all()],
        );
    }

    /**
     * get user followings.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFollowings(User $user) {

        return response()->json(
            ['followings' => $user->followings->all()],
        );
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * get specified user.
     *
     * @param  \App\Models\User $user
     * @return \App\Http\Resources\UserResource
     */
    public function show(User $user) {
        return new UserResource($user);
    }

    /**
     * get user followers.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFollowers(User $user) {

        return response()->json(
            ['followers' => $user->followers()->paginate(20)],
        );
    }

    /**
     * get same with auth followers.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSameFollowers(User $user) {

        return response()->json(
            ['followers' => Auth::user()->followers()->whereIn("follower_id",
                User::findOrFail($user->id)->followers()->pluck("follower_id"))->paginate(20)],
        );
    }

    /**
     * get user followings.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getFollowings(User $user)
    {
        return response()->json(
            ['followings' => $user->followings()->paginate(20)],
        );
    }

    /**
     * get same with auth followings.
     *
     * @param  \App\Models\User $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSameFollowings(User $user) {

        return response()->json(
            ['followings' => Auth::user()->followings()->whereIn("user_id",
                User::findOrFail($user->id)->followings()->pluck("user_id"))->paginate(20)],
        );
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\Follow\FollowRequest;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FollowController extends Controller
{
    public function follow(FollowRequest $request) {
        $user = User::where('id', $request->input('id'))->first();
        $user->followers()->attach(Auth::id());

        return response()->json([
            'message' => 'followed successfully!'
        ]);
    }

    public function unfollow(FollowRequest $request) {
        $user = User::where('id', $request->input('id'))->first();
        $user->followers()->detach(Auth::id());

        return response()->json([
            'message' => 'unfollowed successfully!'
        ]);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function likeAction(Post $post) {
        $isLiked = Auth::user()->likes()->where('post_id', $post->id)->exists();

        if ($isLiked) {
            Auth::user()->likes()->where('post_id', $post->id)->delete();

            return response()->json([
               'currentState' => ! $isLiked,
               'message' => 'unliked'
            ]);
        }

        if (! $isLiked) {
            Auth::user()->likes()->create([
                'user_id' => Auth::id(),
                'post_id' => $post->id
            ]);

            return response()->json([
                'currentState' => ! $isLiked,
                'message' => 'liked'
            ]);
        }

    }

//    public function isActive(Post $post) {
//        return response()->json(Auth::user()->likes()->where('post_id', $post->id)->exists());
//    }
}

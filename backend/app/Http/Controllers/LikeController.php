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

        Auth::user()->likes()->create([
            'post_id' => $post->id
        ]);

        return response()->json([
            'currentState' => ! $isLiked,
            'message' => 'liked'
        ]);

    }

}

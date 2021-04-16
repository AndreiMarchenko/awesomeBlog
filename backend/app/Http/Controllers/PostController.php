<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Requests\Post\EditPostRequest;
use App\Http\Requests\Post\GetAllPostsRequest;
use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Get all posts
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getAll(User $user)
    {
        if (! Auth::check()) {
            return response() -> json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($user->posts);
    }

    /**
     * Create new post.
     *
     * @param  \App\Http\Requests\Post\CreatePostRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(CreatePostRequest $request)
    {
        $path = $request->file('picture')->store('images', 'public');

        $post = Post::create([
            'user_id' => Auth::id(),
            'text' => $request->input('text'),
            'picture' => $path,
            'created_at' => $now = Carbon::now(),
            'updated_at' => $now,
        ]);

        return response()->json([
           'message' => 'Post created successfully!',
            'post' => $post
        ]);
    }

    /**
     * Edit post.
     *
     * @param \App\Http\Requests\Post\EditPostRequest $request
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function edit(EditPostRequest $request, Post $post)
    {
        if ($post->picture === null) {
            $post->update([
                'text' => $request->input('text'),
                'updated_at' => Carbon::now(),
            ]);
        } else {
            $path = $request->file('picture')->store('images', 'public');
            $post->update([
                'text' => $request->input('text'),
                'picture' => $path,
                'updated_at' => Carbon::now(),
            ]);
        }

        return response()->json([
            'message' => 'Post edited successfully!',
            'post' => $post
        ]);
    }

    /**
     * get specified post.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function get(Post $post)
    {
        if (! Auth::check()) {
            return response() -> json(['error' => 'Unauthorized'], 401);
        }

        return response()->json($post);
    }

}

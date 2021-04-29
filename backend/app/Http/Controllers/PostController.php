<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\CreatePostRequest;
use App\Http\Requests\Post\UpdatePostRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Get all posts
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(User $user)
    {
        return response()->json($user->posts()->orderBy('created_at', 'desc')->paginate(12));
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

        $post = Auth::user()->posts()->create([
            'text' => $request->input('text'),
            'picture' => $path,
        ]);

        return response()->json([
           'message' => 'Post created successfully!',
            'post' => $post
        ]);
    }

    /**
     * Edit post.
     *
     * @param \App\Http\Requests\Post\UpdatePostRequest $request
     * @param \App\Models\Post $post
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(UpdatePostRequest $request, Post $post)
    {
        if ($request->file('picture') === null) {
            $post->update([
                'text' => $request->input('text'),
            ]);
        } else {
            $path = $request->file('picture')->store('images', 'public');
            $post->update([
                'text' => $request->input('text'),
                'picture' => $path,
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
    public function show(Post $post)
    {
        return response()->json($post);
    }

}

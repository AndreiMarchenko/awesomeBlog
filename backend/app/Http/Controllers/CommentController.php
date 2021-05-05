<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comment\CommentCountsRequest;
use App\Http\Requests\Comment\CommentRequest;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Ramsey\Collection\Collection;
use Ramsey\Uuid\Type\Integer;

class CommentController extends Controller
{
    /**
     * get all post comments
     *
     * @param Post $post
     * @return JsonResponse
     */
    public function index(Post $post) {
        return response()->json($post->comments);
    }

    /**
     * get post comment count
     *
     * @param Post $post
     * @return JsonResponse
     */
    public function getCommentCount(Post $post) {
        return response()->json($post->comments()->count());
    }

    /**
     * get many posts comment count
     *
     * @param CommentCountsRequest $request
     * @return JsonResponse
     */
//    public function getCommentCounts(CommentCountsRequest $request) {
//        $posts = Post::with('comments')->whereIn('id', $request->input('ids'))->get();
//
//        $commentCounts = [];
//
//        $posts->each(function($post) use (&$commentCounts) {
//            $commentCounts = Arr::add($commentCounts, $post->id, count($post->comments));
//        });
//
//        return response()->json($commentCounts);
//    }


    /**
     * add comment to the post
     *
     * @param Post $post
     * @param CommentRequest $request
     * @return JsonResponse
     */
    public function addComment(Post $post, CommentRequest $request) {
        $comment = $post->comments()->create([
            'user_id' => Auth::id(),
            'post_id' => $post->id,
            'text' => $request->input('text')
        ]);

        return response()->json([
            'message' => 'Comment added successfully',
            'comment' => $comment
        ]);
    }

}

<?php

namespace App\Http\Controllers;

use App\Events\AddedComment;
use App\Http\Requests\Comment\CommentRequest;
use App\Http\Requests\Comment\DeleteCommentRequest;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    /**
     * get all post comments
     *
     * @param Post $post
     * @return JsonResponse
     */
    public function index(Post $post) {
        return response()->json($post->comments()->paginate(15));
    }


    /**
     * add comment to the post
     *
     * @param Post $post
     * @param CommentRequest $request
     * @return JsonResponse
     */
    public function create(Post $post, CommentRequest $request) {
        $comment = $post->comments()->create([
            'user_id' => Auth::id(),
            'text' => $request->input('text')
        ]);

        broadcast(new AddedComment($comment))->toOthers();

        return response()->json([
            'message' => 'Comment added successfully',
            'comment' => $comment
        ]);
    }

    /**
     * delete comment
     *
     * @param Post $post
     * @param Comment $comment
     * @param DeleteCommentRequest $request
     * @return JsonResponse
     */
    public function destroy(Post $post, Comment $comment, DeleteCommentRequest $request) {
        $post->comments()->where('id', $comment->id)->delete();
        return response()->json([
            'message' => 'Comment deleted',
        ]);
    }

}

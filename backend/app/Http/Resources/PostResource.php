<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'text' => $this->text,
            'picture' => $this->picture,
            'created_at' => $this->created_at,
            'commentNumber' => $this->comments()->count(),
            'likeNumber' => $this->likes()->count(),
            'isLikedByAuth' => Auth::user()->likes()->where('post_id', $this->id)->exists()
        ];
    }
}

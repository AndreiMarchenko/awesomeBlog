<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'created_at' => $this->created_at,
            'info' => $this->info,
            'picture' => $this->picture,
            'isFollowedByAuth' => $this->followers()->where('follower_id', Auth::id())->exists(),
            'followerCount' => $this->followers()->count(),
            'followingCount' => $this->followings()->count()
        ];
    }
}

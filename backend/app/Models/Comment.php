<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'post_id',
        'text'
    ];

    protected $appends = array('picture', 'author');

    public function getPictureAttribute() {
        return $this->user()->pluck('profile_picture')[0];
    }

    public function getAuthorAttribute() {
        return $this->user()->pluck('name')[0];
    }

    public function post() {
        return $this->belongsTo(Post::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}

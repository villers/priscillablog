<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Comment
 * @package App\Models
 */
class Comment extends Model
{
    /**
     * @var string
     */
    protected $table = 'comments';

    /**
     * @var array
     */
    protected $hidden = ['origin'];

    /**
     * @var array
     */
    protected $fillable = ['post_id', 'name', 'email', 'blog', 'origin', 'content', 'parent_id', 'valid', 'seen', 'subscription'];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function post()
    {
        return $this->belongsTo('App\Models\Post');
    }

    /**
     * @return mixed
     */
    public function parent()
    {
        return $this->hasOne('App\Models\Comment', 'id', 'parent_id')->select('id', 'name');
    }
}

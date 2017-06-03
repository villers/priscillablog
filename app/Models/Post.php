<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Post
 * @package App\Models
 */
class Post extends Model
{
    use SoftDeletes;

    /**
     * @var string
     */
    protected $table = 'posts';

    /**
     * @var array
     */
    protected $fillable = ['title', 'slug', 'summary', 'origin', 'body', 'category_id', 'published'];

    /**
     * @var array
     */
    protected $hidden = ['deleted_at'];

    /**
     * @var array
     */
    protected $casts = [
        'published' => 'boolean'
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag', 'post_tag', 'post_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeShow($query)
    {
        return $query->select([
            'id', 'slug', 'title', 'body', 'category_id',
            'comment_count', 'view_count', 'favorite_count', 'created_at'
        ])->wherePublished(1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeList($query)
    {
        return $query->select([
            'id', 'slug', 'title', 'summary',
            'comment_count', 'view_count', 'favorite_count', 'created_at'
        ])->wherePublished(1);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeManage($query)
    {
        return $query->select('id', 'slug', 'title', 'published', 'created_at');
    }
}

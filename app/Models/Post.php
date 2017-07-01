<?php

namespace App\Models;

use Backpack\CRUD\CrudTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Cviebrock\EloquentSluggable\Sluggable;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;

/**
 * Class Post
 * @package App\Models
 */
class Post extends Model
{
    use SoftDeletes;
    use CrudTrait;
    use Sluggable;
    use SluggableScopeHelpers;

    /**
     * @var bool
     */
    public $timestamps = true;

    /**
     * @var string
     */
    protected $table = 'posts';

    /**
     * @var array
     */
    protected $fillable = ['title', 'slug', 'summary', 'image', 'origin', 'body', 'category_id', 'published'];

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
            'id', 'slug', 'title', 'body', 'image','category_id',
            'comment_count', 'view_count', 'favorite_count', 'created_at'
        ]);
    }

    /**
     * @param $query
     * @return mixed
     */
    public function scopeList($query)
    {
        return $query->select([
            'id', 'slug', 'title', 'summary', 'image',
            'comment_count', 'view_count', 'favorite_count', 'created_at'
        ]);
    }

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'slug_or_title',
            ],
        ];
    }

    /**
     *The slug is created automatically from the "name" field if no slug exists.
     *
     * @return string
     */
    public function getSlugOrTitleAttribute()
    {
        if ($this->slug != '') {
            return $this->slug;
        }

        return $this->title;
    }
}

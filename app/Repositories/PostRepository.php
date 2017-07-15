<?php
namespace App\Repositories;

use App\Models\Category;
use App\Models\Post;
use App\Models\Tag;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

/**
 * Class PostRepository
 */
class PostRepository
{
    /**
     * Get all posts order by publish date.
     *
     * @param int $limit
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function all($limit = 6)
    {
        return Post::where('published', true)
            ->orderBy('created_at', 'desc')
            ->with('category', 'tags')
            ->paginate((int)$limit)->toArray();
    }

    /**
     * Get record(s) by given column.
     *
     * @param  string $column
     * @param  mixed $value
     * @return \Illuminate\Support\Collection|\App\Models\Post
     */
    public function getByColumn($column, $value)
    {
        $post = Post::where($column, $value)
            ->where('published', true)
            ->show()
            ->with(['tags', 'category', 'comments'])
            ->first();

        if ($post) {
            $post->increment('view_count');
        }
        return $post;
    }

    /**
     * Like the post.
     *
     * @param int $postID
     */
    public function likePost($postID)
    {
        return Post::where('id', $postID)
            ->increment('favorite_count');
    }

    /**
     * Get post count.
     *
     * @return int
     */
    public function getPostCount()
    {
        return Post::count();
    }
}

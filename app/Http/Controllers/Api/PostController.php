<?php

namespace App\Http\Controllers\Api;

use App\Providers\Setting\Facade\Setting;
use App\Repositories\CategoryRepository;
use App\Repositories\PostRepository;
use App\Repositories\TagRepository;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * Class PostController
 * @package App\Http\Controllers\Api
 */
class PostController extends Controller
{
    /**
     * Path of stored posts' markdown files.
     *
     * @var string
     */
    protected $relativePath;

    /**
     * PostController constructor.
     *
     * @param PostRepository $post
     * @param CategoryRepository $category
     * @param TagRepository $tag
     */
    public function __construct(PostRepository $post, CategoryRepository $category, TagRepository $tag)
    {
        parent::__construct($post, $category, $tag);
        $this->relativePath = 'posts/';
    }

    /**
     * Get all posts.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function all(Request $request)
    {
        $posts = $this->post->all($request->input('limit', Setting::get('post_per_page')));

        return response()->json($posts);
    }

    /**
     * Get post by slug.
     *
     * @param string $slug
     * @return \Illuminate\Http\JsonResponse
     */
    public function getBySlug($slug)
    {
        $post = $this->post->getByColumn('slug', $slug);
        if (is_null($post)) {
            return response()->json(['error' => POST_NOT_FOUND, 'message' => trans('post.not_found')], REST_RESOURCE_NOT_FOUND);
        } else {
            return response()->json($post);
        }
    }

    /**
     * Like the post.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function like($id)
    {
        $result = $this->post->likePost($id);

        return $result ?
            response()->json([], REST_CREATE_SUCCESS) :
            response()->json(['error' => FAIL_TO_LIKE_POST, 'message' => trans('post.like_fail')], REST_BAD_REQUEST);
    }
}

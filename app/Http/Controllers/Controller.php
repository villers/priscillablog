<?php

namespace App\Http\Controllers;

use App\Repositories\CategoryRepository;
use App\Repositories\PostRepository;
use App\Repositories\TagRepository;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * @var PostRepository
     */
    protected $post;

    /**
     * @var CategoryRepository
     */
    protected $category;

    /**
     * @var TagRepository
     */
    protected $tag;

    public function __construct(PostRepository $post, CategoryRepository $category, TagRepository $tag)
    {
        $this->post = $post;
        $this->category = $category;
        $this->tag = $tag;
    }

    /**
     * Blog index
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('blog.index');
    }
}

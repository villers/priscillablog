<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Backpack\CRUD\app\Http\Controllers\CrudController;

// VALIDATION: change the requests to match your own file names if you need form validation
use App\Http\Requests\PostRequest as StoreRequest;
use App\Http\Requests\PostRequest as UpdateRequest;

class PostCrudController extends CrudController
{
    public function __construct() {

        parent::__construct();

        /*
		|--------------------------------------------------------------------------
		| BASIC CRUD INFORMATION
		|--------------------------------------------------------------------------
		*/
        $this->crud->setModel("App\Models\Post");
        $this->crud->setRoute(config('backpack.base.route_prefix', 'admin').'/post');
        $this->crud->setEntityNameStrings('post', 'posts');
        $this->crud->orderBy('created_at','desc');

        /*
		|--------------------------------------------------------------------------
		| COLUMNS AND FIELDS
		|--------------------------------------------------------------------------
		*/

        // ------ CRUD COLUMNS
        $this->crud->addColumn([
            'name' => 'title',
            'label' => "Title"
        ]);
        $this->crud->addColumn([
            'name' => 'created_at',
            'label' => 'Date',
            'type' => 'date'
        ]);
        $this->crud->addColumn([
            'label' => "Category",
            'type' => 'select',
            'name' => 'category_id',
            'entity' => 'category',
            'attribute' => 'name',
            'model' => "App\Models\Category"
        ]);

        // ------ CRUD FIELDS
        $this->crud->addField([    // TEXT
            'name' => 'title',
            'label' => 'Title',
            'type' => 'text',
            'placeholder' => 'Your title here'
        ]);

        $this->crud->addField([
            'name' => 'slug',
            'label' => 'Slug (URL)',
            'type' => 'text',
            'hint' => 'Will be automatically generated from your title, if left empty.',
        ]);

        $this->crud->addField([
            'name' => 'created_at',
            'label' => 'Created',
            'type' => 'date',
            'value' => date('Y-m-d')
        ]);

        $this->crud->addField([    // WYSIWYG
            'name' => 'summary',
            'label' => 'Summary',
            'type' => 'text',
            'placeholder' => 'Your summary text here'
        ]);

        $this->crud->addField([    // WYSIWYG
            'name' => 'body',
            'label' => 'Body',
            'type' => 'ckeditor',
            'placeholder' => 'Your textarea text here'
        ]);

        $this->crud->addField([    // Image
            'name' => 'image',
            'label' => 'Image',
            'type' => 'browse'
        ]);
        $this->crud->addField([    // SELECT
            'label' => "Category",
            'type' => 'select2',
            'name' => 'category_id',
            'entity' => 'category',
            'attribute' => 'name',
            'model' => "App\Models\Category"
        ]);
        $this->crud->addField([    // Select2Multiple = n-n
            'label' => 'Tags',
            'type' => 'select2_multiple',
            'name' => 'tags',
            'entity' => 'tags',
            'attribute' => 'name',
            'model' => "App\Models\Tag",
            'pivot' => true,
        ]);

        $this->crud->addField([
            'name' => 'published',
            'label' => 'Publish?',
            'type' => 'checkbox'
        ]);
    }

    public function store(StoreRequest $request)
    {
        return parent::storeCrud();
    }

    public function update(UpdateRequest $request)
    {
        return parent::updateCrud();
    }
}

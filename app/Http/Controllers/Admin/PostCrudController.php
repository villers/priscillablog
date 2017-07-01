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
            'label' => "Titre",
            'name' => 'title',
        ]);
        $this->crud->addColumn([
            'label' => 'Date de création',
            'name' => 'created_at',
            'type' => 'date'
        ]);
        $this->crud->addColumn([
            'label' => 'Publié',
            'name' => 'published',
            'type' => 'checkbox'
        ]);
        $this->crud->addColumn([
            'label' => "Categorie",
            'name' => 'category_id',
            'type' => 'select',
            'entity' => 'category',
            'attribute' => 'name',
            'model' => "App\Models\Category"
        ]);

        // ------ CRUD FIELDS
        $this->crud->addField([    // TEXT
            'label' => 'Titre',
            'name' => 'title',
            'type' => 'text',
            'placeholder' => 'Your title here'
        ]);

        $this->crud->addField([
            'label' => 'Slug (URL)',
            'name' => 'slug',
            'type' => 'text',
            'hint' => 'Will be automatically generated from your title, if left empty.',
        ]);

        $this->crud->addField([
            'label' => 'Date de créatio',
            'name' => 'created_at',
            'type' => 'date',
            'value' => date('Y-m-d')
        ]);

        $this->crud->addField([    // WYSIWYG
            'label' => 'Résumé',
            'name' => 'summary',
            'type' => 'text',
            'placeholder' => 'Your summary text here'
        ]);

        $this->crud->addField([    // WYSIWYG
            'label' => 'Article',
            'name' => 'body',
            'type' => 'ckeditor',
            'placeholder' => 'Your textarea text here'
        ]);

        $this->crud->addField([    // Image
            'label' => 'Image',
            'name' => 'image',
            'type' => 'browse'
        ]);
        $this->crud->addField([    // SELECT
            'label' => "Categorie",
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
            'label' => 'Publier',
            'name' => 'published',
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

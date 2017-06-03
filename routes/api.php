<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace' => 'Api'], function () {
    // Post
    Route::get('/posts', 'PostController@all');
    Route::get('/posts/{slug}', 'PostController@getBySlug');
    Route::post('/posts/{id}/likes', 'PostController@like');
});

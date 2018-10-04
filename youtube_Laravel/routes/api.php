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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('likes/create','LikesController@create');

Route::get('likes/index','LikesController@index');

Route::get('likes/show/{id}','LikesController@show');

Route::get('comment/index','CommentsController@index');

Route::get('comment/show/{id}','CommentsController@show');

Route::post('comment/create','CommentsController@create');

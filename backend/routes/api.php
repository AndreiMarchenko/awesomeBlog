<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EditProfileController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ResetPasswordController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'edit-user'
], function() {
    Route::post('/name', [EditProfileController::class, 'changeName']);
    Route::post('/password', [EditProfileController::class, 'changePassword']);
    Route::post('/picture', [EditProfileController::class, 'changePicture']);
    Route::post('/info', [EditProfileController::class, 'changeInfo']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function() {
    Route::get('/{user}', [UserController::class, 'get']);
    Route::get('followers/{user}', [UserController::class, 'getFollowers']);
    Route::get('followings/{user}', [UserController::class, 'getFollowings']);
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'follow'
], function() {
    Route::post('/add', [FollowController::class, 'follow']);
    Route::post('/remove', [FollowController::class, 'unfollow']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'post'
], function() {
    Route::post('/create', [PostController::class, 'create']);
    Route::post('/edit/{post}', [PostController::class, 'edit']);
    Route::get('/all/{user}', [PostController::class, 'getAll'])
        ->whereNumber('user');
    Route::get('/{post}', [PostController::class, 'get']);
});

Route::post('/reset-password', [ResetPasswordController::class, 'sendResetPasswordLink']);
Route::get('/reset-password-confirmation/{email}', [ResetPasswordController::class, 'resetPassword']);

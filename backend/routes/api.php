<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EditProfileController;
use App\Mail\Mailtrap;
use Illuminate\Support\Facades\Mail;
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
//    Route::post('/email', function() {
//        Mail::to('newuser@example.com')->send(new Mailtrap());
//        return 'A message has been sent to Mailtrap!';
//
//    });
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

<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

Route::get('/', function() {
    return Inertia::render('home');
});

Route::get('/about', function() {
    return Inertia::render('about');
});

Route::get('/posts/create', [PostController::class, 'create']);
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{post}', [PostController::class, 'show']);
Route::post('/posts', [PostController::class, 'store']);

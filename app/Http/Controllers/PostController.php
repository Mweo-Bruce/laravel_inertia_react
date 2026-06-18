<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class PostController extends Controller
{
    //
    public function index(): Response {
        return Inertia::render('posts/index', [
            'posts' => Post::latest()->get(),
        ]);
    }

    public function show(Post $post): Response {
        return Inertia::render('posts/show', [
            'post' => $post,
        ]);
    }

    public function create(): Response {
        return Inertia::render('posts/create');
    }

    public function store(Request $request): RedirectResponse {
        // Validate submitted data
        $validated = $request->validate([
            'title' => 'required|string|min:3|max:255',
            'body' => 'required|string|min:10|max:255',
        ]);

        // Create and save the post in the database
        Post::create($validated);

        // Redirect to /posts page
        return redirect('/posts');
    }
}

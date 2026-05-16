import { Post } from "@/types";
import { Link } from "@inertiajs/react";
import AppLayout from "@/layouts/app-layout";

interface PostsIndexProps {
    posts: Post[];
}

export default function PostsIndex({ posts }: PostsIndexProps) {
    return (
        <AppLayout>
            <h1>Posts</h1>

            {/* Check if there posts */}
            {posts.length === 0 ? (
                <div>No posts found.</div>
            ) : (
                <div>
                    {posts.map(post => (
                        <div>
                            <h2>
                                <Link href={`/posts/{post}`}>{post.title}</Link>
                            </h2>
                        </div>
                    ))}
                </div>
            )}
        </AppLayout>
    );
}

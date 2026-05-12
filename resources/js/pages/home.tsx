import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

export default function PostsShow() {
    return (
        <AppLayout>
            <h1>Home</h1>
            <div>Welcome to home page</div>
            <Link href="/about">About</Link>
        </AppLayout>
    );
}

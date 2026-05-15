import AppLayout from "@/layouts/app-layout";
import { Link } from "@inertiajs/react";

export default function About() {
    return (
        <AppLayout>
            <h1>About - Updated</h1>
            <div>Welcome to about about</div>
            <Link href="/">Home</Link>
        </AppLayout>
    );
}

import AppLayout from "@/layouts/app-layout";

interface Posts {
    posts: {
        title: string,
        body: string,
    }
}

export default function Index({ posts }: Posts) {
    return (
        <AppLayout>
            <div>{posts.title}</div>
            <p>{posts.body}</p>
        </AppLayout>
    );
}

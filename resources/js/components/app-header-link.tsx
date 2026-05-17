import { ReactNode } from "react";
import { Link } from "@inertiajs/react";

interface AppHeaderLinkProps {
    href: string;
    children: ReactNode;
}

export default function AppHeaderLink({ href, children}: AppHeaderLinkProps) {
    return (
        <Link className="text-gray-600 font-medium" href={href}>
            {children}
        </Link>
    );
}

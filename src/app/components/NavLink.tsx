import Link from "next/link";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} className="mr-4 bg-amber-50 text-blue-600">
            {children}
        </Link>
    );
}

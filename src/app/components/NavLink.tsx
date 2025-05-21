import Link from "next/link";

/**
 * NavLink コンポーネント
 * props（properties）は、コンポーネントに渡されるデータです。
 * @param href - リンクのhref。属性値は原則そのまま命名します。
 * @param children - リンクの子要素。タグで囲んだ内容を渡します。
 * @returns NavLink コンポーネント
 */
export default function NavLink(
    { href, children }: { href: string, children: React.ReactNode }) {
    return (
        // クラスを指定するときは、classNameを使用します。（Reactのルール）
        // tailwindcssでは、CSSプロパティをクラス名に変換して指定します。
        <Link href={href} className="mr-4 bg-amber-50 text-blue-600">
            {children}
        </Link>
    );
}

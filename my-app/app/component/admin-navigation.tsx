import Link from "next/link";

export default function Navigation() {
    return (
        <div>
            <nav className="flex w-full bg-black text-2xl text-white p-3 justify-around">
                <ul>
                    <li><Link href="/admin">Admin</Link></li>
                </ul>
                <ul>
                    <li><Link href="/about">About</Link></li>
                </ul>
                <ul>
                    <li><Link href="/about/services">services</Link></li>
                </ul>
                <ul>
                    <li><Link href="/about/services/end">End</Link></li>
                </ul>
            </nav>
        </div>
    )
}
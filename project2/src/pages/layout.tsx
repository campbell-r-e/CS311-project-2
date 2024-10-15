
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <div>
    <nav>
    <Link href="/" id = "home">index</Link>
    </nav>
    <main>{children}</main>
   </div>
  );
}

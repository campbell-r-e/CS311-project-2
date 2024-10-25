
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <div>
    
      <div className="text-center text-red-800 text-sm">
      <Link href="/">back</Link>
      </div>
    
    
    <main>{children}</main>
   </div>
  );
}

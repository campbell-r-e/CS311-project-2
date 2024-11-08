
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <div>
    
      <div className="text-center text-red-800 text-4xl">
      <Link href="/">Return to main menu</Link>
      </div>
    
    
    <main>{children}</main>
   </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <Link href={'/about'}>About page</Link>
      </main>
    
  
  );
}

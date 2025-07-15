import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-between m-3">
      <div className="text-xl border-solid border-2 border-gray-900 p-4 rounded-lg text-black">
        <Link href="/ssg">Static Site Generation (SSG)</Link>
      </div>
      <div className="text-xl border-solid border-2 border-gray-900 p-4 rounded-lg text-black">
        <Link href="/ssr">Server-Side Rendering (SSR)</Link>
      </div>
      <div className="text-xl border-solid border-2 border-gray-900 p-4 rounded-lg text-black">
        <Link href="/csr">Client-Side Rendering (CSR)</Link>
      </div>
      <div className="text-xl border-solid border-2 border-gray-900 p-4 rounded-lg text-black">
        <Link href="/isr">Incremental Static Regeneration (ISR)</Link>
      </div>
    </div>
  );
}

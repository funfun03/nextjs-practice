import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-black mb-4">
          Next.js Rendering Methods
        </h1>
        <p className="text-gray-600 text-lg">
          Explore different rendering strategies in Next.js
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <Link
          href="/ssg"
          className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 hover:scale-[1.02] transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🏗️</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600">
              Static Site Generation
            </h3>
            <p className="text-gray-600 text-sm">Pre-rendered at build time</p>
            <div className="mt-4 text-blue-600 font-medium">SSG →</div>
          </div>
        </Link>

        <Link
          href="/ssr"
          className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 hover:scale-[1.02] transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600">
              Server-Side Rendering
            </h3>
            <p className="text-gray-600 text-sm">Rendered on each request</p>
            <div className="mt-4 text-blue-600 font-medium">SSR →</div>
          </div>
        </Link>

        <Link
          href="/csr"
          className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 hover:scale-[1.02] transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🖥️</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600">
              Client-Side Rendering
            </h3>
            <p className="text-gray-600 text-sm">Rendered in the browser</p>
            <div className="mt-4 text-blue-600 font-medium">CSR →</div>
          </div>
        </Link>

        <Link
          href="/isr"
          className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 hover:scale-[1.02] transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600">
              Incremental Static Regeneration
            </h3>
            <p className="text-gray-600 text-sm">
              Static with periodic updates
            </p>
            <div className="mt-4 text-blue-600 font-medium">ISR →</div>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center py-12">
        <p className="text-gray-500 text-sm">
          Click on any card to explore the rendering method
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">🔍</span>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-black">
          We are still working on that
        </h2>
        <p className="text-gray-600 mb-8">Please come back later</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-gradient-primary hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-medium"
        >
          <span className="mr-2 t">🏠</span>
          Return Home
        </Link>
      </div>
    </div>
  );
}

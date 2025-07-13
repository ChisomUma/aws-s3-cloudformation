export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Welcome to My Static Site
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Built with Next.js 14, TypeScript, and Tailwind CSS
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">⚡ Fast</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Static generation for lightning-fast performance
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">🔧 Modern</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Built with the latest Next.js features and TypeScript
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">📱 Responsive</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Looks great on all devices with Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

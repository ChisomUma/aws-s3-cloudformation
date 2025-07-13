import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - My Static Site',
  description: 'Learn more about our static website',
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            This is a simple static website built with Next.js 14, showcasing modern web development practices.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Technologies Used</h2>
          <ul className="space-y-2">
            <li>Next.js 14 with App Router</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>Static export for hosting</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
          <ul className="space-y-2">
            <li>Fully responsive design</li>
            <li>Dark mode support</li>
            <li>SEO optimized</li>
            <li>Fast loading times</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold text-white mb-4">
          hi, i'm mabel
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          16. messing around and making videos about it
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/portfolio/videos"
            className="bg-amber-400 text-charcoal px-6 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors"
          >
            my videos
          </Link>
        </div>
      </section>
    </div>
  );
}

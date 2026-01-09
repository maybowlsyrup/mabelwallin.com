import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-slate-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/portfolio" className="flex items-center">
              <span className="text-2xl font-bold text-amber-400">mabel wallin</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link
              to="/portfolio"
              className={`${
                isActive('/') || isActive('/portfolio')
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-gray-300 hover:text-amber-400'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/portfolio/videos"
              className={`${
                isActive('/portfolio/videos')
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-gray-300 hover:text-amber-400'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Videos
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive('/contact')
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-gray-300 hover:text-amber-400'
              } px-3 py-2 text-sm font-medium transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

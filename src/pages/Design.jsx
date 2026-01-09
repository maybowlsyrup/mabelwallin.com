import { useState } from 'react';

export default function Design() {
  // Sample design data - replace with your actual design work
  const [designs] = useState([
    {
      id: 1,
      title: 'Design Project 1',
      category: 'Branding',
      description: 'Description of your first design project',
      image: 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Design+1',
    },
    {
      id: 2,
      title: 'Design Project 2',
      category: 'Typography',
      description: 'Description of your second design project',
      image: 'https://via.placeholder.com/800x600/7c3aed/ffffff?text=Design+2',
    },
    {
      id: 3,
      title: 'Design Project 3',
      category: 'Layout',
      description: 'Description of your third design project',
      image: 'https://via.placeholder.com/800x600/6d28d9/ffffff?text=Design+3',
    },
    {
      id: 4,
      title: 'Design Project 4',
      category: 'Illustration',
      description: 'Description of your fourth design project',
      image: 'https://via.placeholder.com/800x600/5b21b6/ffffff?text=Design+4',
    },
    {
      id: 5,
      title: 'Design Project 5',
      category: 'Poster Design',
      description: 'Description of your fifth design project',
      image: 'https://via.placeholder.com/800x600/4c1d95/ffffff?text=Design+5',
    },
    {
      id: 6,
      title: 'Design Project 6',
      category: 'Digital Art',
      description: 'Description of your sixth design project',
      image: 'https://via.placeholder.com/800x600/3b0764/ffffff?text=Design+6',
    },
  ]);

  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <div className="space-y-8 px-4">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">designs</h1>
        <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
          photoshop stuff from class and random projects when i'm bored
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {designs.map((design) => (
          <div
            key={design.id}
            className="bg-slate-dark rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-400 transition-colors cursor-pointer"
            onClick={() => setSelectedDesign(design)}
          >
            <div className="aspect-[4/3] bg-charcoal-300 overflow-hidden">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {design.title}
              </h3>
              <span className="text-xs font-medium text-amber-400 bg-amber-400/20 px-2 py-1 rounded inline-block mb-2">
                {design.category}
              </span>
              <p className="text-gray-300">{design.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing full design */}
      {selectedDesign && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="bg-slate-dark rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto border border-amber-400"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {selectedDesign.title}
                  </h2>
                  <span className="text-sm font-medium text-amber-400 bg-amber-400/20 px-3 py-1 rounded">
                    {selectedDesign.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="text-gray-400 hover:text-white text-3xl"
                >
                  ×
                </button>
              </div>
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="w-full rounded-lg mb-4"
              />
              <p className="text-gray-300">{selectedDesign.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Instructions for adding designs */}
      <div className="mt-12 bg-slate-dark border border-amber-400/30 rounded-lg p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold text-amber-400 mb-2">
          How to Add Your Design Work
        </h3>
        <div className="text-gray-300 space-y-2 text-sm sm:text-base">
          <p>1. Replace the sample design data in the <code className="bg-charcoal-300 px-2 py-1 rounded text-amber-300">designs</code> array</p>
          <p>2. Add your design images to the <code className="bg-charcoal-300 px-2 py-1 rounded text-amber-300">public</code> folder</p>
          <p>3. Update the image paths to point to your actual files</p>
          <p>4. Customize categories and descriptions for each piece</p>
        </div>
      </div>
    </div>
  );
}

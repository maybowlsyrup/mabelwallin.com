import { useState } from 'react';

export default function Videos() {
  // Sample video data - replace with your actual videos
  const [videos] = useState([
    {
      id: 1,
      title: 'Sample Video 1',
      description: 'Description of your first video project',
      thumbnail: 'https://via.placeholder.com/640x360/4299e1/ffffff?text=Video+1',
      videoUrl: '', // Add your video URL or embed code
    },
    {
      id: 2,
      title: 'Sample Video 2',
      description: 'Description of your second video project',
      thumbnail: 'https://via.placeholder.com/640x360/3b82f6/ffffff?text=Video+2',
      videoUrl: '',
    },
    {
      id: 3,
      title: 'Sample Video 3',
      description: 'Description of your third video project',
      thumbnail: 'https://via.placeholder.com/640x360/2563eb/ffffff?text=Video+3',
      videoUrl: '',
    },
  ]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">videos</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          stuff i've filmed and edited. still learning but having fun with it
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-slate-dark rounded-lg overflow-hidden border-2 border-transparent hover:border-amber-400 transition-colors"
          >
            <div className="aspect-video bg-charcoal-300 relative group">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-amber-400 text-charcoal px-6 py-3 rounded-full font-medium">
                  Play Video
                </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {video.title}
              </h3>
              <p className="text-gray-300">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Instructions for adding videos */}
      <div className="mt-12 bg-slate-dark border border-amber-400/30 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-amber-400 mb-2">
          How to Add Your Videos
        </h3>
        <div className="text-gray-300 space-y-2">
          <p>1. Replace the sample video data in the <code className="bg-charcoal-300 px-2 py-1 rounded text-amber-300">videos</code> array</p>
          <p>2. Add your video files to the <code className="bg-charcoal-300 px-2 py-1 rounded text-amber-300">public</code> folder</p>
          <p>3. Or use YouTube/Vimeo embed codes by adding iframe elements</p>
          <p>4. Update thumbnails with screenshots from your videos</p>
        </div>
      </div>
    </div>
  );
}

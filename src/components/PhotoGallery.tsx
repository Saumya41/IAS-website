import React from 'react';

const photos = [
  { url: '/images/11.jpeg', title: 'Community Meeting' },
  { url: '/images/9.jpeg', title: 'Rural Development' },
  { url: '/images/12.jpeg', title: 'Education Initiative' },
  { url: '/images/13.jpeg', title: 'Healthcare Campaign' },
];

const PhotoGallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Frames of Service</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;

import React from 'react';


const ContentItem = ({ imageUrl, title, content, readMoreUrl }) => (
  <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="md:w-1/4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover"
      />
    </div>
    <div className="md:w-2/3 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{content}</p>
      <a 
        href={readMoreUrl}
        className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Read More
      </a>
    </div>
  </div>
);

const Six = () => {
  const items = [
    {
      imageUrl: "https://images.pexels.com/photos/27559206/pexels-photo-27559206/free-photo-of-a-group-of-people-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "First Article",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      readMoreUrl: "#article1"
    },
    {
      imageUrl: "https://images.pexels.com/photos/23670262/pexels-photo-23670262/free-photo-of-back-view-of-a-woman-hugging-a-horse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Second Article",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      readMoreUrl: "#article2"
    },
    {
      imageUrl: "https://images.pexels.com/photos/19127257/pexels-photo-19127257/free-photo-of-woman-sitting-on-a-rug-in-a-living-room.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Third Article",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      readMoreUrl: "#article3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {items.map((item, index) => (
          <ContentItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Six;


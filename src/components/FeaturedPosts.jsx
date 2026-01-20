import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Eye } from 'lucide-react';

export default function FeaturedPosts() {
  const [currentPage, setCurrentPage] = useState(0);

  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1758565141436-6535f4feb480?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      icon: '🎯',
      iconColor: 'bg-orange-500',
      categories: ['TRAVEL', 'ANIMAL'],
      categoryColors: ['text-cyan-400', 'text-gray-300'],
      title: 'Beachmaster Elephant Seal Fights off Rival Male, The match is uncompromising',
      time: '20 minutes ago',
      views: '23k Views'
    },
    {
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      icon: '🍜',
      iconColor: 'bg-cyan-500',
      categories: ['Travel', 'Food'],
      categoryColors: ['text-cyan-400', 'text-orange-400'],
      title: 'Want fluffy Japanese pancakes but can\'t fly to Tokyo?',
      time: '27 AUGUST',
      views: '24k VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
      icon: '👟',
      iconColor: 'bg-pink-500',
      categories: ['Fashion'],
      categoryColors: ['text-orange-400'],
      title: 'Put Yourself in Your Customers Shoes',
      time: '17 JULY',
      views: '12k VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      icon: '🍴',
      iconColor: 'bg-gray-700',
      categories: ['Travel'],
      categoryColors: ['text-orange-400'],
      title: 'Life and Death in the Empire of the Tiger',
      time: '7 AUGUST',
      views: '16k VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      icon: '🌱',
      iconColor: 'bg-cyan-400',
      categories: ['Lifestyle'],
      categoryColors: ['text-cyan-400'],
      title: 'When Two Wheels Are Better Than Four',
      time: '16 JUN',
      views: '11k VIEWS'
    }
  ];

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(posts.length / 5));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(posts.length / 5)) % Math.ceil(posts.length / 5));
  };

  const displayedPosts = posts.slice(currentPage * 5, (currentPage + 1) * 5);
  const mainPost = displayedPosts[0];
  const gridPosts = displayedPosts.slice(1);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">FEATURED POSTS</h2>
          <div className="hidden md:flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span>❤️</span> Hot tags:
            </span>
            <span className="text-cyan-500"># Casual_18</span>
            <span className="text-cyan-500"># Inspiration</span>
            <span className="text-cyan-500"># Work online</span>
            <span className="text-cyan-500"># Stay home</span>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={nextPage}
            className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300"
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main Featured Post */}
        {mainPost && (
          <div className="relative group cursor-pointer rounded-xl overflow-hidden h-100 transition-shadow duration-300 hover:shadow-2xl shadow-neutral-600">
            <img
              src={mainPost.image}
              alt={mainPost.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Icon Badge */}
            <div className={`absolute top-4 left-4 w-10 h-10 ${mainPost.iconColor} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}>
              {mainPost.icon}
            </div>

            {/* Content */}
            <div className="absolute bottom-8 left-0 right-0 p-6 text-white">
              {/* Categories */}
              <div className="flex items-center gap-2 mb-3">
                {mainPost.categories.map((category, idx) => (
                  <span key={idx}>
                    <span className={`text-xs font-semibold tracking-wider ${mainPost.categoryColors[idx]}`}>
                      {category}
                    </span>
                    {idx < mainPost.categories.length - 1 && (
                      <span className="text-gray-400 mx-2">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {mainPost.title}
              </h3>

              {/* Meta */}
              <div className="flex items-center gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {mainPost.time}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {mainPost.views}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Grid of smaller posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gridPosts.map((post, index) => (
            <div
              key={index}
              className="relative group cursor-pointer rounded-2xl overflow-hidden h-[190px] transition-shadow duration-300 hover:shadow-lg shadow-neutral-500"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Icon Badge */}
              <div className={`absolute top-3 left-3 w-8 h-8 ${post.iconColor} rounded-full flex items-center justify-center text-white text-sm shadow-lg`}>
                {post.icon}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                {/* Categories */}
                <div className="flex items-center gap-2 mb-2">
                  {post.categories.map((category, idx) => (
                    <span key={idx}>
                      <span className={`text-[10px] font-semibold tracking-wider ${post.categoryColors[idx]}`}>
                        {category}
                      </span>
                      {idx < post.categories.length - 1 && (
                        <span className="text-gray-400 mx-1">•</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-sm font-bold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h4>

                {/* Meta */}
                <div className="flex items-center gap-2 text-[10px] text-gray-300">
                  <span>{post.time}</span>
                  <span>•</span>
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
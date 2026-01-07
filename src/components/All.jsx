import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Menu, X, Facebook, Twitter, Instagram, MessageCircle, Clock, Eye, User } from 'lucide-react';

export default function StoriesBlog() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Hero Slider Data
  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=900&fit=crop',
      category1: 'Travel',
      category2: 'Animal',
      title: "How to Visit Bali's Monkey Forest",
      date: '26 August 2020',
      views: '18k Views'
    },
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop',
      category1: 'Lifestyle',
      category2: 'Destinations',
      title: 'Abstract Australia from Above',
      date: '15 September 2020',
      views: '23k Views'
    },
    {
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop',
      category1: 'Travel Tips',
      category2: '',
      title: 'Tips for Scuba Diving the Great Barrier Reef',
      date: '15 September 2020',
      views: '17k Views'
    },
    {
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&h=900&fit=crop',
      category1: 'Hotel',
      category2: 'Healthy',
      title: 'Staying at the Hilton Seychelles Northolme Resort & Spa',
      date: '22 September 2020',
      views: '16k Views'
    }
  ];

  // Featured Posts Data
  const featuredPosts = [
    {
      image: 'https://images.unsplash.com/photo-1583729114483-f7e72b0e8d53?w=800&h=600&fit=crop',
      categories: ['Travel', 'Animal'],
      title: 'Beachmaster Elephant Seal Fights off Rival Male, The match is uncompromising',
      time: '20 minutes ago',
      views: '23k Views',
      large: true
    },
    {
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
      categories: ['Lifestyle'],
      title: 'This genius photo experiment shows we are all just sheeple in the consumer matrix',
      time: '26 August 2020',
      views: '18k Views',
      large: true
    },
    {
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop',
      categories: ['Travel', 'Food'],
      title: "Want fluffy Japanese pancakes but can't fly to Tokyo?",
      time: '27 August',
      views: '23k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
      categories: ['Fashion'],
      title: 'Put Yourself in Your Customers Shoes',
      time: '17 July',
      views: '12k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      categories: ['Travel'],
      title: 'Life and Death in the Empire of the Tiger',
      time: '7 August',
      views: '500 views'
    },
    {
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      categories: ['Lifestyle'],
      title: 'When Two Wheels Are Better Than Four',
      time: '15 Jun',
      views: '1.2k views'
    }
  ];

  // Travel Tips Posts
  const travelPosts = [
    {
      image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=800&h=600&fit=crop',
      categories: ['Artists', 'Film'],
      title: 'Easy Ways to Use Alternatives to Plastic',
      excerpt: 'Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma...',
      date: '27 August',
      read: '12 mins read',
      views: '23k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop',
      categories: ['Fashion'],
      title: 'Tips for Growing Healthy, Longer Hair',
      excerpt: 'Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu...',
      date: '12 August',
      read: '6 mins read',
      views: '3k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
      categories: ['Lifestyle'],
      title: 'Project Ideas Around the House',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor condimentum metus...',
      date: '27 August',
      read: '12 mins read',
      views: '23k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      categories: ['Hotels'],
      title: 'How to Give Yourself a Spa Day from Home',
      excerpt: 'Graduating from a top accelerator or incubator can be as career-defining for a startup founder...',
      date: '18 August',
      read: '14 mins read',
      views: '25k views'
    }
  ];

  // Latest Posts
  const latestPosts = [
    {
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
      category: 'Food',
      title: 'Helpful Tips for Working from Home as a Freelancer',
      date: '7 August',
      read: '11 mins read',
      views: '3k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop',
      category: 'Cooking',
      title: '10 Easy Ways to Be Environmentally Conscious At Home',
      date: '27 Sep',
      read: '10 mins read',
      views: '22k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?w=400&h=300&fit=crop',
      category: 'Cooking',
      title: 'My Favorite Comfies to Lounge in At Home',
      date: '7 August',
      read: '9 mins read',
      views: '12k views'
    },
    {
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop',
      category: 'Travel',
      title: 'How to Give Your Space a Parisian-Inspired Makeover',
      date: '27 August',
      read: '12 mins read',
      views: '23k views'
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="hidden md:flex items-center gap-4">
              <span>Hot topics:</span>
              <a href="#" className="hover:text-cyan-500">Travel tips</a>
              <a href="#" className="hover:text-cyan-500">Book review</a>
              <a href="#" className="hover:text-cyan-500">Hotel review</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-cyan-500"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-cyan-500"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="hover:text-cyan-500"><Instagram className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Stories</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Travel</a>
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Guides</a>
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Food</a>
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Hotels</a>
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Review</a>
              <a href="#" className="text-gray-700 hover:text-cyan-500 font-medium">Lifestyle</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="hidden md:block px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full text-sm font-semibold transition-colors">
                Buy Now
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Home</a>
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Travel</a>
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Guides</a>
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Food</a>
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Hotels</a>
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Review</a>
              <a href="#" className="block text-gray-700 hover:text-cyan-500 font-medium py-2">Lifestyle</a>
            </nav>
          </div>
        )}

        {/* Search Overlay */}
        {searchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex items-center gap-3 mb-4">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for articles..."
                  className="flex-1 text-lg border-none outline-none"
                  autoFocus
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600">Suggested keywords:</span>
                {['World', 'American', 'Opinion', 'Tech', 'Science', 'Books', 'Travel', 'Business'].map((keyword) => (
                  <a key={keyword} href="#" className="text-sm text-cyan-500 hover:underline">
                    {keyword}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden rounded-2xl">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="relative w-full h-full">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400 text-sm font-semibold tracking-wider">{slide.category1}</span>
                  {slide.category2 && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-orange-400 text-sm font-semibold tracking-wider">{slide.category2}</span>
                    </>
                  )}
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">{slide.title}</h2>
                <div className="flex items-center gap-3 text-sm text-gray-200">
                  <span>{slide.date}</span>
                  <span>•</span>
                  <span>{slide.views}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-8 flex gap-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-6 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Featured posts</h3>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <span>Hot tags:</span>
              <a href="#" className="text-cyan-500 hover:underline"># Covid-19</a>
              <a href="#" className="text-cyan-500 hover:underline"># Inspiration</a>
              <a href="#" className="text-cyan-500 hover:underline"># Work online</a>
              <a href="#" className="text-cyan-500 hover:underline"># Stay home</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featuredPosts.slice(0, 2).map((post, index) => (
            <div key={index} className="relative group cursor-pointer rounded-2xl overflow-hidden h-[400px]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  {post.categories.map((cat, idx) => (
                    <span key={idx}>
                      <span className="text-xs font-semibold tracking-wider text-cyan-400">{cat}</span>
                      {idx < post.categories.length - 1 && <span className="text-gray-400 mx-2">•</span>}
                    </span>
                  ))}
                </div>
                <h4 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{post.title}</h4>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <span>{post.time}</span>
                  <span>•</span>
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPosts.slice(2).map((post, index) => (
            <div key={index} className="relative group cursor-pointer rounded-2xl overflow-hidden h-[250px]">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  {post.categories.map((cat, idx) => (
                    <span key={idx} className="text-[10px] font-semibold tracking-wider text-cyan-400">{cat}</span>
                  ))}
                </div>
                <h5 className="text-sm font-bold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">{post.title}</h5>
                <div className="flex items-center gap-2 text-[10px] text-gray-300">
                  <span>{post.time}</span>
                  <span>•</span>
                  <span>{post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8">Travel tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    {post.categories.map((cat, idx) => (
                      <span key={idx} className="text-xs font-semibold text-orange-400">{cat}</span>
                    ))}
                  </div>
                  <h5 className="text-lg font-bold mb-3 hover:text-cyan-500 transition-colors cursor-pointer">{post.title}</h5>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.read}</span>
                    <span>•</span>
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts with Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest Posts */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8">Latest posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-orange-400 mb-3 inline-block">{post.category}</span>
                    <h5 className="text-lg font-bold mb-3 hover:text-cyan-500 transition-colors cursor-pointer">{post.title}</h5>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.read}</span>
                      <span>•</span>
                      <span>{post.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About Author */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="Author"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">Hello, I'm Steven</h4>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Hi, I'm Steven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching...
              </p>
              <div className="flex items-center gap-2">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Most Popular */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h4 className="text-lg font-bold mb-4">Most popular</h4>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex gap-3">
                    <img
                      src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000000}?w=80&h=80&fit=crop`}
                      alt="Post"
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h6 className="text-sm font-bold mb-1 hover:text-cyan-500 cursor-pointer">Article Title Here</h6>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>05 August</span>
                        <span>•</span>
                        <span>150 views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      );
    }
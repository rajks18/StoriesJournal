import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Eye, Star } from 'lucide-react';

export default function LatestPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=200&fit=crop',
      category: { name: 'Food', color: 'text-orange-500' },
      title: 'Helpful Tips for Working from Home as a Freelancer',
      featured: true,
      date: '7 AUGUST',
      readTime: '11 MINS READ',
      views: '3K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=200&fit=crop',
      category: { name: 'Cooking', color: 'text-orange-500' },
      title: '10 Easy Ways to Be Environmentally Conscious At Home',
      featured: false,
      date: '27 SEP',
      readTime: '10 MINS READ',
      views: '22K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=200&fit=crop',
      category: { name: 'Cooking', color: 'text-orange-500' },
      title: 'My Favorite Comfies to Lounge in At Home',
      featured: false,
      date: '7 AUGUST',
      readTime: '9 MINS READ',
      views: '12K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop',
      category: { name: 'Travel', color: 'text-orange-500' },
      title: 'How to Give Your Space a Parisian-Inspired Makeover',
      featured: false,
      date: '27 AUGUST',
      readTime: '12 MINS READ',
      views: '23K VIEWS'
    }
  ];

  const comments = [
    {
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      name: 'David',
      date: '16 Jan 2020',
      text: 'A writer is someone for whom writing is more difficult than...'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
      name: 'Kokawa',
      date: '12 Feb 2020',
      text: 'Striking pewter studded epaulettes silver zips'
    },
    {
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
      name: 'Tsukasi',
      date: '18 May 2020',
      text: 'Workwear bow detailing a slingback buckle strap'
    }
  ];

  const instagramImages = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=100&h=100&fit=crop'
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latest Posts */}
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-muted-foreground tracking-wider mb-6">LATEST POSTS</h2>
          
          <div className="space-y-6">
            {posts.map((post, index) => (
              <article key={index} className="flex gap-5 group cursor-pointer">
                {/* Image */}
                <div className="w-40 h-28 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-semibold ${post.category.color}`}>
                      {post.category.name}
                    </span>
                    <span className="text-muted-foreground">•</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {post.title}
                    {post.featured && <Star className="w-4 h-4 text-muted-foreground" />}
                  </h3>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-full transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground" />
            </button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-cyan-500 text-white'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {page.toString().padStart(2, '0')}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-full transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Last Comments */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground tracking-wider mb-4">LAST COMMENTS</h4>
            <div className="space-y-5">
              {comments.map((comment, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-foreground">{comment.name}</span>
                      <span className="text-xs text-muted-foreground">• {comment.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{comment.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instagram */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground tracking-wider mb-4">INSTAGRAM</h4>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href="#"
                  className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                >
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

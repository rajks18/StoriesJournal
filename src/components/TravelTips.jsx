import { Clock, Eye } from 'lucide-react';

export default function TravelTips() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
      categories: [
        { name: 'Artists', color: 'text-green-600' },
        { name: 'Film', color: 'text-cyan-500' }
      ],
      title: 'Easy Ways to Use Alternatives to Plastic',
      description: 'Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma. The intensive programmes, which...',
      date: '27 AUGUST',
      readTime: '12 MINS READ',
      views: '23K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop',
      badge: { icon: '👁️', color: 'bg-cyan-500' },
      categories: [
        { name: 'Fashion', color: 'text-orange-500' }
      ],
      title: 'Tips for Growing Healthy, Longer Hair',
      description: 'Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultrices eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.',
      date: '12 AUGUST',
      readTime: '6 MINS READ',
      views: '3K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=300&fit=crop',
      categories: [
        { name: 'Lifestyle', color: 'text-orange-500' }
      ],
      title: 'Project Ideas Around the House',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor condimentum metus non tempor. Maecenas non augue aliquam, facilisis lectus quis, lacinia risus.',
      date: '27 AUGUST',
      readTime: '12 MINS READ',
      views: '23K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=300&fit=crop',
      categories: [
        { name: 'Hotels', color: 'text-cyan-500' }
      ],
      title: 'How to Give Yourself a Spa Day from Home',
      description: 'Graduating from a top accelerator or incubator can be as career-defining for a startup founder as an elite university diploma. The intensive programmes, which...',
      date: '18 AUGUST',
      readTime: '14 MINS READ',
      views: '25K VIEWS'
    }
  ];

  const popularPosts = [
    {
      image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=100&h=100&fit=crop',
      title: "Spending Some Quality Time with Kids? It's...",
      date: '05 AUGUST',
      views: '150 VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=100&h=100&fit=crop',
      title: 'Relationship Podcasts are Having "That" Talk',
      date: '12 AUGUST',
      views: '6K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=100&h=100&fit=crop',
      title: "Here's How to Get the Best Sleep at Night",
      date: '15 AUGUST',
      views: '18K VIEWS'
    },
    {
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=100&h=100&fit=crop',
      title: "America's Governors Get Tested for a Virus...",
      date: '12 AUGUST',
      views: '3K VIEWS'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8">
      {/* Header */}
      <h2 className="text-sm font-semibold text-muted-foreground tracking-wider mb-6">TRAVEL TIPS</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Posts Grid - 2x2 */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="relative rounded-xl overflow-hidden mb-4 h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {post.badge && (
                  <div className={`absolute top-3 right-3 w-8 h-8 ${post.badge.color} rounded-full flex items-center justify-center text-white text-sm shadow-lg`}>
                    {post.badge.icon}
                  </div>
                )}
              </div>

              {/* Categories */}
              <div className="flex items-center gap-2 mb-2">
                {post.categories.map((cat, idx) => (
                  <span key={idx} className="flex items-center">
                    <span className={`text-xs font-semibold ${cat.color}`}>{cat.name}</span>
                    {idx < post.categories.length - 1 && (
                      <span className="text-muted-foreground mx-2">•</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                {post.description}
              </p>

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
            </article>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Author Card */}
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-4 border-red-500">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Steven"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Hello, I'm Steven</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hi, I'm Stenven, a Florida native, who left my career in corporate wealth management six years ago to embark on a summer of soul searching that would change the course of my life forever.
            </p>
            <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
              <span>Follow me:</span>
              <div className="flex gap-2 ml-2">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs hover:opacity-80 transition-opacity">f</a>
                <a href="#" className="w-8 h-8 bg-sky-400 rounded-full flex items-center justify-center text-white text-xs hover:opacity-80 transition-opacity">𝕏</a>
                <a href="#" className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs hover:opacity-80 transition-opacity">P</a>
              </div>
            </div>
          </div>

          {/* Most Popular */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground tracking-wider mb-4">MOST POPULAR</h4>
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <article key={index} className="flex gap-3 group cursor-pointer">
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.views}</span>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

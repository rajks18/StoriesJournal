import { Eye } from 'lucide-react';

export default function CategoryPosts() {
  const columns = [
    {
      title: 'DESTINATIONS',
      posts: [
        {
          image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=80&h=80&fit=crop',
          title: 'The Best Time to Travel to Cambodia',
          date: '27 JAN',
          views: '13K VIEWS'
        },
        {
          image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop',
          title: '20 Photos to Inspire You to Visit Cambodia',
          date: '27 AUGUST',
          views: '14K VIEWS'
        },
        {
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=80&h=80&fit=crop',
          title: 'Epic Arts Cambodia: Charity for the Disabled',
          date: '20 AUGUST',
          views: '23K VIEWS'
        }
      ]
    },
    {
      title: 'LIFESTYLE',
      posts: [
        {
          image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=80&h=80&fit=crop',
          title: '10 Ways to De-Stress Your Day Hour by Hour',
          date: '12 AUGUST',
          views: '3K VIEWS'
        },
        {
          image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=80&h=80&fit=crop',
          title: '134 Free Weekly Meal Planner Printable',
          date: '15 AUGUST',
          views: '4.1K VIEWS'
        },
        {
          image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=80&h=80&fit=crop',
          title: 'Free Printable Stickers for Your Bullet Journal',
          date: '16 AUGUST',
          views: '2.2K VIEWS'
        }
      ]
    },
    {
      title: 'PHOTOGRAPHY',
      posts: [
        {
          image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=80&h=80&fit=crop',
          title: 'Which TBA Preset Pack is Right For You?',
          date: '06 MAY',
          views: '23K VIEWS'
        },
        {
          image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=80&h=80&fit=crop',
          title: 'How to Get Amazing Photos at the Pyramids of Giza',
          date: '05 JUN',
          views: '5K VIEWS'
        },
        {
          image: 'https://images.unsplash.com/photo-1473830394358-91588751b241?w=80&h=80&fit=crop',
          title: "Beginner's Guide to Travel Drone Photography",
          date: '08 AUGUST',
          views: '2K VIEWS'
        }
      ]
    }
  ];

  const categories = [
    {
      icon: '✈️',
      iconBg: 'bg-orange-100',
      title: 'Travel Tips',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: '🌿',
      iconBg: 'bg-green-100',
      title: 'Lifestyle',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      icon: '🍳',
      iconBg: 'bg-yellow-100',
      title: 'Foody',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8">
      {/* Three Column Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {columns.map((column, colIndex) => (
          <div key={colIndex}>
            <h3 className="text-sm font-semibold text-muted-foreground tracking-wider mb-5">
              {column.title}
            </h3>
            <div className="space-y-4">
              {column.posts.map((post, postIndex) => (
                <article key={postIndex} className="flex gap-3 group cursor-pointer">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.date}</span>
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
          </div>
        ))}
      </div>

      {/* Categories Section */}
      <div>
        <h3 className="text-sm font-semibold text-muted-foreground tracking-wider mb-5">CATEGORIES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
            >
              <div className={`w-12 h-12 ${category.iconBg} rounded-full flex items-center justify-center text-xl flex-shrink-0`}>
                {category.icon}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{category.title}</h4>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

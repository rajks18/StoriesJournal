import { useState } from 'react';
import { Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = () => {
    if (email && agreed) {
      console.log('Subscribed:', email);
      setEmail('');
      setAgreed(false);
    }
  };

  const quickLinks = [
    { label: 'About me', href: '#' },
    { label: 'Help & Support', href: '#' },
    { label: 'Licensing Policy', href: '#' },
    { label: 'Refund Policy', href: '#' },
    { label: 'Hire me', href: '#' },
    { label: 'Contact', href: '#' }
  ];

  const tags = [
    'Beautiful', 'New York', 'Droll', 'Intimate',
    'Loving', 'Travel', 'Fighting'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: Twitter, href: '#', color: 'bg-sky-500 hover:bg-sky-600' },
    { icon: MessageCircle, href: '#', color: 'bg-pink-600 hover:bg-pink-700' }
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Me Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide relative inline-block">
              ABOUT ME
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900"></span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Start writing, no matter what. The water does not flow until the faucet is turned on.
            </p>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Address</h4>
              <p className="text-gray-600 text-sm">
                123 Main Street<br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Follow me</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-9 h-9 rounded-full ${social.color} flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                    aria-label={`Social link ${index + 1}`}
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide relative inline-block">
              QUICK LINK
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 text-sm hover:text-cyan-500 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tag Cloud Section */}
          <div className="space-y-18">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide relative inline-block">
              TAGCLOUD
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900"></span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <a
                  key={index}
                  href="#"
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide relative inline-block">
              NEWSLETTER
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gray-900"></span>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Subscribe to our newsletter and get our newest updates right on your inbox.
            </p>
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-sm border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-r-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!email || !agreed}
                >
                  Subscribe
                </button>
              </div>
              <label className="flex items-start gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-xs text-gray-600 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-cyan-500 hover:underline">
                    terms & conditions
                  </a>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p className="text-center sm:text-left">
              © 2020, Stories - Personal Blog{' '}
              <a href="#" className="text-cyan-500 hover:underline">
                HTML Template
              </a>
            </p>
            <p className="text-center sm:text-right">
              Design by{' '}
              <a href="#" className="text-cyan-500 hover:underline">
                AliThemes
              </a>
              {' '}| All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
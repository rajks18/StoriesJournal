import { useState } from 'react';
import { ChevronDown, Menu, Search, FileText, X } from 'lucide-react';

export default function StoriesHeader() {
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isLayoutsOpen, setIsLayoutsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Travel', active: false },
    { name: 'Mega Menu', active: true },
    { name: 'Guides', active: false },
    { name: 'Food', active: false },
    { name: 'Hotels', active: false },
    { name: 'Review', active: false },
    { name: 'Healthy', active: false },
    { name: 'Lifestyle', active: false },
    { name: 'Blog', active: false },
  ];

  return (
    <header className="bg-white border-b border-gray-200 max-w-7xl mx-auto px-6">
      {/* Top Bar */}
      <div className="px-4 lg:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center transform -rotate-12">
            <div className="w-6 h-6 bg-white rounded-sm transform rotate-12"></div>
          </div>
          <span className="text-2xl font-bold text-gray-900">stories.</span>
        </div>

        {/* Right Section - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Layouts Dropdown */}
          <button
            onClick={() => setIsLayoutsOpen(!isLayoutsOpen)}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span className="text-sm">Layouts</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Document */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <FileText className="w-4 h-4" />
            <span className="text-sm">Document</span>
          </button>

          {/* Search */}
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>

          {/* Buy Now Button */}
          <button className="px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation Bar - Desktop Only */}
      <nav className="hidden lg:block px-6 py-3 border-t border-gray-100">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center gap-8">
            {/* Home Dropdown */}
            <button
              onClick={() => setIsHomeOpen(!isHomeOpen)}
              className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-sm font-medium">Home</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Nav Items */}
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-sm font-medium transition-colors relative ${
                  item.active
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.active && (
                  <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-indigo-600"></span>
                )}
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Icons and Menu */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <button className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>

            {/* Twitter */}
            <button className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>

            {/* Pinterest */}
            <button className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
              </svg>
            </button>

            {/* Menu Button */}
            <button className="w-9 h-9 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Top Actions */}
            <div className="space-y-3 pb-4 border-b border-gray-200">
              <button className="w-full text-left flex items-center gap-2 text-gray-700 py-2">
                <span className="text-sm">Layouts</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </button>
              <button className="w-full text-left flex items-center gap-2 text-gray-700 py-2">
                <FileText className="w-4 h-4" />
                <span className="text-sm">Document</span>
              </button>
              <button className="w-full text-left flex items-center gap-2 text-gray-700 py-2">
                <Search className="w-4 h-4" />
                <span className="text-sm">Search</span>
              </button>
              <button className="w-full px-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                Buy Now
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3 pb-4 border-b border-gray-200">
              <button className="w-full text-left flex items-center gap-2 text-gray-700 py-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-sm font-medium">Home</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </button>
              
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`block py-2 text-sm font-medium ${
                    item.active ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>

              <button className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>

              <button className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
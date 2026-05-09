import { useState, useEffect } from 'react';
import { Bell, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: '核心功能' },
    { href: '#story', label: '背景故事' },
    { href: '#how-it-works', label: '使用流程' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
              isScrolled ? 'bg-green-500' : 'bg-white shadow-lg'
            }`}>
              <Bell className={`w-5 h-5 transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-green-600'
              }`} />
            </div>
            <span className={`font-bold text-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}>
              再不吃就坏了
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-green-600 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-700'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              isScrolled 
                ? 'bg-green-500 text-white hover:bg-green-600' 
                : 'bg-green-500 text-white hover:bg-green-600 shadow-lg'
            }`}>
              立即体验
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 font-medium text-gray-700 hover:text-green-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="w-full px-6 py-3 bg-green-500 text-white rounded-full font-medium">
                立即体验
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-semibold">Portfolio</a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 flex flex-col space-y-1">
            <span className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <a href="#about" className="py-2 hover:text-gray-600 transition-colors">About</a>
            <a href="#projects" className="py-2 hover:text-gray-600 transition-colors">Projects</a>
            <a href="#contact" className="py-2 hover:text-gray-600 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

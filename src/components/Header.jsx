import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false); // Close menu when clicking a link
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Spectrum Logo" 
              className="w-10 h-10 drop-shadow-lg"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
              SPECTRUM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://t.me/RGBSpectrumBot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 spectrum-button"
            >
              Launch Bot
            </a>
            <a 
              href="https://docs.rgbspectrum.xyz" 
              target="_blank" 
              rel="noopener noreferrer"            
              className="px-6 py-2 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              Documentation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="https://t.me/RGBSpectrumBot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 spectrum-button text-center"
                onClick={toggleMenu}
              >
                Launch Bot
              </a>
              <a 
                href="https://docs.rgbspectrum.xyz" 
                target="_blank" 
                rel="noopener noreferrer"            
                className="px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center"
                onClick={toggleMenu}
              >
                Documentation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header

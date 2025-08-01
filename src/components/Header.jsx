function Header() {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
  }

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

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </header>
  )
}

export default Header

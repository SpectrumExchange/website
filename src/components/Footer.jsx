function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/10 bg-black/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <img 
              src="/logo.png" 
              alt="Spectrum Logo" 
              className="w-8 h-8 opacity-80"
            />
            <p className="text-gray-400 text-sm">
              © 2025 Spectrum. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#privacy" 
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy
            </a>
            <a 
              href="#terms" 
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-gray-500 text-xs text-center">
            Trade responsibly. Digital assets carry risk. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

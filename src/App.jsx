import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const scrollToFeatures = () => {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 particle-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <img 
              src="/logo.png" 
              alt="Spectrum Logo" 
              className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl logo-float"
            />
          </div>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the future of digital asset trading with our revolutionary Telegram Mini App. 
            Buy, sell, and trade RGB assets in a seamless, colorful ecosystem.
          </p>
          <a 
            href="https://t.me/RGBSpectrumBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group spectrum-button"
          >
            <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Launch Bot
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16 section-title">
            Why Choose Spectrum?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 glass-card">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Red Assets</h3>
              <p className="text-gray-300 text-center">
                Trade premium red-spectrum digital assets with advanced market analytics
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 glass-card">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">G</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Green Assets</h3>
              <p className="text-gray-300 text-center">
                Invest in sustainable green-spectrum assets with real-time market data
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 glass-card">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Blue Assets</h3>
              <p className="text-gray-300 text-center">
                Explore innovative blue-spectrum opportunities with cutting-edge technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Start Trading?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join thousands of traders already using Spectrum to revolutionize their RGB asset portfolio
          </p>
          <a 
            href="https://t.me/RGBSpectrumBot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 group spectrum-button"
          >
            <svg className="w-6 h-6 mr-3 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Launch Bot
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App

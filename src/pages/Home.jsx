import { useState } from 'react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
    
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 border border-white/20">
                  <img
                    src="/logoo.jpg"
                    alt="Maranatha Volleyball Academy Logo"
                    className="w-8 h-8 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <span className="text-2xl font-black text-white">Maranatha</span>
                  <div className="text-sm font-medium text-blue-200 -mt-1">Volleyball Academy</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <button onClick={() => window.location.href = '/'} className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-white text-black shadow-lg transform scale-105 hover:shadow-xl hover:bg-gray-100">Home</button>
              <button onClick={() => window.location.href = '/events'} className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">Events</button>
              <button onClick={() => window.location.href = '/register'} className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">Register</button>
              <button onClick={() => window.location.href = '/contact'} className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">Contact</button>
              <button onClick={() => window.location.href = '/admin'} className="px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">Admin</button>

              {/* Social Media Links */}
              <div className="ml-6 pl-6 border-l border-gray-600">
                <div className="flex items-center space-x-3">
                  <a href="https://facebook.com/maranathavolleyball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-3 group" aria-label="Follow us on Facebook">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                  </a>
                  <a href="https://instagram.com/maranathavolleyball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-rotate-3 group" aria-label="Follow us on Instagram">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://twitter.com/maranathavball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black hover:from-black hover:to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-3 group" aria-label="Follow us on X (Twitter)">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://youtube.com/@maranathavolleyball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:-rotate-3 group" aria-label="Subscribe to our YouTube channel">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                  <a href="https://linkedin.com/company/maranatha-volleyball-academy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-3 group" aria-label="Connect with us on LinkedIn">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
              <div className="px-4 py-4 space-y-2">
                <button onClick={() => { window.location.href = '/'; setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white bg-white/10 font-bold">Home</button>
                <button onClick={() => { window.location.href = '/events'; setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 font-bold">Events</button>
                <button onClick={() => { window.location.href = '/register'; setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 font-bold">Register</button>
                <button onClick={() => { window.location.href = '/contact'; setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 font-bold">Contact</button>
                <button onClick={() => { window.location.href = '/admin'; setIsMobileMenuOpen(false); }} className="block w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 font-bold">Admin</button>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex justify-center space-x-4">
                    <a href="https://facebook.com/maranathavolleyball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                    </a>
                    <a href="https://instagram.com/maranathavolleyball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://twitter.com/maranathavball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://youtube.com/@maranathavolleyball" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="https://linkedin.com/company/maranatha-volleyball-academy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden min-h-screen flex items-center">
        
        <div className="absolute inset-0">
        
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-reverse"></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-400/15 rounded-full blur-2xl animate-float-slow animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-2xl animate-float-reverse animation-delay-2000"></div>

      
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-600/5 via-purple-600/3 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

        
          <div className="absolute top-16 right-16 w-32 h-32 border border-white/10 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/5 rounded-lg rotate-45 animate-float-slow animation-delay-3000"></div>
        </div>

        
        <div className="absolute inset-0 opacity-90">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          >
            <source
              src="/volleyball.mp4"
              type="video/mp4"
            />
          </video>

        
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>

        
          <div className="absolute inset-0">
        
            <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute top-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-reverse"></div>
            <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-400/8 rounded-full blur-2xl animate-float-slow animation-delay-1000"></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/6 rounded-full blur-2xl animate-float-reverse animation-delay-2000"></div>

            {/* Central radial gradient */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-600/8 via-purple-600/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

            {/* Decorative elements */}
            <div className="absolute top-16 right-16 w-32 h-32 border border-white/15 rounded-full animate-spin-slow"></div>
            <div className="absolute bottom-32 left-16 w-24 h-24 border border-white/10 rounded-lg rotate-45 animate-float-slow animation-delay-3000"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Maranatha
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl font-bold text-blue-400">
                    Volleyball Academy
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                  Experience the passion of African volleyball excellence. Join our championship-winning
                  program and elevate your game to new heights with world-class coaching and training.
                </p>
              </div>

              {/* African Volleyball Video Gallery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-xl overflow-hidden">
                  <div className="w-full h-32 relative">
                    <img
                      src="/NEW.jpg"
                      alt="Kenyan Spikes"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl animate-zoom-in-out"
                    />
                    <img
                      src="/Maranatha.jpg"
                      alt="Maranatha Academy"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl animate-zoom-in-out opacity-0 animation-delay-3000"
                    />
                    <img
                      src="/Volleyball.jpg"
                      alt="Volleyball Training"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl animate-zoom-in-out opacity-0 animation-delay-6000"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Maranatha Spikes</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <div className="w-full h-32 relative">
                    <img
                      src="/Volleyball.jpg"
                      alt="Team Victory"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl animate-zoom-in-out"
                    />
                    <img
                      src="/NEW.jpg"
                      alt="New Training"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl animate-zoom-in-out opacity-0 animation-delay-3000"
                    />
                    <img
                      src="/Maranatha.jpg"
                      alt="Maranatha Champions"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl animate-zoom-in-out opacity-0 animation-delay-6000"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">Team Victory</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => window.location.href = '/register'}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="flex items-center justify-center">
                    Join Our Academy
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => window.location.href = '/events'}
                  className="group border-2 border-white/50 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    View Events
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </button>
              </div>

              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-blue-300 font-medium">African Athletes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">15+</div>
                  <div className="text-blue-300 font-medium">Expert Coaches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">25+</div>
                  <div className="text-blue-300 font-medium">Championships</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl max-w-md">
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <div className="w-full h-48 relative">
                      <img
                        src="/NEW.jpg"
                        alt="New volleyball training"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl animate-zoom-in-out"
                      />
                      <img
                        src="/Maranatha.jpg"
                        alt="Maranatha volleyball academy"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl animate-zoom-in-out opacity-0 animation-delay-3000"
                      />
                      <img
                        src="/Volleyball.jpg"
                        alt="Volleyball training session"
                        className="absolute inset-0 w-full h-full object-cover rounded-2xl animate-zoom-in-out opacity-0 animation-delay-6000"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">Maranatha Volleyball Champions</h3>
                      <p className="text-white/80 text-sm">Watch our BEST athletes dominate the GAME</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Maranatha Excellence</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white/70 text-sm">LIVE</span>
                    </div>
                  </div>
                </div>

                
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            poster="/New.jpg"
          >
            <source
              src="/volleyball.mp4"
              type="video/mp4"
            />
            <source
              src="/volleyball.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                    Maranatha
                  </span>
                  <br />
                  <span className="text-4xl md:text-5xl font-bold text-blue-400">
                    Volleyball Academy
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                  Experience the passion of African volleyball excellence. Join our championship-winning
                  program and elevate your game to new heights with world-class coaching and training.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <button
                  onClick={() => window.location.href = '/register'}
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
                >
                  <span className="flex items-center justify-center">
                    Join Our Academy
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <button
                  onClick={() => window.location.href = '/events'}
                  className="group border-2 border-white/50 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center justify-center">
                    View Events
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                </button>
              </div>

              
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">500+</div>
                  <div className="text-blue-300 font-medium">African Athletes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">15+</div>
                  <div className="text-blue-300 font-medium">Expert Coaches</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">25+</div>
                  <div className="text-blue-300 font-medium">Championships</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl max-w-md">
                  <div className="relative rounded-2xl overflow-hidden mb-4">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-48 object-cover rounded-2xl"
                      poster="/Star.jpg"
                    >
                      <source
                        src="/volleyball.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="/volleyball.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">African Volleyball Excellence</h3>
                      <p className="text-white/80 text-sm">Watch our athletes in action</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <span className="text-white font-medium">Live Training</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white/70 text-sm">LIVE</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
              Why Choose Maranatha
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Championship-Level
              <span className="block text-blue-600">Volleyball Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class volleyball training with Olympic-caliber coaching, cutting-edge facilities,
              and a championship-winning culture that transforms athletes into champions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-yellow-900">★</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Olympic Coaching</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Train under certified Olympic coaches with decades of international experience.
                Our coaching methodology has produced national champions and Olympic athletes.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-green-900">✓</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Elite Facilities</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                State-of-the-art training complex with professional-grade courts, strength training equipment,
                and recovery facilities designed for peak athletic performance.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-purple-900">♥</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Champion Culture</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Join a winning culture where excellence is expected, growth is celebrated,
                and every athlete is empowered to reach their championship potential.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-8 text-lg">Trusted by champions worldwide</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">Elite Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-600">25+</div>
                <div className="text-sm text-gray-600 font-medium">National Titles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-600">15+</div>
                <div className="text-sm text-gray-600 font-medium">Olympic Coaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-orange-600">10+</div>
                <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6 shadow-lg">
               Ready to Excel?
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Transform Your Game Into
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Championship Excellence
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the ranks of elite athletes who have elevated their volleyball careers with Maranatha.
              Experience Olympic-level training, championship-winning strategies, and a legacy of excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button
              onClick={() => window.location.href = '/register'}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="flex items-center justify-center">
                Start Your Journey
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button
              onClick={() => window.location.href = '/events'}
              className="group border-2 border-white/30 backdrop-blur-sm text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white transform hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center justify-center">
                Explore Programs
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Success metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">98%</div>
              <div className="text-gray-400 font-medium">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-green-400 mb-2">500+</div>
              <div className="text-gray-400 font-medium">Champions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">25+</div>
              <div className="text-gray-400 font-medium">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-pink-400 mb-2">24/7</div>
              <div className="text-gray-400 font-medium">Support</div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 mb-6 text-lg">Recognized by leading volleyball organizations</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">KVF Certified</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">Olympic Standard</span>
              </div>
              <div className="bg-white/10 px-6 py-3 rounded-lg backdrop-blur-sm">
                <span className="text-white font-bold">Elite Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
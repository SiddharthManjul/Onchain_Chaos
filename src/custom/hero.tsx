"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%)",
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid Lines */}
          <g stroke="#4a90e2" strokeWidth="1" fill="none" filter="url(#glow)" opacity="0.6">
            {/* Vertical Lines */}
            <line x1="200" y1="0" x2="200" y2="800" />
            <line x1="400" y1="0" x2="400" y2="800" />
            <line x1="600" y1="0" x2="600" y2="800" />
            <line x1="800" y1="0" x2="800" y2="800" />
            <line x1="1000" y1="0" x2="1000" y2="800" />

            {/* Horizontal Lines */}
            <line x1="0" y1="150" x2="1200" y2="150" />
            <line x1="0" y1="300" x2="1200" y2="300" />
            <line x1="0" y1="450" x2="1200" y2="450" />
            <line x1="0" y1="600" x2="1200" y2="600" />
          </g>

          {/* Grid Nodes */}
          <g fill="white" filter="url(#glow)">
            {/* Row 1 */}
            <circle cx="200" cy="150" r="4" />
            <circle cx="400" cy="150" r="4" />
            <circle cx="600" cy="150" r="4" />
            <circle cx="800" cy="150" r="4" />
            <circle cx="1000" cy="150" r="4" />

            {/* Row 2 */}
            <circle cx="200" cy="300" r="4" />
            <circle cx="400" cy="300" r="4" />
            <circle cx="600" cy="300" r="4" />
            <circle cx="800" cy="300" r="4" />
            <circle cx="1000" cy="300" r="4" />

            {/* Row 3 */}
            <circle cx="200" cy="450" r="4" />
            <circle cx="400" cy="450" r="4" />
            <circle cx="600" cy="450" r="4" />
            <circle cx="800" cy="450" r="4" />
            <circle cx="1000" cy="450" r="4" />

            {/* Row 4 */}
            <circle cx="200" cy="600" r="4" />
            <circle cx="400" cy="600" r="4" />
            <circle cx="600" cy="600" r="4" />
            <circle cx="800" cy="600" r="4" />
            <circle cx="1000" cy="600" r="4" />
          </g>

          {/* Glitch Effect Lines */}
          {glitchActive && (
            <g stroke="#FFD700" strokeWidth="2" fill="none" opacity="0.8">
              <line x1="0" y1="300" x2="1200" y2="300" />
              <line x1="600" y1="0" x2="600" y2="800" />
            </g>
          )}
        </svg>
      </div>

      {/* Navbar */}
      <nav className="relative z-50 bg-transparent">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <div className="text-sm font-light">Onchain</div>
              <div className="text-2xl font-light">Chaos</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
                ABOUT
              </a>
              <div className="relative group">
                <a
                  href="#"
                  className="text-white hover:text-blue-400 transition-colors text-sm font-medium flex items-center"
                >
                  CHAPTERS
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
                PRIZES
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
                PROGRAM OUTLINE
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition-colors text-sm font-medium">
                WHY JOIN
              </a>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                REGISTER
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            {/* Subtitle */}
            <div className="text-white text-lg font-light mb-4">Hello future</div>

            {/* Main Title */}
            <h1
              className={`text-7xl md:text-8xl font-light text-white mb-16 ${glitchActive ? "animate-text-glitch" : ""}`}
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Onchain
              <br />
              <span style={{ color: "#FFD700" }}>Chaos</span>
            </h1>

            {/* Program Outline Section */}
            <div className="mb-8">
              <h2 className="text-white text-xl font-light mb-6">Program Outline</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <GlitchButton variant="text">Consortiums</GlitchButton>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <GlitchButton variant="text">Conduits</GlitchButton>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <GlitchButton variant="text">Join the Tribe</GlitchButton>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl">
              Trained in silence. Shipped in shadows. Now the terminal writes their prophecy.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes text-glitch {
          0%, 100% { 
            transform: translate(0);
            text-shadow: 0 0 0 #FFD700;
          }
          10% { 
            transform: translate(-1px, 1px);
            text-shadow: 1px 0 0 #4a90e2, -1px 0 0 #FFD700;
          }
          20% { 
            transform: translate(1px, -1px);
            text-shadow: -1px 0 0 #4a90e2, 1px 0 0 #FFD700;
          }
          30% { 
            transform: translate(-1px, -1px);
            text-shadow: 1px 0 0 #FFD700, -1px 0 0 #4a90e2;
          }
          40% { 
            transform: translate(1px, 1px);
            text-shadow: -1px 0 0 #FFD700, 1px 0 0 #4a90e2;
          }
        }

        .animate-text-glitch {
          animation: text-glitch 0.2s infinite;
        }
      `}</style>
    </div>
  )
}

interface GlitchButtonProps {
  children: React.ReactNode
  variant?: "text" | "button"
}

function GlitchButton({ children, variant = "button" }: GlitchButtonProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  const handleMouseEnter = () => {
    setIsGlitching(true)
    setTimeout(() => setIsGlitching(false), 300)
  }

  if (variant === "text") {
    return (
      <button
        className={`text-blue-400 hover:text-blue-300 transition-colors text-lg font-light ${isGlitching ? "animate-text-glitch-subtle" : ""}`}
        onMouseEnter={handleMouseEnter}
      >
        {children}
        <style jsx>{`
          @keyframes text-glitch-subtle {
            0%, 100% { 
              transform: translate(0);
              color: #4a90e2;
            }
            50% { 
              transform: translate(1px, 0);
              color: #FFD700;
            }
          }

          .animate-text-glitch-subtle {
            animation: text-glitch-subtle 0.3s infinite;
          }
        `}</style>
      </button>
    )
  }

  return (
    <button
      className={`
        relative px-8 py-3 bg-transparent border border-blue-400 text-blue-400 
        font-light text-sm uppercase tracking-wider transition-all duration-300
        hover:bg-blue-400 hover:text-black hover:shadow-lg hover:shadow-blue-400/30
        ${isGlitching ? "animate-button-glitch" : ""}
      `}
      onMouseEnter={handleMouseEnter}
    >
      <span className="relative z-10">{children}</span>

      <style jsx>{`
        @keyframes button-glitch {
          0%, 100% { 
            transform: translate(0);
            border-color: #4a90e2;
          }
          25% { 
            transform: translate(-1px, 1px);
            border-color: #FFD700;
          }
          50% { 
            transform: translate(1px, -1px);
            border-color: #4a90e2;
          }
          75% { 
            transform: translate(-1px, -1px);
            border-color: #FFD700;
          }
        }

        .animate-button-glitch {
          animation: button-glitch 0.3s infinite;
        }
      `}</style>
    </button>
  )
}

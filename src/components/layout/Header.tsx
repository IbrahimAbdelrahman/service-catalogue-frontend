import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className='fixed top-4 left-4 right-4 z-50 transition-all duration-300'>
      <div
        className={`mx-auto max-w-7xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f0f0f]/90 backdrop-blur-[20px] rounded-[60px] border border-white/10"
            : "bg-[#1b1b1b00] backdrop-blur-[20px] rounded-[60px]"
        }`}
      >
        <div className='flex items-center justify-between h-16 px-6 lg:px-8'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-semibold text-white'>GenAI</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <a
              href='#services'
              className='text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
            >
              Services
            </a>
            <a
              href='#testimonials'
              className='text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
            >
              Testimonials
            </a>
            <a
              href='#team'
              className='text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
            >
              Team
            </a>
            <a
              href='#faq'
              className='text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
            >
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className='hidden md:flex items-center'>
            <Button
              className='bg-[#90fff4] text-black hover:bg-[#90fff4]/90 transition-all duration-200 text-sm font-medium px-6 py-2 rounded-full h-auto border-0'
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book a demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-white/80 hover:text-[#90fff4] p-2 transition-colors duration-200'
              aria-label='Toggle menu'
            >
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden border-t border-white/10 rounded-b-[60px] overflow-hidden'>
            <div className='px-6 pt-4 pb-6 space-y-3 bg-[#0f0f0f]/95 backdrop-blur-[20px]'>
              <a
                href='#services'
                className='block py-2 text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href='#testimonials'
                className='block py-2 text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href='#team'
                className='block py-2 text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </a>
              <a
                href='#faq'
                className='block py-2 text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className='pt-3'>
                <Button
                  className='w-full bg-[#90fff4] text-black hover:bg-[#90fff4]/90 transition-all duration-200 text-sm font-medium py-3 rounded-full h-auto border-0'
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

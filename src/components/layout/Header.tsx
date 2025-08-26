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
    <div
      className='fixed top-0 left-0 right-0 z-50 opacity-100'
      style={{
        animation: "default",
        transition: "all 0.3s ease",
      }}
    >
      {/* Padding Section Small - equivalent to padding-section-small */}
      <div className='py-3 h-full block'>
        {/* Padding Global - equivalent to padding-global */}
        <div className='px-[11.1vw] py-7 w-full block'>
          {/* Flex Block 3 - equivalent to flex-block-3 */}
          <div className='flex flex-row justify-center items-center'>
            {/* Logo */}
            <a
              href='/'
              className='text-white hover:text-white/60 no-underline relative'
              aria-label='home'
            >
              <div className='flex flex-col relative overflow-hidden'>
                <h1 className='text-xl font-medium text-white m-0 leading-[150%]'>
                  GenAI
                </h1>
              </div>
            </a>

            {/* Menu Container */}
            <div className='flex flex-col h-full ml-auto mr-auto relative'>
              {/* Container Navbar */}
              <div
                className='z-2 ml-auto mr-auto p-[var(--spacing-sizes--small)_var(--spacing-sizes--large)] relative'
                style={{
                  WebkitBackdropFilter: "blur(20px)",
                  backdropFilter: "blur(20px)",
                  backgroundColor: isScrolled ? "#0f0f0f" : "#0f0f0f",
                  borderRadius: "60px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  transition: "all 0.3s ease",
                }}
              >
                {/* Navbar Holder */}
                <div className='w-full h-full'>
                  {/* Navbar Container */}
                  <div className='justify-between items-center w-full h-full flex'>
                    {/* Desktop Navigation Links */}
                    <nav className='h-full hidden md:block'>
                      <div className='flex flex-row justify-start items-center gap-[var(--spacing-sizes--extra-large)]'>
                        {/* Services Link */}
                        <a
                          href='#services'
                          className='text-white/60 cursor-pointer justify-between items-center no-underline flex group relative overflow-hidden py-0'
                        >
                          <div className='relative flex overflow-hidden z-[3]'>
                            <div className='block transform-none transition-transform duration-300 ease-in-out'>
                              <div>Services</div>
                            </div>
                            <div className='absolute inset-x-0 -bottom-full block transform-none transition-transform duration-300 ease-in-out group-hover:-translate-y-full'>
                              <div className='text-white'>Services</div>
                            </div>
                          </div>
                        </a>

                        {/* Team Link */}
                        <a
                          href='#team'
                          className='text-white/60 cursor-pointer justify-between items-center no-underline flex group relative overflow-hidden py-0'
                        >
                          <div className='relative flex overflow-hidden z-[3]'>
                            <div className='block transform-none transition-transform duration-300 ease-in-out'>
                              <div>Team</div>
                            </div>
                            <div className='absolute inset-x-0 -bottom-full block transform-none transition-transform duration-300 ease-in-out group-hover:-translate-y-full'>
                              <div className='text-white'>Team</div>
                            </div>
                          </div>
                        </a>

                        {/* FAQ Link */}
                        <a
                          href='#faq'
                          className='text-white/60 cursor-pointer justify-between items-center no-underline flex group relative overflow-hidden py-0'
                        >
                          <div className='relative flex overflow-hidden z-[3]'>
                            <div className='block transform-none transition-transform duration-300 ease-in-out'>
                              <div>FAQ</div>
                            </div>
                            <div className='absolute inset-x-0 -bottom-full block transform-none transition-transform duration-300 ease-in-out group-hover:-translate-y-full'>
                              <div className='text-white'>FAQ</div>
                            </div>
                          </div>
                        </a>

                        {/* Contact Link */}
                        <a
                          href='#contact'
                          className='text-white/60 cursor-pointer justify-between items-center no-underline flex group relative overflow-hidden py-0'
                        >
                          <div className='relative flex overflow-hidden z-[3]'>
                            <div className='block transform-none transition-transform duration-300 ease-in-out'>
                              <div>Contact us</div>
                            </div>
                            <div className='absolute inset-x-0 -bottom-full block transform-none transition-transform duration-300 ease-in-out group-hover:-translate-y-full'>
                              <div className='text-white'>Contact us</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              {/* Border Glow Effect */}
              <div
                className='absolute -inset-px rounded-full'
                style={{
                  filter: "hue-rotate(234.027deg)",
                  willChange: "filter",
                  backgroundImage:
                    "linear-gradient(107.638deg, #b392ef, #b392ef 10.6203%, #bebeff 10.6203%, #2a2a36 40.9807%, #252529 79.5%, #b392ef)",
                  borderRadius: "100rem",
                  animation: "glow-rotate 3s linear infinite",
                }}
              />
            </div>

            {/* Navbar CTA */}
            <div className='flex items-center gap-4'>
              {/* Mobile Menu Button */}
              <div
                className='md:hidden p-[10px] transition-all duration-[350ms] cursor-pointer select-none text-white/60 hover:text-white'
                onClick={toggleMenu}
                style={{ userSelect: "text" }}
                aria-label='menu'
                role='button'
                tabIndex={0}
              >
                <div className='w-6 h-6 flex items-center justify-center'>
                  {isMenuOpen ? "✕" : "☰"}
                </div>
              </div>

              {/* CTA Contact */}
              <div className='hidden md:flex flex-col'>
                <Button
                  className='bg-[var(--base-color-brand--light-aqua)] text-[var(--base-color-brand--deep-black)] border-0 rounded-full px-[30px] py-[14px] text-base font-medium hover:scale-105 transition-transform duration-[350ms]'
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book a demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur-[20px] border-t border-white/10 rounded-b-[60px] overflow-hidden mx-4'>
          <div className='px-6 pt-4 pb-6 space-y-3'>
            <a
              href='#services'
              className='block py-2 text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
              onClick={() => setIsMenuOpen(false)}
            >
              Services
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
            <a
              href='#contact'
              className='block py-2 text-white/80 hover:text-[#90fff4] transition-colors duration-200 text-sm font-normal'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
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
  );
};

export default Header;

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      data-w-id='90907b88-7f71-7fbf-fd39-6461df92fa39'
      data-animation='default'
      data-collapse='medium'
      data-duration='400'
      data-easing='ease'
      data-easing2='ease'
      role='banner'
      className='navbar w-nav'
      style={{ opacity: 1 }}
    >
      <div className='w-layout-vflex padding-section-small'>
        <div className='w-layout-vflex padding-global'>
          <div className='w-layout-vflex flex-block-3'>
            <a
              href='/'
              aria-current='page'
              className='logo w-nav-brand w--current'
              aria-label='home'
            >
              <div className='w-layout-vflex clip'>
                <h1 className='heading-style-h5 text-weight-medium'>Gen AI</h1>
              </div>
            </a>

            <div className='w-layout-vflex menu-container'>
              <div
                data-w-id='90907b88-7f71-7fbf-fd39-6461df92fa42'
                className='container navbar'
              >
                <div className='navbar_holder'>
                  <div className='navbar_container'>
                    <nav
                      role='navigation'
                      className={`navbar-links_wrapper w-nav-menu ${
                        isMenuOpen ? "menu-open" : ""
                      }`}
                    >
                      <div className='w-layout-vflex navbar-links_inner'>
                        {/* Menu Links */}
                        {[
                          { href: "#section-services", text: "Services" },
                          { href: "#section-team", text: "Team" },
                          { href: "#section-faq", text: "FAQ" },
                          { href: "#section-contact", text: "Contact us" },
                        ].map((link, index) => (
                          <a
                            key={index}
                            data-w-id='07e8df19-f505-5729-ee1f-2562a4d37c8d'
                            href={link.href}
                            className='menu-link w-inline-block'
                          >
                            <div className='w-layout-vflex clip-content'>
                              <div
                                className='w-layout-vflex rotate-text'
                                style={{
                                  transform:
                                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              >
                                <div>{link.text}</div>
                              </div>
                              <div
                                className='w-layout-vflex rotate-text bottom'
                                style={{
                                  transform:
                                    "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              >
                                <div className='text-color-white'>
                                  {link.text}
                                </div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </nav>
                  </div>
                </div>
              </div>

              <div
                className='border-glow'
                style={{
                  filter: "hue-rotate(209.88deg)",
                  willChange: "filter",
                }}
              ></div>
            </div>

            <div className='navbar_cta'>
              <div
                className='menu_button w-nav-button'
                style={{ WebkitUserSelect: "text" }}
                aria-label='menu'
                role='button'
                tabIndex={0}
                aria-controls='w-nav-overlay-0'
                aria-haspopup='menu'
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <div className='w-icon-nav-menu'></div>
              </div>

              <div className='w-layout-vflex navbar-cta_contact'>
                <a href='#section-contact' className='button primary w-button'>
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className='w-nav-overlay'
          data-wf-ignore
          id='w-nav-overlay-0'
        ></div>
      )}
    </div>
  );
};

export default Header;

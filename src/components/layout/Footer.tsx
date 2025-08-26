import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='col-span-1'>
            <h3 className='text-xl font-bold mb-4'>Ateko</h3>
            <p className='text-gray-400 text-sm'>
              We design intuitive, human-centric AI experiences.
            </p>
          </div>

          {/* Contact Info */}
          <div className='col-span-1'>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <div className='space-y-2 text-sm text-gray-400'>
              <p>contact@ateko.com</p>
              <p>(123) 456 - 7890</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className='col-span-1'>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a
                  href='#services'
                  className='hover:text-white transition-colors'
                >
                  Services
                </a>
              </li>
              <li>
                <a href='#team' className='hover:text-white transition-colors'>
                  Team
                </a>
              </li>
              <li>
                <a href='#faq' className='hover:text-white transition-colors'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className='col-span-1'>
            <h4 className='text-lg font-semibold mb-4'>Legal</h4>
            <ul className='space-y-2 text-sm text-gray-400'>
              <li>
                <a
                  href='/privacy'
                  className='hover:text-white transition-colors'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='/terms' className='hover:text-white transition-colors'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='/licensing'
                  className='hover:text-white transition-colors'
                >
                  Licensing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-sm text-gray-400'>
            © 2025 Ateko. All rights reserved.
          </p>
          <p className='text-sm text-gray-400 mt-2 md:mt-0'>
            Made with ❤️ for AI innovators
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='page-wrapper'>
      <div className='bg-wrapper'>
        <div className='bg-overlay'></div>
      </div>
      <div className='w-layout-vflex min-h-screen flex flex-col'>
        <Header />
        <main className='w-full'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;

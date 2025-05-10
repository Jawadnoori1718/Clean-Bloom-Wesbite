import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

// Add this component declaration
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

// Add this export statement
export default Layout; // This was missing
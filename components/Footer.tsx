
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-slate-950 text-slate-500 text-center border-t border-slate-900">
      <div className="container mx-auto px-6">
        <p className="mb-4">Designed & Built by Akil Louisa S</p>
        <p className="text-sm">
          &copy; {currentYear} Akil Louisa S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

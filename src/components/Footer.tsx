
import React from 'react';
import { Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-garden-green-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6" />
            <p className="text-lg font-semibold">Home Farm Designer</p>
          </div>
          <div className="text-sm text-garden-cream opacity-80">
            © {new Date().getFullYear()} Home Farm Designer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

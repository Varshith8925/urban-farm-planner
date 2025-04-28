
import React from 'react';
import { Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b bg-gradient-to-r from-garden-green-light to-garden-green">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sprout className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold text-white">Home Farm Designer</h1>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/design" className="text-white hover:underline">
                Design
              </Link>
            </li>
            <li>
              <Button variant="secondary" asChild>
                <Link to="/design">Get Started</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import React from 'react';
import { Leaf, Sun, Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-garden-cream to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-garden-green-light bg-opacity-20 rounded-full px-4 py-2 text-garden-green-dark font-semibold">
              Transform Your Urban Space
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-garden-green-dark leading-tight">
              Grow Your Own <span className="text-garden-green">Urban Garden</span> Today
            </h1>
            
            <p className="text-lg text-gray-700">
              Design your perfect balcony or terrace garden with our simple planning tool. 
              Get custom layouts, plant suggestions, and care reminders tailored to your space.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="gap-2">
                <Link to="/design">
                  Start Designing <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/gallery">View Example Gardens</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-6 transform rotate-2 animate-grow">
              <div className="aspect-[4/3] bg-garden-green-light bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-4 w-full">
                  {Array(9).fill(0).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-lg h-16 md:h-24 flex items-center justify-center ${
                        i % 2 === 0 ? 'bg-garden-green-light bg-opacity-40' : 'bg-garden-brown-light bg-opacity-30'
                      }`}
                    >
                      {i % 3 === 0 ? <Leaf className="text-garden-green-dark" /> : 
                       i % 3 === 1 ? <Sun className="text-garden-brown" /> : 
                       <Cloud className="text-gray-500" />}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Small Balcony Design</h3>
                  <p className="text-sm text-gray-500">3×3 layout with herbs and flowers</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-garden-green rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 h-16 w-16 bg-garden-brown rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

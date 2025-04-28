
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-garden-green-light to-garden-green text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Sprout className="h-16 w-16" />
        </div>
        
        <h2 className="text-4xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
          Ready to Transform Your Urban Space into a Thriving Garden?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of urban gardeners who are growing their own food and creating beautiful green spaces.
        </p>
        
        <Button 
          size="lg" 
          variant="secondary" 
          className="text-garden-green font-semibold text-lg px-8"
          asChild
        >
          <Link to="/design">Start Designing Your Garden</Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

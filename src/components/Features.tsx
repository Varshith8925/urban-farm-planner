
import React from 'react';
import { Leaf, Sun, Flower, Tractor, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-10 w-10 text-garden-green" />,
    title: 'Custom Garden Designs',
    description: 'Get 3 personalized garden layout designs based on your space dimensions and conditions.'
  },
  {
    icon: <Sun className="h-10 w-10 text-garden-brown" />,
    title: 'Sunlight Analysis',
    description: 'Specify sunny or shaded areas to receive tailored plant recommendations that will thrive.'
  },
  {
    icon: <Flower className="h-10 w-10 text-garden-green-light" />,
    title: 'Plant Recommendations',
    description: 'Discover the perfect combination of vegetables, herbs, and flowers for your urban garden.'
  },
  {
    icon: <Tractor className="h-10 w-10 text-garden-brown-light" />,
    title: 'Space Optimization',
    description: 'Maximize your growing potential with vertical gardening and container arrangement techniques.'
  },
  {
    icon: <Calendar className="h-10 w-10 text-garden-green-dark" />,
    title: 'Care Reminders',
    description: 'Stay on track with watering, fertilizing, and harvesting reminders for your plants.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-garden-green-dark mb-4">How Our Home Farm Designer Helps You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to transform your urban space into a thriving garden, no matter your experience level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-garden-green-light border-opacity-20 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-garden-green-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

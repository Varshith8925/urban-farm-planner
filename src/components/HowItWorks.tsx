
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Enter Your Space Details',
    description: 'Tell us about the size and conditions of your balcony, terrace, or windowsill.'
  },
  {
    number: '02',
    title: 'Choose Your Garden Style',
    description: 'Select from vertical gardens, container arrangements, or mixed designs.'
  },
  {
    number: '03',
    title: 'Review Custom Layouts',
    description: 'We provide 3 personalized garden layout options optimized for your space.'
  },
  {
    number: '04',
    title: 'Get Growing!',
    description: 'Follow our plant recommendations and care guide to bring your garden to life.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-garden-cream bg-opacity-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-garden-green-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our simple 4-step process makes designing your urban garden easier than ever
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start mb-8">
                <div className="bg-garden-green text-white font-bold text-xl rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                  {step.number}
                </div>
                
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-garden-green-dark mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-12 h-12 flex items-center justify-center -translate-x-1/2">
                  <ArrowRight className="h-6 w-6 text-garden-green-light transform rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

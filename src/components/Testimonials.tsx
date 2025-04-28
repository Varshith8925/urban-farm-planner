
import React from 'react';

const testimonials = [
  {
    quote: "I never thought I could grow my own vegetables in my tiny apartment balcony until I used Home Farm Designer. Now I have fresh herbs and tomatoes!",
    author: "Sarah J.",
    location: "Urban apartment dweller"
  },
  {
    quote: "As a busy professional, I wanted a low-maintenance garden. This tool helped me create the perfect setup for my lifestyle and space limitations.",
    author: "Marcus T.",
    location: "City rooftop gardener"
  },
  {
    quote: "The care reminders are a lifesaver! My plants are thriving because I'm finally watering and feeding them at the right times.",
    author: "Emma L.",
    location: "Terrace garden enthusiast"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-garden-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Urban Gardeners Say</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Join thousands who have transformed their urban spaces into thriving gardens
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-garden-green bg-opacity-30 rounded-xl p-6 backdrop-blur-sm"
            >
              <div className="text-xl italic mb-6">"{testimonial.quote}"</div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm opacity-75">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

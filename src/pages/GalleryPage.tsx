
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const galleryItems = [
  {
    id: 1,
    title: "Urban Balcony Herb Garden",
    description: "A small 4×6 ft balcony transformed into an herb paradise",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    tags: ["balcony", "herbs", "containers"],
    size: "4×6 ft",
    sunlight: "Partial Sun"
  },
  {
    id: 2,
    title: "Rooftop Vegetable Garden",
    description: "Raised beds and containers on a sunny 10×12 ft rooftop",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    tags: ["rooftop", "vegetables", "raised beds"],
    size: "10×12 ft",
    sunlight: "Full Sun"
  },
  {
    id: 3,
    title: "Vertical Terrace Garden",
    description: "A 5×8 ft terrace with vertical planters maximizing space",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
    tags: ["terrace", "vertical", "mixed plants"],
    size: "5×8 ft",
    sunlight: "Full Sun"
  },
  {
    id: 4,
    title: "Windowsill Herb Collection",
    description: "A simple windowsill setup with essential cooking herbs",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
    tags: ["windowsill", "herbs", "indoor"],
    size: "3×1 ft",
    sunlight: "Partial Sun"
  },
  {
    id: 5,
    title: "Small Balcony Food Garden",
    description: "Productive food garden in a 6×4 ft city apartment balcony",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    tags: ["balcony", "vegetables", "containers"],
    size: "6×4 ft",
    sunlight: "Partial Sun"
  },
  {
    id: 6,
    title: "Shade-Loving Container Garden",
    description: "Beautiful arrangement of shade-tolerant plants for a north-facing balcony",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    tags: ["balcony", "flowers", "shade"],
    size: "5×5 ft",
    sunlight: "Shade"
  }
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-garden-cream bg-opacity-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-garden-green-dark">Garden Gallery</h1>
              <p className="text-gray-600 mt-2">
                Get inspired by these beautiful urban garden examples
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map(item => (
                <Card key={item.id} className="overflow-hidden flex flex-col h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-garden-green-dark">{item.title}</CardTitle>
                      <Badge variant="outline">{item.size}</Badge>
                    </div>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-2 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <span className="inline-block w-3 h-3 bg-garden-green rounded-full"></span>
                        {item.sunlight}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full">View Details</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Ready to create your own garden?</p>
              <Button asChild>
                <Link to="/design">Start Designing Your Garden</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;

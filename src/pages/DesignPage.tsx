
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SpaceDetailsForm, { SpaceDetails } from '../components/SpaceDetailsForm';
import GardenDesign from '../components/GardenDesign';
import GardenRecommendations from '../components/GardenRecommendations';
import CareReminders from '../components/CareReminders';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Plant } from 'lucide-react';

// Mock design data - in a real app, these would be generated based on user input
const generateDesigns = (spaceDetails: SpaceDetails) => {
  const { width, length, sunlight, spaceType, preferences } = spaceDetails;
  
  // Create a grid based on dimensions
  // In a real app, this would be more sophisticated
  const cellSize = 1; // 1 foot per cell
  const cols = Math.max(3, Math.min(10, Math.floor(width / cellSize)));
  const rows = Math.max(3, Math.min(10, Math.floor(length / cellSize)));
  
  // Generate 3 different layouts
  return [
    {
      id: 1,
      name: "Container Garden",
      description: "Perfect for beginners with modular containers",
      style: "Container",
      plants: [
        { name: "Basil", type: "herb", icon: "plant" },
        { name: "Cherry Tomatoes", type: "vegetable", icon: "plant" },
        { name: "Marigold", type: "flower", icon: "flower" },
        { name: "Lettuce", type: "vegetable", icon: "sprout" },
        { name: "Mint", type: "herb", icon: "plant" }
      ],
      layout: Array(rows).fill(0).map((_, r) => 
        Array(cols).fill(0).map((_, c) => {
          // Pattern for container garden
          if ((r + c) % 3 === 0) return "plant";
          if ((r + c) % 3 === 1) return "sprout";
          return null;
        })
      )
    },
    {
      id: 2,
      name: "Vertical Garden",
      description: "Maximize your space with vertical growing",
      style: "Vertical",
      plants: [
        { name: "Strawberries", type: "fruit", icon: "plant" },
        { name: "Herbs Mix", type: "herb", icon: "sprout" },
        { name: "Trailing Plants", type: "flower", icon: "flower" },
        { name: "Salad Greens", type: "vegetable", icon: "plant" }
      ],
      layout: Array(rows).fill(0).map((_, r) => 
        Array(cols).fill(0).map((_, c) => {
          // Pattern for vertical garden
          if (c < 2 && r % 2 === 0) return "plant";
          if (c < 2 && r % 2 === 1) return "sprout";
          if (c === cols - 1) return "flower";
          return null;
        })
      )
    },
    {
      id: 3,
      name: "Mixed Garden",
      description: "Balanced design with vegetables, herbs, and flowers",
      style: "Mixed",
      plants: [
        { name: "Bell Peppers", type: "vegetable", icon: "plant" },
        { name: "Rosemary", type: "herb", icon: "sprout" },
        { name: "Petunias", type: "flower", icon: "flower" },
        { name: "Kale", type: "vegetable", icon: "plant" },
        { name: "Thyme", type: "herb", icon: "sprout" },
        { name: "Spinach", type: "vegetable", icon: "plant" }
      ],
      layout: Array(rows).fill(0).map((_, r) => 
        Array(cols).fill(0).map((_, c) => {
          // Pattern for mixed garden
          if (r < rows / 3) return c % 3 === 0 ? "plant" : c % 3 === 1 ? "sprout" : null;
          if (r < (rows / 3) * 2) return c % 2 === 0 ? "flower" : null;
          return c % 2 === 0 ? "sprout" : c % 3 === 0 ? "plant" : null;
        })
      )
    }
  ];
};

const DesignPage = () => {
  const [spaceDetails, setSpaceDetails] = useState<SpaceDetails | null>(null);
  const [designOptions, setDesignOptions] = useState<any[]>([]);
  const [selectedDesignId, setSelectedDesignId] = useState<number | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSpaceDetailsSubmit = (data: SpaceDetails) => {
    setSpaceDetails(data);
    const designs = generateDesigns(data);
    setDesignOptions(designs);
    setShowResults(true);
    // Auto-select the first design
    setSelectedDesignId(designs[0].id);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('design-results');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-garden-cream bg-opacity-50 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-garden-green-dark">Design Your Urban Garden</h1>
              <p className="text-gray-600 mt-2">
                Tell us about your space and preferences to get customized garden designs
              </p>
            </div>
            
            <SpaceDetailsForm onSubmit={handleSpaceDetailsSubmit} />
          </div>
        </section>
        
        {showResults && spaceDetails && (
          <section id="design-results" className="py-12 fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-garden-green-dark">Your Custom Garden Designs</h2>
                <p className="text-gray-600 mt-2">
                  Choose the design that fits your style and needs best
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {designOptions.map(design => (
                  <GardenDesign 
                    key={design.id}
                    design={design}
                    spaceDetails={spaceDetails}
                    onSelect={setSelectedDesignId}
                    selected={design.id === selectedDesignId}
                  />
                ))}
              </div>
              
              {selectedDesignId && (
                <div className="space-y-8">
                  <Alert className="bg-garden-green-light bg-opacity-10 border-garden-green-light">
                    <Plant className="h-5 w-5 text-garden-green" />
                    <AlertTitle>Design Selected!</AlertTitle>
                    <AlertDescription>
                      Below are plant recommendations and care reminders for your selected garden design.
                    </AlertDescription>
                  </Alert>
                  
                  <GardenRecommendations 
                    spaceDetails={spaceDetails} 
                    selectedDesignId={selectedDesignId} 
                  />
                  
                  <CareReminders 
                    spaceDetails={spaceDetails} 
                    selectedDesignId={selectedDesignId} 
                  />
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DesignPage;

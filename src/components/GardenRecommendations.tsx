
import React from 'react';
import { Plant, Sun, Sprout, Flower, CloudRain } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { SpaceDetails } from './SpaceDetailsForm';

interface PlantRecommendation {
  id: number;
  name: string;
  type: 'vegetable' | 'herb' | 'flower' | 'fruit';
  sunlightNeeds: 'full' | 'partial' | 'shade';
  wateringFrequency: 'daily' | 'twice_weekly' | 'weekly';
  containerSize: 'small' | 'medium' | 'large';
  growthHeight: number;
  harvestTime: number;
  description: string;
}

interface GardenRecommendationsProps {
  spaceDetails: SpaceDetails;
  selectedDesignId: number;
}

const GardenRecommendations = ({ spaceDetails, selectedDesignId }: GardenRecommendationsProps) => {
  // This would normally come from an API based on user preferences and space details
  const plantRecommendations: PlantRecommendation[] = React.useMemo(() => {
    // Filtering logic would normally happen on the backend
    // Here we're creating sample data based on user preferences
    
    let recommendations: PlantRecommendation[] = [];
    
    if (spaceDetails.preferences.includes('vegetables')) {
      recommendations = recommendations.concat([
        {
          id: 1,
          name: 'Cherry Tomatoes',
          type: 'vegetable',
          sunlightNeeds: 'full',
          wateringFrequency: 'daily',
          containerSize: 'medium',
          growthHeight: 24,
          harvestTime: 60,
          description: 'Compact variety perfect for containers. Produces sweet, bite-sized tomatoes.'
        },
        {
          id: 2,
          name: 'Bell Peppers',
          type: 'vegetable',
          sunlightNeeds: 'full',
          wateringFrequency: 'twice_weekly',
          containerSize: 'medium',
          growthHeight: 18,
          harvestTime: 70,
          description: 'Colorful peppers that thrive in containers. Choose compact varieties.'
        },
        {
          id: 3,
          name: 'Leafy Greens',
          type: 'vegetable',
          sunlightNeeds: 'partial',
          wateringFrequency: 'twice_weekly',
          containerSize: 'small',
          growthHeight: 12,
          harvestTime: 30,
          description: 'Fast-growing greens like spinach and lettuce. Perfect for beginners.'
        }
      ]);
    }
    
    if (spaceDetails.preferences.includes('herbs')) {
      recommendations = recommendations.concat([
        {
          id: 4,
          name: 'Basil',
          type: 'herb',
          sunlightNeeds: 'full',
          wateringFrequency: 'daily',
          containerSize: 'small',
          growthHeight: 12,
          harvestTime: 30,
          description: 'Aromatic herb that grows quickly. Keep soil moist but well-drained.'
        },
        {
          id: 5,
          name: 'Mint',
          type: 'herb',
          sunlightNeeds: 'partial',
          wateringFrequency: 'twice_weekly',
          containerSize: 'small',
          growthHeight: 12,
          harvestTime: 30,
          description: 'Spreads quickly. Best grown in its own container to prevent overtaking others.'
        },
        {
          id: 6,
          name: 'Rosemary',
          type: 'herb',
          sunlightNeeds: 'full',
          wateringFrequency: 'weekly',
          containerSize: 'small',
          growthHeight: 36,
          harvestTime: 90,
          description: 'Drought-resistant perennial. Great for sunny balconies and terraces.'
        }
      ]);
    }
    
    if (spaceDetails.preferences.includes('flowers')) {
      recommendations = recommendations.concat([
        {
          id: 7,
          name: 'Marigolds',
          type: 'flower',
          sunlightNeeds: 'full',
          wateringFrequency: 'twice_weekly',
          containerSize: 'small',
          growthHeight: 10,
          harvestTime: 50,
          description: 'Bright flowers that help repel pests. Great companion for vegetables.'
        },
        {
          id: 8,
          name: 'Petunias',
          type: 'flower',
          sunlightNeeds: 'full',
          wateringFrequency: 'twice_weekly',
          containerSize: 'small',
          growthHeight: 12,
          harvestTime: 40,
          description: 'Colorful flowers perfect for hanging baskets and container edges.'
        }
      ]);
    }
    
    if (spaceDetails.preferences.includes('fruits')) {
      recommendations = recommendations.concat([
        {
          id: 9,
          name: 'Strawberries',
          type: 'fruit',
          sunlightNeeds: 'full',
          wateringFrequency: 'daily',
          containerSize: 'medium',
          growthHeight: 8,
          harvestTime: 90,
          description: 'Perfect for container gardening. Plant in strawberry pots or hanging baskets.'
        },
        {
          id: 10,
          name: 'Dwarf Lemon Tree',
          type: 'fruit',
          sunlightNeeds: 'full',
          wateringFrequency: 'weekly',
          containerSize: 'large',
          growthHeight: 36,
          harvestTime: 365,
          description: 'Compact citrus tree suitable for larger containers. Needs good drainage.'
        }
      ]);
    }
    
    // Filter based on sunlight conditions
    return recommendations.filter(plant => {
      if (spaceDetails.sunlight === 'full') {
        return true; // Full sun can support all plants
      } else if (spaceDetails.sunlight === 'partial') {
        return plant.sunlightNeeds !== 'full'; // Filter out full sun plants
      } else {
        return plant.sunlightNeeds === 'shade'; // Only shade plants
      }
    });
  }, [spaceDetails]);

  const getWateringText = (frequency: string) => {
    switch (frequency) {
      case 'daily': return 'Daily';
      case 'twice_weekly': return '2-3 times per week';
      case 'weekly': return 'Weekly';
      default: return frequency;
    }
  };
  
  const getContainerSizeText = (size: string) => {
    switch (size) {
      case 'small': return 'Small (6-8")';
      case 'medium': return 'Medium (10-12")';
      case 'large': return 'Large (16"+ or 5gal+)';
      default: return size;
    }
  };
  
  const getPlantIconByType = (type: string) => {
    switch (type) {
      case 'vegetable': return <Plant className="h-5 w-5 text-garden-green" />;
      case 'herb': return <Sprout className="h-5 w-5 text-garden-green-light" />;
      case 'flower': return <Flower className="h-5 w-5 text-garden-brown" />;
      case 'fruit': return <Plant className="h-5 w-5 text-garden-brown-light" />;
      default: return <Plant className="h-5 w-5 text-garden-green" />;
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-garden-green-dark">Plant Recommendations</CardTitle>
        <CardDescription>
          Based on your {spaceDetails.length}' x {spaceDetails.width}' {spaceDetails.spaceType} with {spaceDetails.sunlight} sunlight
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={spaceDetails.preferences[0] || 'vegetables'}>
          <TabsList className="mb-4">
            {spaceDetails.preferences.map(preference => (
              <TabsTrigger key={preference} value={preference} className="capitalize">
                {preference}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {spaceDetails.preferences.map(preference => (
            <TabsContent key={preference} value={preference}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {plantRecommendations
                  .filter(plant => plant.type === preference.slice(0, -1)) // Remove 's' from preferences
                  .map(plant => (
                    <div key={plant.id} className="border rounded-lg p-4 hover:border-garden-green-light transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          {getPlantIconByType(plant.type)}
                          <h3 className="font-medium text-lg">{plant.name}</h3>
                        </div>
                        <Badge>{plant.type}</Badge>
                      </div>
                      
                      <p className="mt-2 text-gray-600 text-sm">{plant.description}</p>
                      
                      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Sun className="h-4 w-4 text-garden-brown" />
                          <span className="capitalize">{plant.sunlightNeeds} sun</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CloudRain className="h-4 w-4 text-garden-green-light" />
                          <span>{getWateringText(plant.wateringFrequency)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-garden-brown">🪴</span>
                          <span>{getContainerSizeText(plant.containerSize)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-garden-green-dark">🌱➡️🌿</span>
                          <span>Harvest: ~{plant.harvestTime} days</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              
              {plantRecommendations.filter(plant => plant.type === preference.slice(0, -1)).length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No {preference} recommendations available for your space conditions.
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GardenRecommendations;

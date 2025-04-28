
import React from 'react';
import { Leaf, Sun, Sprout, Flower } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SpaceDetails } from './SpaceDetailsForm';

interface GardenDesignProps {
  design: {
    id: number;
    name: string;
    description: string;
    style: string;
    plants: {
      name: string;
      type: string;
      icon: string;
    }[];
    layout: (string | null)[][];
  };
  spaceDetails: SpaceDetails;
  onSelect: (designId: number) => void;
  selected: boolean;
}

const GardenDesign = ({ design, spaceDetails, onSelect, selected }: GardenDesignProps) => {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'plant':
        return <Leaf className="h-4 w-4 text-garden-green" />;
      case 'sun':
        return <Sun className="h-4 w-4 text-garden-brown" />;
      case 'sprout':
        return <Sprout className="h-4 w-4 text-garden-green-light" />;
      case 'flower':
        return <Flower className="h-4 w-4 text-garden-green-dark" />;
      default:
        return <Leaf className="h-4 w-4 text-garden-green" />;
    }
  };
  
  return (
    <Card className={`w-full h-full flex flex-col transition-all ${selected ? 'ring-2 ring-primary' : ''}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-garden-green-dark">{design.name}</CardTitle>
            <CardDescription>{design.description}</CardDescription>
          </div>
          <Badge variant="outline">{design.style}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="garden-grid" style={{ 
          gridTemplateColumns: `repeat(${design.layout[0].length}, 1fr)`,
          gridTemplateRows: `repeat(${design.layout.length}, 1fr)` 
        }}>
          {design.layout.map((row, rowIndex) => (
            row.map((cell, cellIndex) => (
              <div 
                key={`${rowIndex}-${cellIndex}`}
                className={`aspect-square flex items-center justify-center rounded-md ${
                  cell ? 'bg-garden-green-light bg-opacity-20' : 'bg-gray-100'
                }`}
              >
                {cell && getIcon(cell)}
              </div>
            ))
          ))}
        </div>
        
        <div className="mt-4">
          <h4 className="font-medium text-garden-green-dark mb-2">Plant List:</h4>
          <div className="flex flex-wrap gap-2">
            {design.plants.slice(0, 4).map((plant, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {getIcon(plant.icon)}
                <span>{plant.name}</span>
              </Badge>
            ))}
            {design.plants.length > 4 && (
              <Badge variant="outline">+{design.plants.length - 4} more</Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          variant={selected ? "default" : "outline"}
          onClick={() => onSelect(design.id)}
        >
          {selected ? 'Selected' : 'Choose This Design'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GardenDesign;

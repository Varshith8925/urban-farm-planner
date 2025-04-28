
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface SpaceDetailsFormProps {
  onSubmit: (data: SpaceDetails) => void;
}

export interface SpaceDetails {
  width: number;
  length: number;
  sunlight: 'full' | 'partial' | 'shade';
  spaceType: 'balcony' | 'terrace' | 'windowsill' | 'rooftop';
  preferences: string[];
}

const SpaceDetailsForm = ({ onSubmit }: SpaceDetailsFormProps) => {
  const [width, setWidth] = React.useState<number>(0);
  const [length, setLength] = React.useState<number>(0);
  const [sunlight, setSunlight] = React.useState<'full' | 'partial' | 'shade'>('full');
  const [spaceType, setSpaceType] = React.useState<'balcony' | 'terrace' | 'windowsill' | 'rooftop'>('balcony');
  const [preferences, setPreferences] = React.useState<string[]>(['vegetables']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      width,
      length,
      sunlight,
      spaceType,
      preferences,
    });
  };

  const handlePreferenceChange = (preference: string) => {
    if (preferences.includes(preference)) {
      setPreferences(preferences.filter(p => p !== preference));
    } else {
      setPreferences([...preferences, preference]);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-garden-green-dark">Tell us about your space</CardTitle>
        <CardDescription>
          Enter the details about your urban garden space so we can help you design it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="width">Width (feet)</Label>
              <Input 
                id="width" 
                type="number" 
                min="1"
                required
                value={width || ''}
                onChange={e => setWidth(parseInt(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="length">Length (feet)</Label>
              <Input 
                id="length" 
                type="number" 
                min="1"
                required
                value={length || ''}
                onChange={e => setLength(parseInt(e.target.value))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Type of Space</Label>
            <Select value={spaceType} onValueChange={(value) => setSpaceType(value as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Select space type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="balcony">Balcony</SelectItem>
                <SelectItem value="terrace">Terrace</SelectItem>
                <SelectItem value="windowsill">Windowsill</SelectItem>
                <SelectItem value="rooftop">Rooftop</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Sunlight Conditions</Label>
            <RadioGroup value={sunlight} onValueChange={(value) => setSunlight(value as any)} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full" id="full" />
                <Label htmlFor="full">Full Sun</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="partial" id="partial" />
                <Label htmlFor="partial">Partial Sun</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="shade" id="shade" />
                <Label htmlFor="shade">Shade</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>What would you like to grow?</Label>
            <div className="flex flex-wrap gap-2">
              {['vegetables', 'herbs', 'flowers', 'fruits'].map(item => (
                <Button 
                  key={item}
                  type="button"
                  variant={preferences.includes(item) ? "default" : "outline"}
                  onClick={() => handlePreferenceChange(item)}
                  className="capitalize"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full">
            Generate Garden Designs
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SpaceDetailsForm;

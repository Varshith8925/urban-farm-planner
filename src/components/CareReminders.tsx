
import React from 'react';
import { CloudRain, Sun, Calendar, Sprout } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';

interface CareRemindersProps {
  spaceDetails: any;
  selectedDesignId: number;
}

const CareReminders = ({ spaceDetails, selectedDesignId }: CareRemindersProps) => {
  const [progress, setProgress] = React.useState(25);
  
  React.useEffect(() => {
    // Simulate progress increasing over time
    const timer = setTimeout(() => {
      setProgress(Math.min(progress + 5, 100));
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [progress]);
  
  const today = new Date();
  const dayOfWeek = today.getDay();
  
  // Simulate watering schedule based on day of week
  const needsWateringToday = dayOfWeek === 1 || dayOfWeek === 4; // Monday and Thursday
  
  // Simulate next task based on garden phase
  const nextTask = progress < 30 
    ? "Prepare soil and containers" 
    : progress < 60 
    ? "Plant seeds according to layout" 
    : progress < 85 
    ? "Monitor growth and thin seedlings" 
    : "Harvest mature plants";
    
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-garden-green-dark">Garden Care Guide</CardTitle>
        <CardDescription>Keep your garden thriving with these reminders</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-garden-green-dark flex items-center gap-2">
              <Sprout className="h-4 w-4" /> Garden Progress
            </h4>
            <span className="text-sm text-gray-500">{progress}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600">Next: {nextTask}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Alert className={needsWateringToday ? "border-garden-green" : ""}>
            <CloudRain className={`h-4 w-4 ${needsWateringToday ? "text-garden-green" : "text-gray-500"}`} />
            <AlertTitle>{needsWateringToday ? "Watering Day!" : "Watering Schedule"}</AlertTitle>
            <AlertDescription className="text-sm">
              {needsWateringToday 
                ? "Water your plants today to keep them hydrated."
                : "Next watering day will be on Monday."}
            </AlertDescription>
          </Alert>
          
          <Alert>
            <Sun className="h-4 w-4 text-garden-brown" />
            <AlertTitle>Sunlight Tips</AlertTitle>
            <AlertDescription className="text-sm">
              {spaceDetails.sunlight === 'full' 
                ? "Ensure plants get 6+ hours of direct sunlight."
                : spaceDetails.sunlight === 'partial'
                ? "Rotate containers to ensure even light exposure."
                : "Choose shade-loving plants for best results."}
            </AlertDescription>
          </Alert>
        </div>
        
        <Alert>
          <Calendar className="h-4 w-4 text-garden-green-dark" />
          <AlertTitle>Seasonal Advice</AlertTitle>
          <AlertDescription className="text-sm">
            {(() => {
              const month = today.getMonth();
              // Spring
              if (month >= 2 && month <= 4) return "Spring is the perfect time to start seeds and prepare containers.";
              // Summer
              if (month >= 5 && month <= 7) return "Water frequently during hot days and provide shade if needed.";
              // Fall
              if (month >= 8 && month <= 10) return "Plant cool-season crops and prepare for temperature changes.";
              // Winter
              return "Focus on indoor plants and plan your spring garden.";
            })()}
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};

export default CareReminders;

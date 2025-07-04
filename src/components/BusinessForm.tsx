import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Loader2 } from "lucide-react";

interface BusinessFormProps {
  onSubmit: (data: { name: string; location: string }) => Promise<void>;
  loading: boolean;
}

interface FormErrors {
  name?: string;
  location?: string;
}

export function BusinessForm({ onSubmit, loading }: BusinessFormProps) {
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!businessName.trim()) {
      newErrors.name = "Business name is required";
    } else if (businessName.trim().length < 2) {
      newErrors.name = "Business name must be at least 2 characters";
    }
    
    if (!location.trim()) {
      newErrors.location = "Location is required";
    } else if (location.trim().length < 2) {
      newErrors.location = "Location must be at least 2 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    await onSubmit({
      name: businessName.trim(),
      location: location.trim()
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-elevated bg-gradient-card animate-scale-in">
      <CardHeader className="text-center space-y-2">
        <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Business Dashboard
        </CardTitle>
        <p className="text-muted-foreground">
          Enter your business details to view SEO insights and ratings
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="businessName" className="text-sm font-medium">
              Business Name
            </Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="businessName"
                type="text"
                placeholder="e.g., Cake & Co"
                value={businessName}
                onChange={(e) => {
                  setBusinessName(e.target.value);
                  if (errors.name) {
                    setErrors(prev => ({ ...prev, name: undefined }));
                  }
                }}
                className={`pl-10 transition-all duration-300 ${
                  errors.name ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'
                }`}
                disabled={loading}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-destructive animate-fade-in">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">
              Location
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                id="location"
                type="text"
                placeholder="e.g., Mumbai"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  if (errors.location) {
                    setErrors(prev => ({ ...prev, location: undefined }));
                  }
                }}
                className={`pl-10 transition-all duration-300 ${
                  errors.location ? 'border-destructive focus-visible:ring-destructive' : 'focus-visible:ring-primary'
                }`}
                disabled={loading}
              />
            </div>
            {errors.location && (
              <p className="text-sm text-destructive animate-fade-in">{errors.location}</p>
            )}
          </div>

          <Button 
            type="submit" 
            variant="gradient"
            size="lg" 
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Analyzing Business...
              </>
            ) : (
              "Get Business Insights"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
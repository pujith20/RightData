import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Sparkles, Loader2, TrendingUp } from "lucide-react";

interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
}

interface BusinessCardProps {
  businessName: string;
  location: string;
  data: BusinessData;
  onRegenerateHeadline: () => Promise<void>;
  regenerating: boolean;
}

export function BusinessCard({ 
  businessName, 
  location, 
  data, 
  onRegenerateHeadline, 
  regenerating 
}: BusinessCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on mount
  useState(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  });

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-muted" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="w-4 h-4 fill-warning text-warning" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} className="w-4 h-4 text-muted" />
      );
    }

    return stars;
  };

  return (
    <Card className={`w-full max-w-2xl mx-auto shadow-elevated transition-all duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-foreground">
              {businessName}
            </CardTitle>
            <p className="text-muted-foreground flex items-center gap-1">
              📍 {location}
            </p>
          </div>
          <Badge variant="outline" className="bg-success/10 text-success border-success/20">
            <TrendingUp className="w-3 h-3 mr-1" />
            Live Data
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Rating and Reviews Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-card rounded-lg p-4 border">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-1">
                {renderStars(data.rating)}
              </div>
              <span className="text-lg font-semibold">{data.rating}</span>
            </div>
            <p className="text-sm text-muted-foreground">Google Rating</p>
          </div>

          <div className="bg-gradient-card rounded-lg p-4 border">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">{data.reviews.toLocaleString()}</span>
            </div>
            <p className="text-sm text-muted-foreground">Total Reviews</p>
          </div>
        </div>

        {/* SEO Headline Section */}
        <div className="bg-gradient-primary/5 rounded-lg p-6 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">AI-Generated SEO Headline</h3>
          </div>
          
          <blockquote className="text-lg font-medium text-foreground mb-4 italic border-l-4 border-primary pl-4">
            "{data.headline}"
          </blockquote>

          <Button 
            variant="regenerate"
            onClick={onRegenerateHeadline}
            disabled={regenerating}
            className="w-full md:w-auto"
          >
            {regenerating ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Regenerating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Regenerate SEO Headline
              </>
            )}
          </Button>
        </div>

        {/* Insights Footer */}
        <div className="text-center pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            ✨ Powered by <span className="font-semibold text-primary">GrowthProAI</span> - 
            Helping local businesses grow their online presence
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
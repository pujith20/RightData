import { useState } from "react";
import { BusinessForm } from "@/components/BusinessForm";
import { BusinessCard } from "@/components/BusinessCard";
import { BusinessApiService, BusinessData } from "@/services/businessApi";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

export default function Dashboard() {
  const [businessData, setBusinessData] = useState<BusinessData | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const { toast } = useToast();

  const handleBusinessSubmit = async (data: { name: string; location: string }) => {
    setLoading(true);
    try {
      const result = await BusinessApiService.getBusinessData(data);
      setBusinessData(result);
      setBusinessName(data.name);
      setLocation(data.location);
      
      toast({
        title: "Business data loaded successfully!",
        description: `Found insights for ${data.name} in ${data.location}`,
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error loading business data",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateHeadline = async () => {
    if (!businessData) return;
    
    setRegenerating(true);
    try {
      const newHeadline = await BusinessApiService.regenerateHeadline(businessName, location);
      setBusinessData({
        ...businessData,
        headline: newHeadline,
      });
      
      toast({
        title: "New headline generated!",
        description: "Your SEO headline has been refreshed with AI insights",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error regenerating headline",
        description: error instanceof Error ? error.message : "Please try again later",
        variant: "destructive",
      });
    } finally {
      setRegenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                GrowthProAI
              </h1>
              <p className="text-xs text-muted-foreground">Business Dashboard</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Section */}
          {!businessData && (
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Unlock Your Business
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Potential</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get instant insights into your business's online presence, SEO performance, 
                and customer ratings with our AI-powered dashboard.
              </p>
            </div>
          )}

          {/* Form or Business Card */}
          {!businessData ? (
            <BusinessForm onSubmit={handleBusinessSubmit} loading={loading} />
          ) : (
            <div className="space-y-6">
              <BusinessCard
                businessName={businessName}
                location={location}
                data={businessData}
                onRegenerateHeadline={handleRegenerateHeadline}
                regenerating={regenerating}
              />
              
              {/* New Search Button */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setBusinessData(null);
                    setBusinessName("");
                    setLocation("");
                  }}
                  className="text-primary hover:text-primary-hover underline-offset-4 hover:underline transition-colors"
                >
                  Search for another business
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for the GrowthProAI Full Stack Intern Assignment
            </p>
            <p className="text-xs text-muted-foreground">
              Powered by React, TypeScript, Tailwind CSS & Express.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
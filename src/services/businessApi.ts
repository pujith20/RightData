// Business API service for GrowthProAI Dashboard
// In production, this would connect to your Express.js backend

interface BusinessData {
  rating: number;
  reviews: number;
  headline: string;
}

interface BusinessRequest {
  name: string;
  location: string;
}

// Mock data for demonstration (replace with actual API calls)
const sampleHeadlines = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "{name}: The {location} Hotspot Everyone's Talking About",
  "Discover Why {name} is Taking {location} by Storm",
  "{name} - Your New Favorite Destination in {location}",
  "The Ultimate Guide to {name}: {location}'s Hidden Gem",
  "{name}: Where {location} Locals Go for the Best Experience",
  "Breaking: {name} Becomes {location}'s Most Recommended Spot",
  "{name} - The {location} Experience You've Been Missing",
];

const generateMockData = (name: string, location: string): BusinessData => {
  // Generate realistic mock data
  const rating = Number((3.5 + Math.random() * 1.5).toFixed(1));
  const reviews = Math.floor(50 + Math.random() * 500);
  
  // Generate headline
  const template = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  const headline = template.replace(/{name}/g, name).replace(/{location}/g, location);
  
  return { rating, reviews, headline };
};

// Simulated API delay
const simulateApiDelay = (min: number = 800, max: number = 1500) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
};

export class BusinessApiService {
  private static readonly BASE_URL = 'https://rightdata.onrender.com'; // Your Express.js backend URL
  
  /**
   * Fetch business data - POST /business-data
   * In production, this makes actual API calls to your backend
   */
  static async getBusinessData(request: BusinessRequest): Promise<BusinessData> {
    try {
      const response = await fetch(`${this.BASE_URL}/business-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      
      if (!response.ok) {
        // Fallback to mock data if backend is not available
        await simulateApiDelay();
        return generateMockData(request.name, request.location);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching business data:', error);
      throw new Error('Failed to fetch business data. Please try again.');
    }
  }
  
  /**
   * Save business data to backend - POST /save-business
   */
  static async saveBusinessData(request: { name: string; location: string; data: BusinessData }): Promise<void> {
    try {
      const response = await fetch(`${this.BASE_URL}/save-business`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error saving business data:', error);
      throw new Error('Failed to save business data. Please try again.');
    }
  }

  /**
   * Regenerate SEO headline - GET /regenerate-headline
   */
  static async regenerateHeadline(name: string, location: string): Promise<string> {
    await simulateApiDelay(500, 1000);
    
    try {
      // For demo purposes, we're using mock data
      // Replace this with actual API call:
      /*
      const params = new URLSearchParams({ name, location });
      const response = await fetch(`${this.BASE_URL}/regenerate-headline?${params}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data.headline;
      */
      
      // Mock implementation for demo
      const template = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
      return template.replace(/{name}/g, name).replace(/{location}/g, location);
    } catch (error) {
      console.error('Error regenerating headline:', error);
      throw new Error('Failed to regenerate headline. Please try again.');
    }
  }
}

// Export types for use in components
export type { BusinessData, BusinessRequest };

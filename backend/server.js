// GrowthProAI Business Dashboard - Express.js Backend
// Full Stack Intern Assignment

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Sample headlines for AI-generated content
const sampleHeadlines = [
  "Why {name} is {location}'s Best Kept Secret in 2025",
  "{name}: The {location} Hotspot Everyone's Talking About",
  "Discover Why {name} is Taking {location} by Storm",
  "{name} - Your New Favorite Destination in {location}",
  "The Ultimate Guide to {name}: {location}'s Hidden Gem",
  "{name}: Where {location} Locals Go for the Best Experience",
  "Breaking: {name} Becomes {location}'s Most Recommended Spot",
  "{name} - The {location} Experience You've Been Missing",
  "Local's Choice: Why {name} is {location}'s Top-Rated Business",
  "{name}: Redefining Excellence in {location} Since 2024",
  "From Hidden Gem to Local Legend: The {name} Story in {location}",
  "{name} - Your Gateway to the Best {location} Has to Offer"
];

// Utility function to generate realistic mock data
const generateBusinessData = (name, location) => {
  // Generate realistic rating (3.5 - 5.0)
  const rating = Number((3.5 + Math.random() * 1.5).toFixed(1));
  
  // Generate realistic review count (50 - 500)
  const reviews = Math.floor(50 + Math.random() * 450);
  
  // Generate AI-style headline
  const template = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
  const headline = template.replace(/{name}/g, name).replace(/{location}/g, location);
  
  return {
    rating,
    reviews,
    headline
  };
};

// Simulate API processing delay
const simulateDelay = (min = 500, max = 1500) => {
  const delay = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise(resolve => setTimeout(resolve, delay));
};

// Routes

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'GrowthProAI Business Dashboard API',
    version: '1.0.0',
    status: 'running',
    endpoints: [
      'POST /business-data - Get business insights',
      'GET /regenerate-headline - Generate new SEO headline'
    ]
  });
});

// POST /business-data - Main business data endpoint
app.post('/business-data', async (req, res) => {
  try {
    const { name, location } = req.body;
    
    // Validation
    if (!name || !location) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Both name and location are required'
      });
    }
    
    if (name.trim().length < 2) {
      return res.status(400).json({
        error: 'Invalid business name',
        message: 'Business name must be at least 2 characters long'
      });
    }
    
    if (location.trim().length < 2) {
      return res.status(400).json({
        error: 'Invalid location',
        message: 'Location must be at least 2 characters long'
      });
    }
    
    // Simulate API processing time
    await simulateDelay();
    
    // Generate business data
    const businessData = generateBusinessData(name.trim(), location.trim());
    
    // Log the request (in production, use proper logging)
    console.log(`📊 Business data requested for: ${name} in ${location}`);
    
    res.json(businessData);
    
  } catch (error) {
    console.error('Error in /business-data:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to generate business data'
    });
  }
});

// GET /regenerate-headline - Regenerate SEO headline
app.get('/regenerate-headline', async (req, res) => {
  try {
    const { name, location } = req.query;
    
    // Validation
    if (!name || !location) {
      return res.status(400).json({
        error: 'Missing required parameters',
        message: 'Both name and location query parameters are required'
      });
    }
    
    // Simulate AI processing time
    await simulateDelay(300, 800);
    
    // Generate new headline
    const template = sampleHeadlines[Math.floor(Math.random() * sampleHeadlines.length)];
    const headline = template.replace(/{name}/g, name).replace(/{location}/g, location);
    
    // Log the request
    console.log(`✨ Headline regenerated for: ${name} in ${location}`);
    
    res.json({ headline });
    
  } catch (error) {
    console.error('Error in /regenerate-headline:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to regenerate headline'
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: `The requested route ${req.originalUrl} does not exist`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
🚀 GrowthProAI Business Dashboard API
📍 Server running on http://localhost:${PORT}
🌟 Ready to serve business insights!

Available endpoints:
- GET  /                    - Health check
- POST /business-data       - Get business insights  
- GET  /regenerate-headline - Generate new SEO headline
`);
});

module.exports = app;
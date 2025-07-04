# GrowthProAI Business Dashboard - Backend API

Express.js backend for the GrowthProAI Full Stack Intern Assignment.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   
   Or for production:
   ```bash
   npm start
   ```

4. **Server will be running on:**
   ```
   http://localhost:3001
   ```

## 📋 API Endpoints

### Health Check
- **GET** `/`
- Returns API status and available endpoints

### Get Business Data
- **POST** `/business-data`
- **Request Body:**
  ```json
  {
    "name": "Cake & Co",
    "location": "Mumbai"
  }
  ```
- **Response:**
  ```json
  {
    "rating": 4.3,
    "reviews": 127,
    "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
  }
  ```

### Regenerate SEO Headline
- **GET** `/regenerate-headline?name=Cake%20&%20Co&location=Mumbai`
- **Response:**
  ```json
  {
    "headline": "Discover Why Cake & Co is Taking Mumbai by Storm"
  }
  ```

## 🧪 Testing the API

### Using curl:

```bash
# Test business data endpoint
curl -X POST http://localhost:3001/business-data \
  -H "Content-Type: application/json" \
  -d '{"name": "Cake & Co", "location": "Mumbai"}'

# Test headline regeneration
curl "http://localhost:3001/regenerate-headline?name=Cake%20&%20Co&location=Mumbai"
```

### Using Postman:
1. Import the endpoints above
2. Set Content-Type to `application/json` for POST requests
3. Send requests and verify responses

## 🔧 Configuration

### Environment Variables
- `PORT` - Server port (default: 3001)

### CORS
Currently configured to allow all origins for development. Update CORS settings for production deployment.

## 📦 Deployment

### Render.com (Recommended)
1. Push code to GitHub
2. Connect to Render
3. Deploy as Web Service
4. Set build command: `npm install`
5. Set start command: `npm start`

### Heroku
1. Install Heroku CLI
2. Create new app: `heroku create your-app-name`
3. Deploy: `git push heroku main`

### Glitch
1. Import from GitHub
2. Set start script in package.json
3. Project will auto-deploy

## 📝 Features

- ✅ RESTful API design
- ✅ CORS enabled
- ✅ Input validation
- ✅ Error handling
- ✅ Simulated realistic data
- ✅ AI-style headline generation
- ✅ Proper HTTP status codes
- ✅ Development logging

## 🔄 Frontend Integration

The frontend expects the backend to run on `http://localhost:3001`. Update the `BASE_URL` in the frontend's `businessApi.ts` file if deploying to a different URL.

## 📊 Sample Data

The API generates realistic mock data including:
- Google ratings (3.5 - 5.0 stars)
- Review counts (50 - 500 reviews)
- AI-generated SEO headlines with 12+ variations

## 🛠️ Development

### File Structure
```
backend/
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

### Adding New Features
1. Add routes in `server.js`
2. Update API documentation
3. Test endpoints
4. Update frontend integration

## 🐛 Troubleshooting

### Common Issues

**Port already in use:**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

**CORS errors:**
- Ensure frontend is making requests to correct URL
- Check CORS configuration in server.js

**Module not found:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For questions about this assignment, please contact: [your-email@example.com]
# 💻 GrowthProAI - Business Dashboard
## Full Stack Intern Assignment

A modern, responsive business dashboard that simulates how local businesses view their SEO content and Google Business data - showcasing GrowthProAI's core use cases.

**Live Demo**: https://lovable.dev/projects/2fad093f-5658-49a9-ae3d-e478f8636b8c

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2fad093f-5658-49a9-ae3d-e478f8636b8c) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🔧 Assignment Requirements Completed

### ✅ Frontend (React + Tailwind CSS)
- **Input Form**: Business Name & Location with validation
- **Display Card**: Google rating (stars), review count, AI-generated SEO headline
- **Regenerate Button**: Updates headline with new AI suggestions
- **Responsive Design**: Mobile-friendly with modern SaaS styling
- **Bonus Features**: Loading spinners, form validation, smooth animations

### ✅ Backend (Node.js + Express)
- **POST /business-data**: Returns simulated business insights
- **GET /regenerate-headline**: Generates fresh AI-style headlines
- **No Database**: Uses realistic mock data
- **Complete API**: Error handling, validation, CORS enabled

### 🌟 Extra Features Implemented
- Professional design system with gradients and animations
- Toast notifications for user feedback  
- TypeScript for type safety
- Component-based architecture
- Comprehensive documentation

## 🚀 Technologies Used

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Shadcn UI (components)
- Lucide React (icons)

**Backend:**
- Node.js + Express.js
- CORS middleware
- Static mock data simulation

## 📁 Project Structure

```
frontend/                 # React frontend (this directory)
├── src/
│   ├── components/       # React components
│   ├── pages/           # Page components  
│   ├── services/        # API service layer
│   └── hooks/           # Custom React hooks
│
backend/                 # Express.js backend
├── server.js           # Main server file
├── package.json        # Backend dependencies
└── README.md          # Backend documentation
```

## 🔄 Running the Full Stack Application

### Frontend (React)
```bash
npm install
npm run dev
# Runs on http://localhost:8080
```

### Backend (Express.js)
```bash
cd backend
npm install  
npm run dev
# Runs on http://localhost:3001
```

**Note**: The frontend is configured to work with mock data by default. To use the actual backend API, update the `BASE_URL` in `src/services/businessApi.ts` and ensure the backend is running.

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2fad093f-5658-49a9-ae3d-e478f8636b8c) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

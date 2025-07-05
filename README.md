# 💼 GrowthProAI – Full Stack Intern Assignment

A mini dashboard that simulates how small businesses might view their SEO content and Google Business data — one of GrowthProAI’s core use cases.

## ✨ Features

- 🌍 **Responsive UI** with React + Tailwind CSS
- 📝 Input Form for Business Name & Location
- 📊 Business Card displaying:
  - Simulated Google Rating
  - Total Number of Reviews
  - AI-generated SEO Headline
- 🔁 “Regenerate SEO Headline” with backend integration
- ⚡ Smooth UI animations, loading states, and toasts

---

## 🧑‍💻 Tech Stack

### Frontend
- React + TypeScript
- Tailwind CSS
- Lucide Icons
- Radix UI (ShadCN UI components)
- React Hook Form
- Zod (for form validation)
- React Router DOM

### Backend
- Node.js
- Express.js

> No database — data is simulated in memory.

---

## 📦 Project Structure

├── src/
│ ├── components/
│ │ ├── BusinessForm.tsx
│ │ ├── BusinessCard.tsx
│ ├── hooks/
│ │ └── use-toast.ts
│ ├── services/
│ │ └── businessApi.ts
│ ├── pages/
│ │ └── Dashboard.tsx
├── server/
│ └── server.js (Express API)



---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js (v18 or later)
- npm / yarn / pnpm

### 🖥️ Frontend Setup

```bash
# 1. Install dependencies
npm install

# 2. Run the frontend
npm run dev

Backend runs on:
http://localhost:3000

📡 API Endpoints
POST /business-data

{
  "name": "Cake & Co",
  "location": "Mumbai"
}


Response:
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}


GET /regenerate-headline?name=...&location=...
{
  "headline": "Discover Why Cake & Co Dominates Mumbai’s Dessert Scene!"
}


✅ Bonus Features
 Loading indicators with spinner

 Toast notifications

 Responsive design

 Clean modular architecture

 Thank You !!
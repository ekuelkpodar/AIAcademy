# Applied Insights: AI Academy & Agency

A full-stack platform for learning AI and requesting AI consulting services.

## Architecture

- **Frontend**: Vite + React + TypeScript
- **Backend**: Node.js + Express + TypeScript (in `/server`)
- **Database**: PostgreSQL (via Docker)
- **ORM**: Prisma
- **Auth**: JWT via HTTP-only cookies

## Getting Started

### Prerequisites
- Node.js (v18+)
- Docker & Docker Compose

### 1. Database Setup
Start the PostgreSQL container:
```bash
docker-compose up -d
```

### 2. Backend Setup
Initialize the server, database schema, and seed data:
```bash
cd server
npm install
cp .env.example .env # Ensure DATABASE_URL matches docker-compose credentials
npx prisma migrate dev
npm run seed
npm run dev
```
The API will start on [http://localhost:4000](http://localhost:4000).

### 3. Frontend Setup
Run the web application:
```bash
# In the project root
npm install
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173).

## Features

### AI Academy
- **Roadmap**: 30 or 60-day guided learning paths.
- **Concept Map**: Visual explanations of AI concepts (fetched from API).
- **Resource Library**: Curated tools and readings.

### Agency Services
- **Consulting Inquiries**: "Hire Us" form on the homepage.
- **Services Page**: Detailed breakdown of consulting, development, and training services.

### Authentication
- Sign Up / Sign In functionality.
- Protected routes (Teacher Mode is role-gated).

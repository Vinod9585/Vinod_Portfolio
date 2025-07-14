# Portfolio Website - Data Analyst

## Overview

This is a modern, responsive portfolio website for a Data Analyst built as a full-stack application. The project showcases professional experience, skills, projects, and provides a contact form for potential clients or employers. The application features a React frontend with a Node.js/Express backend, designed with a dark theme aesthetic and smooth animations.

## System Architecture

The application follows a **monorepo structure** with clear separation between client and server code:

- **Frontend**: React with TypeScript, built using Vite
- **Backend**: Node.js with Express and TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build System**: Vite for frontend, esbuild for backend
- **Deployment**: Configured for Replit with autoscale deployment

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state
- **UI Library**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with path aliases and asset optimization

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ESM modules
- **API**: RESTful endpoints for contact form submission
- **Storage**: In-memory storage implementation with interface for future database integration
- **Middleware**: Request logging, JSON parsing, error handling

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe schema definitions with Zod validation
- **Migrations**: Configured for schema evolution
- **Connection**: Neon Database serverless PostgreSQL

## Data Flow

1. **User Interaction**: Users navigate through portfolio sections (About, Skills, Projects, Experience, Education, Certifications)
2. **Contact Form**: Form submissions are validated client-side and sent to `/api/contact` endpoint
3. **Server Processing**: Express server validates data with Zod schemas and processes requests
4. **Response Handling**: TanStack Query manages API calls with proper error handling and toast notifications
5. **Storage**: Currently uses in-memory storage with interface ready for database persistence

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Wouter for routing
- **UI Components**: Radix UI primitives, shadcn/ui components
- **State Management**: TanStack React Query
- **Validation**: React Hook Form with Hookform Resolvers
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Icons**: Lucide React, React Icons
- **Utilities**: date-fns for date handling

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite, esbuild
- **TypeScript**: Strict configuration with path mapping
- **Linting**: ESLint configuration
- **PostCSS**: Tailwind CSS processing

## Deployment Strategy

The application is configured for **Replit deployment** with the following setup:

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Scripts**: `npm run dev` for development server
- **Port**: Application runs on port 5000
- **Hot Reload**: Vite HMR for frontend, tsx for backend

### Production Build
- **Frontend**: Vite builds to `dist/public`
- **Backend**: esbuild compiles TypeScript to `dist/index.js`
- **Assets**: Static files served from built frontend
- **Database**: PostgreSQL with Drizzle migrations

### Deployment Configuration
- **Target**: Autoscale deployment on Replit
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Environment**: Production environment variables for database connection

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Removed SendGrid email functionality from contact form per user request
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```
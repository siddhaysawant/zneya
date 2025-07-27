# Replit.md

## Overview

This is a luxury jewelry e-commerce website built with React, TypeScript, and Express.js. The application features a sophisticated frontend showcasing jewelry collections (rings, bracelets, necklaces) with a modern design aesthetic. The backend is structured to support future database integration and API endpoints.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom luxury jewelry theme colors
- **UI Components**: Radix UI components via shadcn/ui
- **State Management**: Zustand for jewelry item selection
- **Animations**: Framer Motion for smooth transitions and interactions
- **Data Fetching**: TanStack React Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with Vite integration
- **Build**: esbuild for production bundling

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database**: PostgreSQL (via Neon Database serverless)
- **Migrations**: Drizzle Kit for schema management
- **Current Storage**: In-memory storage implementation with interface for easy database integration

## Key Components

### Frontend Components
- **Navigation**: Fixed navbar with smooth scroll effects
- **Hero Section**: Full-screen hero with parallax background
- **Collection Cards**: Interactive cards for jewelry categories
- **Jewelry Items**: Product cards with hover effects and animations
- **Detail Pages**: Individual product pages with image galleries
- **Payment Flow**: Mock checkout process with form validation
- **UI Library**: Complete set of accessible components from shadcn/ui

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database operations
- **Route Registration**: Centralized route management system
- **Middleware**: Request logging and error handling
- **Vite Integration**: Development server with HMR support

### Shared Components
- **Schema Definitions**: Drizzle schema with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **Route Handling**: Express routes process requests using storage interface
3. **Data Storage**: Current implementation uses in-memory storage with plans for PostgreSQL
4. **State Management**: Zustand manages client-side state for selected jewelry items
5. **UI Updates**: React components re-render based on state changes and query results

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### Data and State
- **TanStack React Query**: Server state management
- **Zustand**: Client state management
- **Zod**: Schema validation
- **React Hook Form**: Form handling with validation

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety across the stack
- **ESBuild**: Fast JavaScript bundler

## Deployment Strategy

### Development
- **Hot Reloading**: Vite provides instant feedback during development
- **Type Checking**: Continuous TypeScript checking across client and server
- **Path Aliases**: Configured for clean imports (@/, @shared/)

### Production Build
- **Client Build**: Vite bundles React application for static serving
- **Server Build**: ESBuild compiles TypeScript server code
- **Asset Optimization**: Automated optimization of images and static assets

### Database Migration
- **Schema Management**: Drizzle Kit handles database schema changes
- **Environment Configuration**: Database URL configuration via environment variables
- **Production Ready**: Configured for PostgreSQL deployment with Neon Database

The architecture is designed to be scalable and maintainable, with clear separation between frontend and backend concerns, type safety throughout, and a foundation ready for full database integration.
# Akshat Desai - Portfolio Website

## Overview

This is a professional single-page portfolio website showcasing 9+ years of experience in Cloud-Native Architecture and FinTech development. The application is built as a modern React-based web application with a focus on mobile-first design, dark/light theme support, and performance optimization. The portfolio features interactive elements including typing animations, smooth scrolling navigation, and comprehensive sections covering skills, experience, certifications, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS 3.4 with custom CSS variables for theming support
- **Component Library**: Shadcn/ui components built on Radix UI primitives for accessible, reusable UI components
- **State Management**: React Context for theme management, with local component state for form handling
- **Routing**: Wouter for lightweight client-side routing (though currently single-page)

### Backend Architecture
- **Server**: Express.js with TypeScript for serving the application and handling API routes
- **Development Setup**: Custom Vite middleware integration for hot module replacement during development
- **Static Serving**: Express serves built static assets in production

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Connection pooling through @neondatabase/serverless driver

### Authentication & Session Management
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Session Security**: Secure session configuration with HTTP-only cookies

### Performance & User Experience
- **Animations**: AOS (Animate On Scroll) library for scroll-triggered animations
- **Theme System**: Dark/light mode toggle with localStorage persistence and system preference detection
- **Service Worker**: Offline caching strategy for improved performance and offline functionality
- **Font Strategy**: Google Fonts (Inter, Poppins) with preconnect optimization
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

### Form Handling & Validation
- **Form Library**: React Hook Form with Zod validation through @hookform/resolvers
- **UI Feedback**: Toast notifications for user feedback using custom toast system

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form for form management
- **TypeScript**: Full TypeScript support across frontend and backend
- **Vite**: Build tool with React plugin and development optimizations

### Database & ORM
- **Drizzle ORM**: Type-safe database operations with automatic TypeScript generation
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle Kit**: Database migration and schema management tools

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Shadcn/ui**: Pre-built component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Utility for creating component variants

### Server & Development
- **Express.js**: Web application framework for Node.js
- **TSX**: TypeScript execution environment for development
- **ESBuild**: Fast JavaScript bundler for production builds

### External Services
- **Google Fonts**: Typography services for Inter and Poppins fonts
- **AOS Library**: Animate On Scroll library for scroll-triggered animations
- **Service Worker**: Custom implementation for offline caching and performance

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer
- **TanStack Query**: Data fetching and caching library for API interactions

The application is designed to be deployed on Replit with full TypeScript support, automated database migrations, and optimized production builds.
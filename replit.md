# Greendrive Mobility - Logistics Web Application

## Overview

Greendrive Mobility is a comprehensive logistics and transportation web application built with modern web technologies. The application serves as a platform connecting customers with transportation services across India, offering everything from 2-wheeler deliveries to heavy-duty logistics solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with clear separation between client and server components:

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **UI Library**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Development**: Hot reloading with Vite middleware in development

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Landing page with tracking functionality
- **Services**: Transportation service offerings (2-wheeler to heavy vehicles)
- **Rate Calculator**: Dynamic pricing calculator with city and vehicle selection
- **Contact Form**: Contact form with email notification integration
- **Chatbot**: Interactive customer support chatbot
- **Fleet Display**: Vehicle showcase with specifications
- **Testimonials**: Customer reviews and company statistics

### Backend Services
- **Contact API**: Handles contact form submissions with email notifications
- **Email Service**: Nodemailer integration for SMTP email delivery
- **Storage Layer**: Abstracted storage interface supporting both memory and database storage
- **Request Logging**: Comprehensive API request logging middleware

## Data Flow

### Contact Form Workflow
1. User submits contact form on frontend
2. Frontend validates data using Zod schema
3. Data sent to `/api/contact` endpoint
4. Backend validates and stores submission
5. Email notification sent via SMTP
6. Success confirmation returned to frontend

### Data Validation
- Shared Zod schemas between client and server
- Type-safe data handling with TypeScript
- Runtime validation for API endpoints

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Backend Services
- **Nodemailer**: Email service integration
- **Express**: Web application framework
- **Drizzle ORM**: Type-safe database ORM (configured for PostgreSQL)

### Database Integration
- **Drizzle Kit**: Database migrations and schema management
- **PostgreSQL**: Primary database (via Neon serverless)
- **Schema**: Users and contact submissions tables with proper relationships

### Development Tools
- **TSX**: TypeScript execution for development
- **ESBuild**: Production build bundling
- **Replit Integration**: Development environment plugins

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` - runs Express server with Vite middleware
2. **Production Build**: `npm run build` - builds both client (Vite) and server (ESBuild)
3. **Production Start**: `npm start` - serves built application

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- SMTP configuration via `SMTP_EMAIL`, `SMTP_PASSWORD`, or Gmail credentials
- Development vs production environment detection

### Static Asset Handling
- Client built to `dist/public` directory
- Server serves static assets in production
- Vite handles assets in development with HMR

### Database Management
- Drizzle migrations in `./migrations` directory
- Schema definitions in `shared/schema.ts`
- Push schema changes with `npm run db:push`

## Architecture Decisions

### Monorepo Structure
- **Problem**: Managing shared types and schemas between client/server
- **Solution**: Monorepo with shared directory for common code
- **Benefits**: Type safety across boundaries, single source of truth for data models

### Storage Abstraction
- **Problem**: Flexibility between development and production data storage
- **Solution**: Abstract storage interface with memory and database implementations
- **Benefits**: Easy testing, gradual migration to persistent storage

### Email Integration
- **Problem**: Contact form submissions need immediate notification
- **Solution**: SMTP integration with fallback configuration options
- **Benefits**: Reliable delivery, configurable for different environments

### Component Architecture
- **Problem**: Large single-page application with many UI components
- **Solution**: Modular component structure with shadcn/ui design system
- **Benefits**: Consistent UI, reusable components, maintainable codebase
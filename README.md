# Akshat Desai - Portfolio Website

A professional single-page portfolio website showcasing 9+ years of experience in Cloud-Native Architecture and FinTech development.

## 🚀 Features

- **Mobile-First Design**: Responsive layout optimized for all devices
- **Dark/Light Theme Toggle**: Seamless theme switching with system preference detection
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Interactive Elements**: Typing animation, smooth scrolling navigation
- **SEO Optimized**: Proper meta tags, Open Graph, and JSON-LD structured data
- **Offline Support**: Service worker implementation for offline caching
- **Performance Optimized**: Lazy loading and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS 3.4, Shadcn/ui components
- **Build Tool**: Vite
- **Server**: Express.js
- **Animations**: Framer Motion, AOS (via CDN)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd akshat-portfolio
```

2. Install dependencies:
```bash
npm install
```

### Environment Setup

The application currently runs without external dependencies and uses in-memory storage.

#### Optional: Database Setup (for future features)

If you plan to enable database features like contact form storage:

1. Set up environment variables in a `.env` file:
```bash
# Database Configuration (only if enabling database features)
DATABASE_URL=your_postgresql_connection_string

# Session Management (only if using sessions)
SESSION_SECRET=your_session_secret
```

2. Push database schema (only if database is configured):
```bash
npm run db:push
```

**Note**: Database setup is optional. The portfolio works without it.

**Important**: Add `.env` to your `.gitignore` to avoid committing sensitive information.

### Running the Application

#### Development Mode
```bash
npm run dev
```
This starts both the Express server and Vite development server.
The application will be available at `http://localhost:5000` (or the port specified in PORT environment variable).

#### Production Build
```bash
# Build the application
npm run build

# Start production server
npm run start
```

#### Additional Commands
```bash
# Type checking
npm run check

# Database schema sync (force push if needed)
npm run db:push --force
```

## 📁 Project Structure

```
akshat-portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Main portfolio page
│   │   ├── assets/         # Static assets (images, etc.)
│   │   └── lib/            # Utility functions and configs
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── vite.ts             # Vite middleware setup
├── shared/                 # Shared schemas and types
├── public/                 # Static public assets
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🔧 Key Dependencies

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Component library built on Radix UI
- **Vite** - Build tool and dev server
- **Lucide React** - Icon library
- **Framer Motion** - Animation library
- **AOS** - Animate On Scroll (via CDN)
- **Wouter** - Lightweight client-side routing

### Backend  
- **Express.js** - Web framework
- **Drizzle ORM** - Database ORM with TypeScript (optional)
- **PostgreSQL** - Database via Neon (optional)
- **Express Session** - Session management (optional)

### Development
- **tsx** - TypeScript execution for development
- **ESBuild** - Fast bundler for production builds
- **Drizzle Kit** - Database migrations and introspection

## 🚀 Deployment

This application can be deployed on any platform that supports:
- Node.js 16+
- Static file serving
- Optional: PostgreSQL database (for future features)

### Replit Deployment
The application runs on Replit using the provided "Start application" workflow:
- Uses the configured npm run dev command
- Serves on the default port (5000)
- Database features require additional setup if needed

## 📱 Mobile Responsive

The portfolio is built with a mobile-first approach and includes:
- Responsive navigation with mobile hamburger menu
- Touch-optimized interactions
- Optimized images and assets for mobile devices
- Fast loading times on slower connections

## 🎨 Customization

To customize the portfolio for your own use:

1. **Personal Information**: Update content in `client/src/pages/portfolio.tsx`
2. **Profile Image**: Replace `client/src/assets/profile.jpg`  
3. **Resume**: Replace `public/AkshatDesai_Resume.pdf`
4. **Styling**: Modify colors and themes in `client/src/index.css`
5. **Content**: Update skills, experience, and certifications arrays in the portfolio component

## 📄 License

This project is licensed under the MIT License.

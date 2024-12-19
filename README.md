# My Next.js Application

A modern web application built with Next.js and React.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Modern UI components using Radix UI
- Dark mode support with next-themes
- Responsive design
- Type-safe with TypeScript
- Styled with Tailwind CSS

## Project Structure

- `/app` - Next.js 13+ app directory
- `/components` - React components
- `/components/ui` - Reusable UI components
- `/public` - Static assets
- `/styles` - Global styles
- `/lib` - Utility functions and shared logic
- `/hooks` - Custom React hooks

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow the existing component patterns in `/components/ui`
- Use Tailwind CSS for styling
- Implement responsive design for all components
- Add proper TypeScript types and interfaces

### Component Guidelines

- Keep components small and focused
- Use composition over inheritance
- Implement proper accessibility features
- Add loading states where necessary
- Include proper error handling

### Git Workflow

1. Create feature branches from `main`
2. Follow conventional commits
3. Keep commits small and focused
4. Write meaningful commit messages
5. Update documentation as needed

### Available Components

The project includes several UI components:

- **Layout Components**: Header, Footer, Sidebar
- **UI Components**: Button, Card, Dialog, Toast
- **Form Components**: Input, Select, Checkbox
- **Feedback Components**: Alert, Progress, Spinner
- **Navigation**: Breadcrumb, Tabs, Navigation Menu

### Utility Functions

The project includes utility functions for:

- Date formatting and validation
- Class name merging
- Type safety helpers
- Common calculations

## Technologies Used

- Next.js 14
- React 18
- Radix UI
- Tailwind CSS
- TypeScript

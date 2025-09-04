# Blog Project

## About

This is a modern blog platform built with Next.js, featuring server-side generation for optimal performance and SEO. The project uses ContentLayer for efficient content management, allowing markdown-based blog posts with rich features like author information and images.

## Overview

The blog platform provides a seamless reading experience with statically generated pages, responsive design, and optimized content delivery. Posts are written in Markdown format and automatically converted to interactive web pages.

## Technologies and Approaches

### Core Technologies

- **Next.js 15** - React framework with SSG capabilities
- **TypeScript** - For type-safe code
- **ContentLayer** - For content management and Markdown processing
- **TailwindCSS** - For styling and responsive design
- **Shadcn/ui** - For UI components

### Key Features

- Server-Side Generation (SSG) for optimal performance
- Markdown-based content management
- Static page generation for blog posts
- Dynamic routing
- SEO optimization
- Type-safe content using ContentLayer
- Responsive design with TailwindCSS

## Installation and Setup

1. **Clone the repository**

```bash
git clone [repository-url]
cd site-blog
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Create blog posts**
   Create `.md` files in the `posts` directory with the following structure:

```markdown
---
title: Your Title
description: Post description
date: 2025-09-04
image: /path/to/image.jpg
author:
  name: Author Name
  avatar: /path/to/avatar.jpg
---

Your content here...
```

4. **Development Commands**

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Add new shadcn/ui components
pnpm ui:add
```

The application will be available at `http://localhost:3000`

## Requirements

- Node.js 18 or higher
- pnpm package manager

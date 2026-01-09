# Portfolio Website

A modern portfolio website built with React, Vite, and Tailwind CSS to showcase video production work and graphic design projects.

## Features

- **Home Page**: Welcome section with overview and quick links
- **Videos Page**: Gallery for showcasing video projects
- **Design Page**: Portfolio grid for graphic design work with modal view
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean interface with Tailwind CSS styling

## Prerequisites

Before running this project, you need to install:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Getting Started

### 1. Install Node.js

If you don't have Node.js installed:
1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```

### 2. Install Dependencies

Once Node.js is installed, open a terminal in this project directory and run:

```bash
npm install
```

This will install all required dependencies including React, Vite, Tailwind CSS, and React Router.

### 3. Start Development Server

After installation completes, start the development server:

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

## Adding Your Content

### Adding Videos

1. Edit `src/pages/Videos.jsx`
2. Update the `videos` array with your video information:
   ```javascript
   const [videos] = useState([
     {
       id: 1,
       title: 'Your Video Title',
       description: 'Your video description',
       thumbnail: '/path/to/thumbnail.jpg',
       videoUrl: 'https://youtube.com/embed/...',
     },
   ]);
   ```
3. Place video files in the `public` folder or use YouTube/Vimeo embed URLs

### Adding Design Work

1. Edit `src/pages/Design.jsx`
2. Update the `designs` array with your design projects:
   ```javascript
   const [designs] = useState([
     {
       id: 1,
       title: 'Your Design Title',
       category: 'Logo Design',
       description: 'Project description',
       image: '/path/to/image.jpg',
     },
   ]);
   ```
3. Place image files in the `public` folder and reference them

### Customizing Styles

- Main styles are in `src/index.css`
- Tailwind configuration is in `tailwind.config.js`
- Each component uses Tailwind utility classes for styling

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
portfolio/
├── public/              # Static assets (images, videos)
├── src/
│   ├── components/      # Reusable components
│   │   ├── Layout.jsx   # Main layout wrapper
│   │   └── Navbar.jsx   # Navigation bar
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Home page
│   │   ├── Videos.jsx   # Videos portfolio
│   │   └── Design.jsx   # Design portfolio
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

## Need Help?

If you run into any issues:
1. Make sure Node.js is installed correctly
2. Try deleting `node_modules` folder and running `npm install` again
3. Check that you're in the correct directory when running commands

## Credits

Built with assistance from Claude Code (Claude Sonnet 4.5)

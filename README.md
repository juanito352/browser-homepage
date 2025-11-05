# Browser Custom New Tab Page

A modern, customizable new tab page for web browsers built with React, TypeScript, and Tailwind CSS. This project provides a clean and functional replacement for the default new tab page with features like time display, weather information, search functionality, and customizable shortcuts.

## Features

- 🕒 Real-time clock display
- 🌤️ Local weather information
- 🔍 Quick search functionality
- ⚡ Customizable shortcuts
- 📱 Responsive design

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/eswar-7116/browser-homepage.git
   cd browser-homepage
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
   You can get an API key by signing up at [OpenWeatherMap](https://openweathermap.org/api).

5. Build the frontend:
   ```
   npm run build
   ```

## Usage

### Setting as browser New Tab Page

1. Build the project using `npm run build`
2. Set up the built project on a web server or use it locally
3. Set the New Tab URL to your deployed page or local build in browser settings

### Customizing Shortcuts

Edit the `src/util/shortcuts.ts` file to modify your quick access shortcuts. Each shortcut requires:
- Name
- URL

## Development

- `npm run dev` - Start development server
- `npm run build` - Build the frontend
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── layout/         # Main layout components
│   └── reusable/       # Reusable UI components
├── types/              # TypeScript type definitions
├── util/              # Utility functions and data
└── assets/            # Static assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

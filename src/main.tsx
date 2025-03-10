
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Log the environment
console.log("Environment:", import.meta.env.MODE);
console.log("Base URL:", import.meta.env.BASE_URL);

// Error boundary for React rendering
const renderApp = () => {
  try {
    console.log("Starting application render...");
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      console.error("Root element not found");
      return;
    }
    
    console.log("Root element found, rendering app...");
    createRoot(rootElement).render(<App />);
    console.log("App rendered successfully");
  } catch (error) {
    console.error("Failed to render the app:", error);
    // Display a fallback message if React fails to render
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h2>We're experiencing technical difficulties</h2>
          <p>Please try refreshing the page or contact us directly at (360) 555-1234</p>
        </div>
      `;
    }
  }
};

console.log("main.tsx loaded");
renderApp();

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n/index.ts";
import "./index.css";

const sphLogo = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ███████╗██████╗ ██╗  ██╗                                  ║
║    ██╔════╝██╔══██╗██║  ██║                                  ║
║    ███████╗██████╔╝███████║                                  ║
║    ╚════██║██╔═══╝ ██╔══██║                                  ║
║    ███████║██║     ██║  ██║                                  ║
║    ╚══════╝╚═╝     ╚═╝  ╚═╝                                  ║
║                                                              ║
║    ╔══════════════════════════════════════════════════════╗  ║
║    ║                                                      ║  ║
║    ║  🎮 Welcome to SPH Squad Server Rules! 🎮           ║  ║
║    ║                                                      ║  ║
║    ║  🏆 Military Simulation Gaming Community            ║  ║
║    ║  📋 Server Rules & Guidelines                       ║  ║
║    ║  🌍 Spanish & English Support                       ║  ║
║    ║                                                      ║  ║
║    ║  Made with ❤️ by WW Saga                            ║  ║
║    ║                                                      ║  ║
║    ╚══════════════════════════════════════════════════════╝  ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`;

const wwSagaSignature = `
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    ██╗    ██╗██╗    ██╗    ███████╗ █████╗  ██████╗  █████╗  ║
║    ██║    ██║██║    ██║    ██╔════╝██╔══██╗██╔════╝ ██╔══██╗ ║
║    ██║ █╗ ██║██║ █╗ ██║    ███████╗███████║██║  ███╗███████║ ║
║    ██║███╗██║██║███╗██║    ╚════██║██╔══██║██║   ██║██╔══██║ ║
║    ╚███╔███╔╝╚███╔███╔╝    ███████║██║  ██║╚██████╔╝██║  ██║ ║
║     ╚══╝╚══╝  ╚══╝╚══╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝ ║
║                                                              ║
║    🚀 Software Developer                                    ║
║    🎯 Creating immersive digital experiences                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`;

// Display the ASCII art in console
console.log(sphLogo);
console.log(wwSagaSignature);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

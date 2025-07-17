# Net AI Orchestrator Nexus

## Overview
Net AI Orchestrator Nexus is a modern, modular web application prototype for orchestrating AI agents and network intelligence. Built with Vite, React, TypeScript, and ShadCN UI, it provides a scalable foundation for agent management, business intelligence, and model libraries.

---

## Features
- **Agent Management**: Create, manage, and monitor AI agents.
- **Agent Builder**: Build and configure new agents with a user-friendly interface.
- **Business Intelligence**: Visualize network data and agent performance.
- **Model Library**: Browse and manage AI models.
- **Network Dashboard**: Real-time network visualization and analytics.
- **Responsive UI**: Optimized for desktop and mobile devices.
- **Component Library**: Includes a rich set of reusable UI components (accordion, dialog, toast, table, etc.) from ShadCN.

---

## Tech Stack
- **Vite**: Fast build tool and dev server.
- **React**: Component-based UI framework.
- **TypeScript**: Type-safe development.
- **ShadCN UI**: Modern, accessible UI components.
- **Tailwind CSS**: Utility-first CSS framework.

---

## Local Development
To start the local dev server:
```bash
npm run dev
```
Visit `http://localhost:8080` to view the app. Hot-reloading is enabled for rapid iteration.

---

## Deployment
To deploy to GitHub Pages:
```bash
npm run deploy
```
Your site will be published at `https://brettleehari.github.io/net-ai-orchestrator-nexus/`.

---

## Project Structure
```
src/
  components/         # UI components
  hooks/              # Custom React hooks
  lib/                # Utility functions
  pages/              # Main app pages
  assets/             # Images and static assets
public/                # Static files
```

---

## Customization & Extensibility
- Add new pages in `src/pages/`.
- Extend UI with components from `src/components/ui/`.
- Integrate new models or agents via the Model Library and Agent Builder.

---

## Credits
Prototype by brettleehari. Powered by Vite, React, ShadCN, and Tailwind CSS.

---

## License
MIT

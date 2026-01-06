## 🧰 Tech Stack
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Ant Design](https://ant.design)
- [TanStack Query React](https://tanstack.com/query/latest)
- [Yarn](https://yarnpkg.com)
- [Docker](https://www.docker.com) / [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Installation & Setup

### Method 1: Using Docker

- Make sure you have Docker and Docker Compose installed
- Copy `.env.example` to `.env` and configure environment variables (if needed)
- Build and start the container:

```bash
docker-compose -f docker-compose.local.yml up --build
```

- The application will run at `http://localhost:3001` (or the port configured in the `VITE_PORT` variable)
- To stop the container: `docker-compose -f docker-compose.local.yml down`
- To view logs: `docker-compose -f docker-compose.local.yml logs -f`

### Method 2: Using Yarn (Local Development)

- Make sure you have Node.js (version 20+) and Yarn installed
- Copy `.env.example` to `.env` and configure environment variables (if needed)
- Install dependencies:

```bash
yarn
```

- Run the development server:

```bash
yarn dev
```

- The application will run at `http://localhost:3001` (or the port configured in the `VITE_PORT` variable)

---

## 📁 Structure Folder

```bash
.
├── public/
├── src/
│   ├── assets/                 # Image, File
│   ├── config/                 # Config commmon axios, tanstack
│   ├── langs/                  # Multiple languages
│   ├── modules/                # System modules
│   ├── routes/                 # Routing
│   ├── shared/                 # Common function, component, heplers, styles, hooks, ...
│   ├── App.tsx
│   └── main.tsx
├── .dockerignore
├── .env.example
├── .gitignore
├── docker-compose.local.yml
├── Dockerfile.local
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

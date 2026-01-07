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
```

---

## 🔀 Git Workflow & Conventions

### Commit message convention

Each commit message **must** start with one of the following prefixes:

| **Type**   | **Meaning**                    |
| ---------- | ------------------------------ |
| `feat`     | New feature                    |
| `fix`      | Bug fix                        |
| `refactor` | Refactor without behavior change |
| `docs`     | Documentation                  |
| `test`     | Tests                          |
| `chore`    | Config, build, tooling         |
| `style`    | Formatting, lint (no logic change) |
| `perf`     | Performance improvements       |
| `ci`       | CI/CD                          |

**Recommended format (similar to Conventional Commits):**

```bash
<type>: <short description>

# Examples:
feat: add login page
fix: handle invalid credentials
docs: update README for setup guide
```

### Branch naming convention

Create new branches using the format: `type/short-description`, where `type` is one of:

| **Type**   | **When to use**               |
| ---------- | ----------------------------- |
| `feature`  | Developing a new feature      |
| `bugfix`   | Fixing a bug                  |
| `hotfix`   | Urgent fix on production      |
| `release`  | Preparing a release           |
| `chore`    | Chores (config, tooling, etc.)|
| `refactor` | Refactoring code              |
| `test`     | Writing/updating tests        |
| `docs`     | Documentation                 |

**Examples:**

- `feature/auth-login`
- `bugfix/fix-login-redirect`
- `hotfix/payment-timeout`
- `docs/update-readme`

### Pull request rules

- Each **pull request must contain exactly 1 commit** (CI will fail if there is more than 1).
- The commit in the PR **must** follow the commit message convention above.
- The branch name must follow the **branch naming convention**.

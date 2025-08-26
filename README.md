# Attendance Management System

A modern, full-stack attendance management system built with Node.js, Express, Prisma, and TypeScript in a monorepo architecture.

---

## 🏗️ Project Architecture

This project uses a **monorepo** structure powered by **Turborepo** and **pnpm workspaces**, organizing code into reusable packages and applications.

```
attendance/
├── apps/
│   └── backend/           # Express.js API server
├── packages/
│   ├── db/               # Database schema and client
│   ├── env/              # Environment configuration
│   ├── prettier/         # Shared Prettier configuration
│   ├── tsconfig/         # Shared TypeScript configuration
│   ├── utils/            # Shared utility functions
│   └── validations/      # Zod validation schemas
└── ...
```

---

## 🚀 Features

### Authentication & Authorization

- **User Registration**: Secure user sign-up with email and password
- **User Sign-in**: Password-based authentication using Passport.js
- **Session Management**: Persistent sessions stored in SQLite database
- **Password Security**: Argon2 hashing for secure password storage

### Security Features

- Strong password requirements (12+ characters with letters and special characters)
- Email validation
- Session-based authentication with secure cookies
- SQL injection protection via Prisma ORM

### API Endpoints

- `POST /api/auth/credentials/sign-up` - User registration
- `POST /api/auth/credentials/sign-in` - User authentication

---

## 🛠️ Technology Stack

- **Node.js** 18+
- **Express.js** 5.1.0
- **Prisma ORM** with SQLite
- **Passport.js** (Local Strategy)
- **TypeScript** 5.9.2
- **Zod** for validation
- **pnpm** for package management
- **Turborepo** for monorepo management
- **Prettier** (with Tailwind CSS plugin) for code formatting
- **dotenv** for environment configuration

---

## 📋 Prerequisites

- **Node.js** 18 or higher
- **pnpm** package manager
- **Git** for version control

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd attendance
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# Server Configuration
NODE_ENV=development
PORT=3000

# Session Security
SESSION_SECRET="your-super-secret-session-key-here"
```

4.  Database Setup

```bash
pnpm run -F @repo/db gen    # Generate Prisma client
pnpm run -F @repo/db push   # Push database schema
```

### 5. Start Development Server

```bash
pnpm dev                    # Start all packages in development mode
# Or start only the backend
pnpm run -F b dev
```

The API server will be available at `http://localhost:3000`

---

## 📦 Package Overview

### [`@repo/db`](packages/db/)

- **Prisma Schema**: User and Session models
- **Database Client**: Configured Prisma client
- **Models**: User authentication and session management

### [`@repo/validations`](packages/validations/)

- **Sign-in/Sign-up Validation**: Zod schemas for input validation
- **Type Safety**: TypeScript types generated from schemas

### [`@repo/utils`](packages/utils/)

- **Password Hashing**: Argon2-based secure password handling
- **HTTP Utilities**: Status codes and error handling
- **Validation Helpers**: Zod error formatting
- **CSS Utilities**: Class name merging with clsx and tailwind-merge

### [`@repo/env`](packages/env/)

- **Schema Validation**: Zod-based environment variable validation
- **Type Safety**: TypeScript types for environment variables
- **Multi-environment Support**: Development, production, and test configurations

---

## 🔧 Development Commands

### Root Level

```bash
pnpm install         # Install all dependencies
pnpm dev             # Start development servers for all apps
pnpm build           # Build all packages and applications
pnpm start           # Start production servers
pnpm format          # Format code with Prettier
pnpm check-types     # Type checking across all packages
```

### Package-Specific

```bash
pnpm run -F @repo/db gen          # Generate Prisma client
pnpm run -F @repo/db push         # Push database schema
pnpm run -F b dev                 # Start backend only
```

---

## 🧪 API Usage Examples

### User Registration

```bash
curl -X POST http://localhost:3000/api/auth/credentials/sign-up \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'
```

### User Sign-in

```bash
curl -X POST http://localhost:3000/api/auth/credentials/sign-in \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'
```

---

## 🔒 Security Considerations

- Passwords are hashed using Argon2 with secure parameters
- Session data encrypted and stored in database
- Secure cookies in production environment
- Configurable session expiration
- CSRF protection ready

---

## 🚧 Project Status

**Current Phase**: Core Authentication System ✅  
**Next Phase**: Attendance Features (employee management, clock in/out, reporting, admin panel)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and ensure tests pass
4. Format code: `pnpm format`
5. Type check: `pnpm check-types`
6. Commit changes: `git commit -m 'Add new feature'`
7. Push to branch: `git push origin feature/new-feature`
8. Create a Pull Request

---

## 📄 License

This project is private and proprietary.

---

## 🆘 Support

For questions or support, please contact the development team or create an issue in the repository.

---

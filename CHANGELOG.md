# Changelog

All notable changes to the Attendance Management System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned

- Employee management functionality
- Clock in/out features
- Attendance tracking and reporting
- Admin dashboard
- Role-based access control

## [0.1.0] - 2025-08-23

### 🎉 Initial Release

#### Added

**Core Infrastructure**

- Monorepo setup with Turborepo and pnpm workspaces
- TypeScript configuration across all packages
- Shared Prettier configuration with Tailwind CSS plugin
- Development tooling with hot reload support

**Authentication System**

- User registration with secure password requirements
- User sign-in with Passport.js Local Strategy
- Session management with Prisma Session Store
- Argon2 password hashing for security
- Email validation and unique constraints

**Database Layer (`@repo/db`)**

- SQLite database with Prisma ORM
- User model with authentication fields
- Session model for persistent login sessions
- Database schema migrations support
- Type-safe database client generation

**Validation Layer (`@repo/validations`)**

- Zod-based schema validation
- Sign-up validation (name, email, password)
- Sign-in validation (email, password)
- TypeScript type generation from schemas
- Strong password requirements (12+ chars, letters + numbers/special chars)

**Utilities Package (`@repo/utils`)**

- Secure password hashing with Argon2
- Password verification utilities
- HTTP status code constants
- Zod error formatting helpers
- CSS class merging utilities (clsx + tailwind-merge)

**Environment Configuration (`@repo/env`)**

- Zod-based environment variable validation
- Type-safe environment configuration
- Support for development, production, and test environments
- Database URL and session secret management

**Backend API (`apps/backend`)**

- Express.js 5.1.0 server with TypeScript
- RESTful API endpoints for authentication
- CORS configuration for cross-origin requests
- JSON body parsing and security middleware
- Session persistence with secure cookies

#### API Endpoints

- `POST /api/auth/credentials/sign-up` - User registration
- `POST /api/auth/credentials/sign-in` - User authentication

#### Security Features

- SQL injection protection via Prisma ORM
- Password strength validation
- Secure session management
- Email format validation
- Argon2 password hashing with secure parameters

#### Development Experience

- Hot reload with Nodemon
- TypeScript compilation and type checking
- Shared configuration across packages
- Package-specific build and development scripts
- Consistent code formatting with Prettier

#### Documentation

- Comprehensive README with setup instructions
- API usage examples with curl commands
- Package overview and architecture documentation
- Development workflow and contributing guidelines

### Technical Specifications

**Dependencies**

- Node.js 18+ runtime
- Express.js 5.1.0 for server framework
- Prisma for database ORM and migrations
- TypeScript 5.9.2 for type safety
- Zod for runtime validation
- Argon2 for password hashing
- Passport.js for authentication strategies

**Database Schema**

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Session {
  id        String   @id
  sid       String   @unique
  data      String
  expiresAt DateTime
}
```

**Project Structure**

```
attendance/
├── apps/backend/          # Express.js API server
├── packages/
│   ├── db/               # Database schema and client
│   ├── env/              # Environment configuration
│   ├── prettier/         # Shared Prettier config
│   ├── tsconfig/         # Shared TypeScript config
│   ├── utils/            # Shared utility functions
│   └── validations/      # Zod validation schemas
├── package.json          # Root package configuration
├── pnpm-workspace.yaml   # Workspace configuration
└── turbo.json           # Turborepo configuration
```

### Known Issues

- None reported in this initial release

### Breaking Changes

- N/A (Initial release)

---

## Version History

- **v0.1.0** - Initial release with core authentication system
- **Unreleased** - Future attendance management features

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Support

For questions about specific changes or features, please refer to the commit history or create an issue in the repository.

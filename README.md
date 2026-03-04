# Schitzer Monorepo

A pnpm workspace monorepo managed with TurboRepo.

## Requirements

- Node.js 20+
- pnpm
- Docker (for local PostgreSQL via Docker Compose)

## Workspace Layout

- `apps/web` - Next.js + TypeScript app
- `apps/api` - NestJS + TypeScript API
- `packages/shared` - shared types/utilities

## Getting Started

```bash
pnpm install
cp .env.example .env
cp apps/api/.env.example apps/api/.env
```

## Local PostgreSQL (Docker Compose)

Start PostgreSQL in the background:

```bash
docker compose up -d postgres
```

Stop PostgreSQL while keeping data:

```bash
docker compose stop postgres
```

Stop and remove the container/network (keeps named volume data):

```bash
docker compose down
```

Stop and remove everything including DB data volume:

```bash
docker compose down -v
```

The API expects `DATABASE_URL` and defaults in `.env.example` match `docker-compose.yml` credentials.

Example:

```env
DATABASE_URL=postgresql://schitzer:schitzer@localhost:5432/schitzer
```

## Scripts

- `pnpm dev` - run all workspace dev servers in parallel through Turbo
- `pnpm build` - build all workspace packages/apps
- `pnpm lint` - lint all workspace packages/apps
- `pnpm format` - format repository files with Prettier
- `pnpm test` - run test scripts in all workspaces

## Useful Commands

```bash
pnpm -r build
pnpm -r lint
```

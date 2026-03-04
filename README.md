# Schitzer Monorepo

A pnpm workspace monorepo managed with TurboRepo.

## Requirements

- Node.js 20+
- pnpm

## Workspace Layout

- `apps/web` - Next.js + TypeScript app
- `apps/api` - NestJS + TypeScript API
- `packages/shared` - shared types/utilities

## Getting Started

```bash
pnpm install
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

# Agent Instructions

This is a blank GitHub Codespace. No project has been scaffolded yet.

## Environment

- **OS**: Ubuntu 24.04 (dev container)
- **Runtimes available**: Node.js 24, Python 3.12, Go 1.26, Rust (rustc)
- **Tools on PATH**: `git`, `gh` (GitHub CLI), `docker`, `kubectl`, `curl`, `wget`, `zip/unzip/tar`

## Starting a New Project

When asked to create a project, scaffold it directly in `/workspaces/codespaces-blank/` (the workspace root). Do not create a nested folder with the same name as the workspace unless the user asks.

Prefer the language/framework the user specifies. If unspecified, default to what best fits the task:
- Web APIs → Node.js (Express/Fastify) or Python (FastAPI)
- CLIs → Go or Python
- Full-stack web → Next.js (Node 24 available)

After scaffolding, run the project's install/build step to verify it works.

## Git

The workspace is not yet a git repository. Initialize with `git init` when starting a project if the user intends to track changes. Use `gh repo create` to publish to GitHub.

## Docker

Docker-in-Docker is available. Use it for containerized workloads, multi-service setups, or when the user asks to dockerize the project.

## Security

- Never hardcode secrets or credentials — use environment variables or `.env` files (add to `.gitignore`).
- Validate all external input at system boundaries.

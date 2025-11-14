# Vibe CLI & Web Frontend — Consolidated Summary

## 1. High-Level Purpose

Vibe is a free, privacy-first AI coding assistant focused on terminal-centric workflows. It routes to community free OpenRouter models using a Bring Your Own Key approach. The companion web frontend (now under `src/` App Router) serves as a marketing, onboarding, and documentation surface emphasizing safety, transparency, and developer velocity.

## 2. Core Value Proposition

- Local-first: All interactions originate from your shell.
- Explicit control: No silent file mutations; edits require user approval.
- Defensive stance: Refuses malicious or abusive operational requests.
- Free access: Rotates across available free models for resilience.
- Git-native automation: Assists with commit messages, PR descriptions, and code review context.

## 3. Architecture Overview

### CLI Layer
- Entry point: [`bin/vibe.cjs`](bin/vibe.cjs)
- Command orchestration: [`cli.cjs`](cli.cjs)
- Capability modules:
  - Code generation: [`lib/codegen.cjs`](lib/codegen.cjs)
  - Refactoring: [`lib/refactor.cjs`](lib/refactor.cjs)
  - Debug assistance: [`lib/debug.cjs`](lib/debug.cjs)
  - Test generation: [`lib/testgen.cjs`](lib/testgen.cjs)
  - Git tooling: [`lib/gittools.cjs`](lib/gittools.cjs)
  - Multi-file editing: [`lib/multiedit.cjs`](lib/multiedit.cjs)
  - API integration: [`lib/openrouter.cjs`](lib/openrouter.cjs)
  - API key management: [`lib/apikey.cjs`](lib/apikey.cjs)

### Web Frontend (App Router)
- Root layout: [`src/app/layout.tsx`](src/app/layout.tsx)
- Landing page: [`src/app/page.tsx`](src/app/page.tsx)
- Theming & globals: [`src/app/globals.css`](src/app/globals.css)
- Shared UI primitives (Radix + custom): [`src/components/ui/button.tsx`](src/components/ui/button.tsx), etc.
- Feature sections & marketing components: [`src/components/quick-start-section.tsx`](src/components/quick-start-section.tsx)
- Utility helpers: [`src/lib/utils.ts`](src/lib/utils.ts)
- Placeholder assets: [`src/lib/placeholder-images.json`](src/lib/placeholder-images.json)
- Hooks: [`src/hooks/use-toast.ts`](src/hooks/use-toast.ts)

### Styling & Theming
- Tailwind config: [`tailwind.config.cjs`](tailwind.config.cjs)
- Theme tokens: [`themes/dark.json`](themes/dark.json), [`themes/light.json`](themes/light.json)

### Build / Config
- Next.js config: [`next.config.mjs`](next.config.mjs)
- TypeScript config: [`tsconfig.json`](tsconfig.json)
- Package metadata & scripts: [`package.json`](package.json)

## 4. Tech Stack Summary

CLI:
- Node.js (>=18)
- ES modules with selective CommonJS entry points
- OpenRouter API consumption via HTTP requests (axios/node-fetch)
- Git integration (simple-git)
- Terminal UX enhancements (chalk, ora, inquirer)

Web:
- Next.js App Router (v16)
- React 19
- Tailwind CSS v4 token mapping
- Radix UI primitives
- Lucide icons
- Embla carousel for testimonials
- Class variance / merging: class-variance-authority, tailwind-merge, clsx
- Image optimization via Next Image (configured remote pattern for Unsplash)

## 5. Key CLI Features (Conceptual)

| Domain | Feature | Description |
|--------|---------|-------------|
| Chat | Interactive conversation | Free model routing & context injection |
| Codegen | Structured generation | Prompts turned into code blocks with validation |
| Refactor | Safe transformations | Diff planning with user approval |
| Debug | Intelligent hints | Error trace + recommendations |
| Testgen | Test skeletons | Extract functions & propose unit tests |
| Gittools | Git workflow augmentation | Commit message & PR description suggestions |
| Multiedit | Batch editing | Apply multi-file diffs with explicit confirmation |

## 6. Web Frontend Functional Areas

- Hero section: Install commands + quick CTA.
- Quick Start accordion: Steps for onboarding.
- Feature tabs: Presents core CLI, agents roadmap, integrations, comparison placeholder.
- Pricing: Free model usage + future donation tier conceptual placeholder.
- Testimonials: Carousel leveraging Embla.
- FAQ: Addresses risk, security, and usage expectations.
- (Future) Docs pages migration to MDX + search indexing pipeline.

## 7. Security & Privacy Principles

- No persistent server state needed for CLI beyond local config file.
- BYO key strategy prevents central credential storage.
- Defensive-only operation model reduces misuse risk surface.
- Web interface performs no destructive file operations.
- Avoid exposing environment variables in client bundle (only server/API usage).
- Planned: Add headers/middleware for additional hardening on deployment.

## 8. Deployment Workflow (Standard)

1. Local verification:
   - `npm install`
   - `npm run typecheck`
   - `npm run build`
2. Git operations:
   - `git add .`
   - `git commit -m "feat: migrate app router + remove legacy AI flows"`
   - `git push origin main`
3. Vercel setup:
   - Import GitHub repo
   - Framework auto-detected: Next.js
   - Add `OPENROUTER_API_KEY` (Production / Preview if needed for API routes)
   - Trigger deploy
4. Post-deploy QA:
   - Verify `/` renders + all sections load
   - Check images load (Unsplash remote pattern)
   - Confirm dark/light toggle
5. Optional performance:
   - Run Lighthouse
   - Remove unused CSS or deferred scripts
   - Consider preloading critical fonts or icons

## 9. Operational Maintenance Guidelines

| Task | Frequency | Notes |
|------|-----------|-------|
| Dependency audit | Monthly | Look for unused Radix modules, security advisories |
| README / SUMMARY update | On release | Reflect version bump & new features |
| Model availability check | Weekly | Ensure free model list not deprecated |
| Tailwind token consistency | Quarterly | Sync with theme JSON if expanded |
| GitHub issues triage | Weekly | Label (feature, bug, security, docs) |
| Vercel environment keys review | Quarterly | Rotate key & confirm no leakage |

## 10. Roadmap Snapshot (Indicative)

- MDX docs conversion & dynamic search index generation
- Feature comparison matrix vs other AI dev tools (Copilot, Claude Code)
- Agent automation hardening (safe planning for multi-step edits)
- Blog section (`/blog`) + RSS feed
- Recorded session / playback JSON for advanced terminal demos
- Optional donation / sponsorship tier (non-paywall value adds)

## 11. Glossary (Context Terms)

| Term | Meaning |
|------|--------|
| Context Injection | Feeding structured artifacts (diffs, globs, command output) to models |
| Defensive Mode | Refusal logic for instructions that could cause harmful actions |
| Multi-file Diff Planning | Preparing edits across several files before write confirmation |
| BYO Key | User supplies their own OpenRouter API key (privacy & control) |
| Free Model Rotation | Automatic fallback among available zero-cost inference endpoints |

## 12. Quick Install Commands (Copy Section)

```bash
npm i -g github:mk-knight23/vibe-cli
# Or:
curl -fsSL https://raw.githubusercontent.com/mk-knight23/vibe-cli/main/install.sh | bash
```

## 13. Versioning & Releases

- Semantic versioning (e.g., v1.0.5)
- Changelog entries stored in [`CHANGELOG.md`](CHANGELOG.md)
- Binaries produced via `pkg` script: `npm run build:bin`
- Packaged tarball: published to npm with curated file list in [`package.json`](package.json)

## 14. File Mutation Safety Model

All write operations initiated by the CLI follow a plan-confirm-apply sequence:
1. Collect candidate changes.
2. Present unified diff preview.
3. Require explicit user approval.
4. Apply atomic write (fail early if any target file mismatch).
This ensures traceability and user control.

## 15. Extending the Web Surface

- Add new UI primitive under [`src/components/ui`](src/components/ui/button.tsx)
- Register new marketing section by editing [`src/app/page.tsx`](src/app/page.tsx)
- Extend placeholder images via [`src/lib/placeholder-images.json`](src/lib/placeholder-images.json)
- Introduce dynamic routes: create a folder under [`src/app`](src/app/page.tsx) with `page.tsx` file
- Theming: Adjust CSS variables in [`src/app/globals.css`](src/app/globals.css)

## 16. Removal of Experimental AI Flows

Previous experimental Genkit / AI flow files were replaced with stubs and excluded for stability. No external AI orchestration libraries remain besides OpenRouter usage inside CLI modules. This reduces dependency surface and build risk.

## 17. Summary Statement

Vibe combines a secure, explicit, and free terminal AI workflow with a modern, accessible web onboarding experience. The CLI emphasizes safe augmentation over automation, while the web surface accelerates understanding, adoption, and transparency.

---

_For detailed CLI commands reference root [`README.md`](README.md). For web restructuring rationale see [`README_WEB.md`](README_WEB.md)._
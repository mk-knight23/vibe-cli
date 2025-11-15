# Vibe VS Code Extension

This directory contains **Vibe VS Code**, a graphical VS Code extension version of the Vibe CLI assistant.

It provides:

- Chat and Agent panels running on **OpenRouter** models (default: `z-ai/glm-4.5-air:free`).
- Multiple **modes** and **personas** to emulate tools like Kilo Code, RooCode, Cline, Claude, Copilot, etc.
- Project-aware context (reads from open editors) with a **Context** button.
- Keyboard shortcuts to rotate modes:  
  - Next mode: `⌘ + .` (macOS) / `Ctrl + .` (others)  
  - Previous mode: `⌘ + ⇧ + .` / `Ctrl + ⇧ + .`

Core implementation is in [`src/extension.ts`](src/extension.ts:1). Extension metadata is in [`package.json`](package.json:1).

---

## Features

### Modes

Modes are managed in the extension backend and surfaced in the webview:

- Architect (🏗️) — plan and design.
- Code (💻) — write & refactor code.
- Ask (❓) — Q&A and explanations.
- Debug (🪲) — diagnose & fix issues.
- Orchestrator (🪃) — coordinate multi-step workflows.
- Project Research (🔍) — analyze and summarize the codebase.

Mode state is stored in the extension host and updated via webview messages (see mode handling in [`src/extension.ts`](src/extension.ts:131)).

### Personas

Personas tailor the assistant behavior per mode:

- Balanced — general purpose.
- System Architect — high-level design.
- Pair Programmer — implementation-focused.
- Debug Doctor — debugging expert.
- Research Analyst — codebase research.

Personas are defined in [`src/extension.ts`](src/extension.ts:80) and applied in a synthesized system prompt per request.

### Chat vs Agent Tabs

The webview UI provides:

- **Chat** tab — direct conversational usage.
- **Agent** tab — agent-style behavior, emphasizing checkpoints & todo planning.

Agent/tab selection is handled fully in the webview script and included in the message payload to the backend (see `isAgent` handling in [`src/extension.ts`](src/extension.ts:640)).

### OpenRouter Integration

- Uses `fetch` from Node 18+ to call `https://openrouter.ai/api/v1/chat/completions`.
- Default model: `z-ai/glm-4.5-air:free`.
- Several **top free models** are exposed in a dropdown for quick switching (see `TOP_FREE_MODELS` in [`src/extension.ts`](src/extension.ts:113)).

The request wrapper lives in `callOpenRouter(...)` in [`src/extension.ts`](src/extension.ts:812).

### Settings

Extension settings (via VS Code Settings UI or `settings.json`):

- `vibe.openrouterApiKey` (string) — your OpenRouter API key.
- `vibe.defaultModel` (string) — default model id (defaults to `z-ai/glm-4.5-air:free`).
- `vibe.autoApproveUnsafeOps` (boolean) — future toggle for auto-approving risky operations.
- `vibe.maxContextFiles` (number) — maximum files considered for context collection.

Configuration schema is defined in [`package.json`](package.json:26).

### Context Button

- **Context** button collects snippets from visible editors (URI, language, first 4k chars) and surfaces them in the sidebar.
- Implementation: `handleRequestContext` in [`src/extension.ts`](src/extension.ts:355).

This mimics Vibe-CLI’s context injection but is scoped to open editors to keep it safe and predictable.

---

## Commands & Keybindings

Commands are contributed in [`package.json`](package.json:34):

- `Vibe: Open Chat` (`vibe.openChat`) — opens the main Vibe panel in **Code** mode.
- `Vibe: Open Agent Panel` (`vibe.openAgent`) — opens the panel in **Architect** mode.
- `Vibe: Open Settings` (`vibe.openSettings`) — jumps to Vibe’s settings section.
- `Vibe: Next Mode (⌘+.)` (`vibe.switchNextMode`)
- `Vibe: Previous Mode (⌘+Shift+.)` (`vibe.switchPrevMode`)

Keybindings (when the Vibe panel is visible):

- Next mode: `⌘ + .` (macOS) / `Ctrl + .`
- Previous mode: `⌘ + ⇧ + .` / `Ctrl + ⇧ + .`

See the registration logic in `activate(...)` in [`src/extension.ts`](src/extension.ts:856).

---

## Building & Running

From this subdirectory (`vscode-extension/`):

```bash
npm install
npm run compile      # builds to ./dist
```

To develop or debug in VS Code:

1. Open this folder in VS Code.
2. Run **"Launch Extension"** debug configuration (you may need to create `.vscode/launch.json`).
3. In the Extension Development Host:
   - Open the Command Palette.
   - Run `Vibe: Open Chat` or `Vibe: Open Agent Panel`.
   - Set your `vibe.openrouterApiKey` in Settings and start chatting.

---

## Packaging for Marketplace

To build a `.vsix` package:

```bash
npm run compile
npx @vscode/vsce package
```

That will produce `vibe-vscode-*.vsix`, which you can:

- Install locally:  
  Command Palette → `Extensions: Install from VSIX...`
- Upload to the VS Code Marketplace under your publisher (`mk-knight23` as in [`package.json`](package.json:4)).

---

## Notes & Future Work

This first iteration focuses on:

- A solid chat panel with modes/personas.
- OpenRouter integration compatible with the existing Vibe ecosystem.
- A UX layout that can be extended with:
  - Automated subtasks and todos.
  - Checkpoints that persist across sessions.
  - Auto-approve toggles wiring into file operations and command execution hooks.

Most behavior is orchestrated in [`src/extension.ts`](src/extension.ts:1); new features should be added there using the existing webview messaging pattern (see `handleMessage` and the inline webview script).
# Intro to Claude Code

A hands-on learning guide for developers who want to get productive with
[Claude Code](https://claude.ai/code) — Anthropic's AI coding CLI. Complete
six progressive challenges by editing real files in this repository using
the Claude CLI.

---

## Table of Contents

1. [Running the App Locally](#running-the-app-locally)
2. [Getting Started with Claude Code](#getting-started-with-claude-code)
3. [The Challenges](#the-challenges)
4. [Architecture](#architecture)
5. [BRIEF.md — Your Persistent Instructions](#briefmd--your-persistent-instructions)

---

## Running the App Locally

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later (bundled with Node.js)
- **Git** — [download at git-scm.com](https://git-scm.com)

#### Mac users — managing Node with nvm

On a Mac, the recommended way to install and manage Node.js is with
[nvm](https://github.com/nvm-sh/nvm) (Node Version Manager). It lets you
switch between Node versions per project and avoids permission issues that
come with a system-level Node install.

**Step 1 — install Homebrew** (if you don't have it):

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**Step 2 — install nvm via Homebrew:**

```bash
brew install nvm
```

Then follow the post-install instructions Homebrew prints — they add nvm to
your shell profile. For most users that means adding these lines to
`~/.zshrc` (or `~/.bash_profile`):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$(brew --prefix nvm)/nvm.sh" ] && \. "$(brew --prefix nvm)/nvm.sh"
```

Reload your shell: `source ~/.zshrc`

**Step 3 — install and use Node v20:**

```bash
nvm install 20
nvm use 20
nvm alias default 20   # make v20 the default for new terminal windows
```

Verify: `node --version` should print `v20.x.x`.

> **Tip:** You can add a `.nvmrc` file to any project containing just `20`
> and run `nvm use` (no arguments) to automatically switch to the right
> version.

### 1. Clone the repository

```bash
git clone https://github.com/johnwheeler-prod/intro-to-claude.git
cd intro-to-claude
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will be available at **http://localhost:3000**.

The development server supports hot-reload — any file changes you (or Claude)
make will be reflected in the browser immediately.

### Other useful commands

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

---

## Getting Started with Claude Code

### Prerequisites

#### 1. A Claude subscription

Claude Code requires a **Claude Pro or Max** subscription.

- Pro plan: [claude.ai/upgrade](https://claude.ai/upgrade)
- Max plan: designed for heavy professional usage with higher rate limits

> **Note:** Claude Code is not available on the free Claude tier.

#### 2. The Claude CLI

Install Claude Code globally via npm:

```bash
npm install -g @anthropic-ai/claude-code
```

Verify the installation:

```bash
claude --version
```

You'll be prompted to log in with your Anthropic account the first time you
run `claude`.

#### 3. Node.js (already needed for this project)

Claude Code itself requires Node.js v18 or later — same as this project.

---

### Your first session

Open a terminal, navigate to this project's root directory, and run:

```bash
claude
```

You'll enter an interactive session. Claude can see and edit all files in the
current directory. Try asking it something about the codebase:

```
> What files make up this project?
```

To exit a session: type `exit` or press `Ctrl+C`.

---

### Key CLI flags

| Flag | What it does |
|---|---|
| `claude` | Start an interactive session |
| `claude --plan` | Enter plan mode — Claude describes what it will do before writing any code |
| `claude --dangerously-skip-permissions` | Auto-accept all file edits without prompting |
| `claude "your prompt here"` | Run a one-shot non-interactive command |

---

### Tips for productive sessions

- **Be specific.** Instead of "fix the card", say "add a strikethrough to the
  description text in Challenge01.tsx and set the completed prop to true."
- **Reference BRIEF.md.** Start sessions with "Please read BRIEF.md first" so
  Claude knows your project conventions before it writes a single line.
- **Use plan mode for big changes.** Before asking Claude to refactor multiple
  files, run `claude --plan` so you can review and refine the approach.
- **Keep sessions focused.** One goal per session is easier to verify and
  easier to undo if something goes wrong.

---

## The Challenges

Each card in the app corresponds to a component file in
`src/components/challenges/`. The challenges progress from basic CLI usage
to advanced architectural work with live API data.

| # | Title | Skill | Difficulty |
|---|---|---|---|
| 01 | Your First Claude Command | Basic CLI, file editing | ⭐ |
| 02 | Hands-Free Mode | `--dangerously-skip-permissions` | ⭐⭐ |
| 03 | Teach Claude Your Project | Context, BRIEF.md | ⭐⭐⭐ |
| 04 | Multi-File Coordination | Multi-file edits, state management | ⭐⭐⭐ |
| 05 | Level Up the Docs | Documentation, diagrams | ⭐⭐⭐⭐ |
| 06 | Plan Mode + Live Data | Plan mode, API integration | ⭐⭐⭐⭐⭐ |

---

## Architecture

### Component hierarchy

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, global styles
│   ├── page.tsx            # Homepage — renders the challenge grid
│   └── globals.css         # Tailwind base + CSS custom properties
│
└── components/
    ├── ChallengeCard.tsx   # Shared card shell (props: title, difficulty, hint…)
    │
    └── challenges/
        ├── Challenge01.tsx # "Your First Claude Command"
        ├── Challenge02.tsx # "Hands-Free Mode"
        ├── Challenge03.tsx # "Teach Claude Your Project"
        ├── Challenge04.tsx # "Multi-File Coordination"
        ├── Challenge05.tsx # "Level Up the Docs"
        └── Challenge06.tsx # "Plan Mode + Live Data"
```

### Visual layout

```
┌──────────────────────────────────────────────────────────────────────┐
│                        page.tsx  (grid)                              │
│                                                                      │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐           │
│  │ Challenge01   │  │ Challenge02   │  │ Challenge03   │           │
│  │               │  │               │  │               │           │
│  │ ChallengeCard │  │ ChallengeCard │  │ ChallengeCard │           │
│  └───────────────┘  └───────────────┘  └───────────────┘           │
│                                                                      │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐           │
│  │ Challenge04   │  │ Challenge05   │  │ Challenge06   │           │
│  │               │  │               │  │               │           │
│  │ ChallengeCard │  │ ChallengeCard │  │ ChallengeCard │           │
│  └───────────────┘  └───────────────┘  └───────────────┘           │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

        Each ChallengeCard renders:
        ┌─────────────────────────────────┐
        │  [01]  Card Title      [✓ badge]│  ← completed prop
        │  [Difficulty tag] [Topic tag] ★ │
        │                                 │
        │  Description text               │
        │  (the target of Challenge 01)   │
        │                                 │
        │  [Optional children slot]       │  ← used by Challenge 06
        │                                 │
        │  ─────────────────────────────  │
        │  Hint: ...                      │
        └─────────────────────────────────┘
```

### Data flow

```
page.tsx
  └── imports Challenge01–Challenge06 (static RSC, no client state yet)
        └── each renders <ChallengeCard> with static props
              └── ChallengeCard renders the shared card UI

Challenge 04 extends this by adding:
  page.tsx (or layout)
    └── useCompleted() hook  ←→  localStorage
          └── passes `completed` prop dynamically to each card
```

---

## BRIEF.md — Your Persistent Instructions

`BRIEF.md` in the repo root is where you store standing instructions for
Claude. Because Claude doesn't have memory between sessions, this file is how
you give it consistent context every time.

**How to use it:**

1. Edit `BRIEF.md` with your coding preferences, conventions, and project notes.
2. At the start of each Claude session, paste:
   ```
   Please read BRIEF.md first, then help me with this project.
   ```
3. Update `BRIEF.md` whenever you discover a new preference worth saving.

`BRIEF.md` ships with helpful comments explaining what to put there and
suggestions for your first additions. Think of it as a living document that
grows alongside your project.

---

## Contributing

Found a bug or want to suggest a new challenge? Open an issue or a pull
request — this guide is meant to evolve as Claude Code does.

---

*Built to be broken — edit these files with Claude.*

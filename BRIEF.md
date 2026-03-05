# Project Brief

<!-- =========================================================
  WHAT IS THIS FILE?

  BRIEF.md is the single source of truth for how Claude should
  behave when working on this project. Think of it as a standing
  set of instructions you never have to repeat.

  HOW TO USE IT:
  At the start of every Claude session, paste this into your first
  message (or reference it explicitly):

      "Please read BRIEF.md first, then help me with this project."

  Claude does not load this file automatically — you have to point
  it here. Making this a habit keeps your preferences, architecture
  decisions, and project context in Claude's active context window
  for the entire session.

  WHAT TO PUT HERE:
  • Coding style rules ("always use named exports")
  • Framework preferences ("prefer Server Components over Client Components")
  • File structure conventions ("colocate tests next to source files")
  • Things Claude should never do ("don't add comments to obvious code")
  • Known gotchas or constraints specific to this project
  • Links to external docs Claude should be aware of

  IDEAS FOR YOUR FIRST ADDITIONS:
  1. Add a preferred component naming convention (PascalCase, etc.)
  2. Specify your preferred way to handle async data fetching
  3. List any libraries that are already in the project and should
     be used before reaching for new ones
  4. Define what "done" looks like for a task (tests? types? lint?)
  5. Add context about the intended audience of this app

  REMEMBER: The more specific and honest this file is, the more
  useful Claude becomes. Update it as your preferences evolve.
========================================================= -->

## Project Overview

**intro-to-claude** is a hands-on learning guide built with Next.js. It
presents six progressive challenges that teach users how to use the Claude
CLI effectively, from basic file edits all the way to plan mode and live
API integration.

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Runtime**: Node.js

## Coding Conventions

<!-- Add your own rules below this line -->

- Use named exports for all components
- Keep components small and single-purpose
- Prefer Tailwind utility classes over custom CSS
- All new components should have explicit TypeScript types — no `any`

## Architecture Notes

- Each challenge lives in its own file: `src/components/challenges/Challenge0X.tsx`
- The shared card shell is `src/components/ChallengeCard.tsx`
- Page layout is in `src/app/page.tsx`
- Do not add routing — this is intentionally a single-page app

## Things Claude Should Not Do

<!-- Customize this list to match your preferences -->

- Do not add comments to self-evident code
- Do not add extra dependencies without checking what's already in package.json
- Do not create new files when editing an existing one is appropriate
- Do not add error boundaries or fallbacks for scenarios that can't occur

## Session Checklist

When starting a new coding session with Claude:

1. [ ] Paste "Please read BRIEF.md first" into your first message
2. [ ] Tell Claude what challenge you're working on
3. [ ] Keep the session focused on one task at a time
4. [ ] Update this file if you discover a new preference worth saving

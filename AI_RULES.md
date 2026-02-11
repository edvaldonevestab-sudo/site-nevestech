# AI Rules (Project Conventions)

This document defines the **tech stack** and the **library usage rules** for this app. Follow these rules when generating or modifying code.

## Tech stack (5–10 bullets)

- **React** for UI.
- **TypeScript** for all source code.
- **React Router** for client-side routing.
- **Tailwind CSS** for styling (utility-first; no bespoke CSS unless required).
- **shadcn/ui** as the default component library.
- **Radix UI** primitives (used via shadcn/ui) for accessible, composable components.
- **lucide-react** for icons.
- **App structure:** source lives in `src/`, pages in `src/pages/`, reusable UI in `src/components/`.

## Library rules (what to use for what)

### Routing
- Use **React Router**.
- Keep the route definitions in **`src/App.tsx`**.
- The default/main page is **`src/pages/Index.tsx`**.

### UI components
- Prefer **shadcn/ui** components first (buttons, dialogs, forms, dropdowns, tables, tabs, etc.).
- Compose new UI by **wrapping/combining** shadcn/ui components inside `src/components/`.
- **Do not edit** the generated shadcn/ui component files directly; if behavior/styles must change, create a wrapper component.

### Styling
- Use **Tailwind CSS** classes for layout, spacing, typography, colors, and responsiveness.
- Avoid custom CSS files unless there is a clear need that Tailwind can’t cover.

### Icons
- Use **lucide-react** icons (consistent style, tree-shakeable).

### State & side effects
- Prefer **React hooks** (`useState`, `useMemo`, `useCallback`, `useEffect`) and keep state local when possible.
- Lift state only when multiple components truly need it.

### Forms & validation
- Prefer shadcn/ui form patterns/components.
- Keep form logic close to the form component; extract reusable form fields into `src/components/`.

### Data fetching
- Use `fetch` (or the project’s existing API client if one already exists).
- Keep API calls in small, reusable functions (e.g., `src/lib/` if present), and keep UI components focused on rendering.

## Project structure rules

- **All app code must be in `src/`.**
- Pages go in **`src/pages/`** and should be route-level components.
- Reusable components go in **`src/components/`**.
- If you add new components/pages, ensure they are **wired into the UI** (e.g., rendered from `Index.tsx` or reachable via routes) so they are visible in the preview.

## Code quality rules

- Keep components small and focused.
- Prefer clear, readable code over clever abstractions.
- Avoid adding new dependencies unless absolutely necessary.

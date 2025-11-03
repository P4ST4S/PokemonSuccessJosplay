## Mii Achievements

Playful Nintendo-inspired tracker built with Next.js App Router, strict TypeScript, and Tailwind CSS v4. Achievements are loaded from a static JSON file and completion state is stored locally in the browser.

### Stack
- Next.js 14 App Router
- React 19 with server-first layouts
- Tailwind CSS v4 with a custom Mii Channel palette
- Typed local storage hook (`hooks/useLocalStorage.ts`)

### Getting started

```bash
pnpm install
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) and start unlocking achievements. Useful commands:

- `pnpm lint` – ESLint with Next.js + TypeScript rules
- `pnpm build` – production build (prerequisite for deployment)

### Project layout

- `app/` – App Router entry points and global layout
- `components/` – UI building blocks (`AchievementCard`, `AchievementsGrid`)
- `hooks/` – browser-safe composables (`useLocalStorage`)
- `public/` – statically served assets (`successes.json`, icons)
- `types/` – shared TypeScript contracts

### Adding or editing achievements

1. Open `public/successes.json`.
2. Add a new object following the existing shape:
   ```json
   {
     "id": "unique-id",
     "title": "Achievement title",
     "description": "What the player needs to do",
     "icon": "/icons/default.svg"
   }
   ```
3. Keep the `id` unique—this key is also what gets stored in LocalStorage.
4. Optionally drop a new SVG icon inside `public/icons/` and reference it through the `icon` field.

Changes are picked up automatically at runtime thanks to `resolveJsonModule` and static imports.

### Local storage & reset

- Completion state lives under the key `mii-achievements::completed`.
- Use the “Reset all” button in the UI to clear the stored data.

### Theming

Tailwind tokens are defined in `tailwind.config.ts`. Update the extended colors or shadows to tweak the look & feel while keeping the Nintendo-inspired baseline.

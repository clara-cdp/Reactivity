<p align="center">
  <img height="100" alt="reactivity_logo" src="https://github.com/user-attachments/assets/c278b4c3-966e-49af-8b53-a22611f63133" />
</p>

<p align="center">
  <img  src="https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React" />
  <img  src="https://img.shields.io/badge/TypeScript-20232A?style=flat-square&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img  src="https://img.shields.io/badge/Vite-20232A?style=flat-square&logo=vite&logoColor=646CFF" alt="Vite" />
  <img  src="https://img.shields.io/badge/Tailwind_CSS-20232A?style=flat-square&logo=tailwindcss&logoColor=06B6D4" alt="Tailwind CSS" />
   <img height="25" src="https://img.shields.io/badge/Vitest-20232A?style=flat-square&logo=vitest&logoColor=FCC72B" alt="Vitest" />
<img height="25" src="https://img.shields.io/badge/Testing_Library-20232A?style=flat-square&logo=testinglibrary&logoColor=E33332" alt="React Testing Library" />
</p>

A handmade habit tracker built with React, TypeScript, and Vite. Reactivity helps you build consistency by letting you create habits, track them day by day, and view your progress across the week.

## 📋 Overview

Reactivity is a simple and focused productivity app designed to make daily habit tracking feel effortless. Users can add habits, mark them complete for specific days, navigate between weeks, and see streaks update as they stay consistent.

## ⚙️ Features

### Habit Management

- ✅ Create new habits
- ✅ Delete habits
- ✅ Persist habits using Local Storage

### Tracking

- ✅ Track completion by day
- ✅ Weekly habit view
- ✅ Weekly navigation
- ✅ Current streak calculation
- ✅ Daily progress summary


## 🛠 Tech Stack

- React 19
- TypeScript
- Vite
- date-fns
- Tailwind CSS

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open the local URL shown in the terminal to use the app.

## 📚 Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |


## 🧬 Project Structure

```
src/
 ├── components
 ├── context
 ├── hooks
 ├── App.tsx
```

---

## Testing Strategy & Implementation

Quality assurance and regression prevention are prioritized early in Reactivity's lifecycle. Before expanding the feature set, an end-to-end testing suite is being established to guarantee that state mutations, storage persistence, and core UI workflows remain rock-solid.

### Testing Stack

* **[Vitest](https://vitest.dev/):** A native, blazing-fast test runner tailored for Vite. It reuses the app's existing Vite build pipeline and plugin configurations without dual-tooling overhead.
* **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/):** Encourages behavioral tests from the user's perspective rather than testing implementation details.
* **[jsdom](https://github.com/jsdom/jsdom):** A pure-JavaScript implementation of web standards that provides a browser-like DOM environment inside Node.js.
* **[@testing-library/jest-dom](https://github.com/testing-library/jest-dom):** Extends matchers to deliver expressive, readable assertions (e.g., `toBeInTheDocument()`, `toHaveValue()`).
* **[@testing-library/user-event](https://testing-library.com/docs/user-event/intro):** Simulates real user interactions (typing, clicking, toggling) with accurate browser event dispatching.

---

# 🗺️ Roadmap

Features planned for upcoming releases.

## Calendar & Planning

- 📅 Monthly calendar view
- 📂 Habit categories (Health, Work, Learning...)
- 🔔 Browser notifications for reminders
- 📆 Outlook Calendar integration (Microsoft Graph API)

---

## Habit Tracking

- 💤 Skip day without breaking a streak
- 🎉 Celebrate milestones with confetti animations

---

## Statistics & Insights

- 📈 GitHub-style yearly heatmap
- 🔥 Current streak
- 🏆 Longest streak ever
- 📊 Advanced habit statistics dashboard

---

## Motivation

- 💬 Daily motivational quotes (Quote API)

---

## Future Vision

Reactivity aims to become more than a habit tracker. The long-term goal is to evolve it into a lightweight personal productivity dashboard that combines habit tracking, calendar integration, meaningful statistics, and gentle motivation while keeping the interface clean and distraction-free.

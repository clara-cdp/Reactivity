# Reactivity

A handmade habit tracker built with React, TypeScript, and Vite. Reactivity helps you build consistency by letting you create habits, track them day by day, and view your progress across the week.

## 📋 Overview

Reactivity is a simple and focused productivity app designed to make daily habit tracking feel effortless. Users can add habits, mark them complete for specific days, navigate between weeks, and see streaks update as they stay consistent.

## ⚙️ Features

- Add new habits quickly from the main form
- Track habit completion for each day of the week
- Navigate between weeks with previous and next controls
- View a streak count for each habit
- Delete habits when they are no longer needed
- Persist habits in the browser with local storage

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

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint checks

## 🧬 Project Structure

- `src/components` - UI components such as the header, habit form, list, and item cards
- `src/context` - Habit state management and provider logic
- `src/hooks` - Reusable hooks, including local storage persistence
- `src/App.tsx` - Main app layout and weekly date navigation


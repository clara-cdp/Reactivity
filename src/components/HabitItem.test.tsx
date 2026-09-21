import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HabitItem } from './HabitItem'
import { HabitProvider } from '../context/HabitProvider'
import { useHabits, type Habit } from '../context/useHabits'
import { addDays, subDays } from 'date-fns'

// Helper component to provide context and display updated habits list
function TestWrapper({ habit, visibleDates }: { habit: Habit; visibleDates: Date[] }) {
    const { habits } = useHabits()
    const activeHabit = habits.find(h => h.id === habit.id) || habit

    return <HabitItem habit={activeHabit} visibleDates={visibleDates} />
}

describe('HabitItem Component', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    const today = new Date()
    const yesterday = subDays(today, 1)
    const tomorrow = addDays(today, 1)

    const sampleHabit: Habit = {
        id: 'habit-1',
        name: 'Drink Water',
        completions: [],
    }

    it('renders habit name and date buttons', () => {
        render(
            <HabitProvider>
                <HabitItem habit={sampleHabit} visibleDates={[yesterday, today]} />
            </HabitProvider>
        )

        expect(screen.getByText('Drink Water')).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument()
    })

    it('disables date buttons that are in the future', () => {
        render(
            <HabitProvider>
                <HabitItem habit={sampleHabit} visibleDates={[today, tomorrow]} />
            </HabitProvider>
        )

        const buttons = screen.getAllByRole('button')
        // The date button for 'tomorrow' should be disabled
        const tomorrowButton = buttons.find(b => b.hasAttribute('disabled') && b.textContent?.includes(tomorrow.getDate().toString()))
        expect(tomorrowButton).toBeDisabled()
    })

    it('renders streak count when streak is greater than 0', () => {
        const habitWithStreak: Habit = {
            id: 'habit-2',
            name: 'Running',
            completions: [today, yesterday],
        }

        render(
            <HabitProvider>
                <HabitItem habit={habitWithStreak} visibleDates={[today]} />
            </HabitProvider>
        )

        expect(screen.getByText('2')).toBeInTheDocument()
        expect(screen.getByAltText('Streak flame')).toBeInTheDocument()
    })

    it('does not render streak flame when streak is 0', () => {
        render(
            <HabitProvider>
                <HabitItem habit={sampleHabit} visibleDates={[today]} />
            </HabitProvider>
        )

        expect(screen.queryByAltText('Streak flame')).not.toBeInTheDocument()
    })
})

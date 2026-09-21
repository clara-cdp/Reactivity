import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { HabitList } from './HabitList'
import { HabitProvider } from '../context/HabitProvider'
import { useHabits } from '../context/useHabits'

function HabitPopulator({ names }: { names: string[] }) {
    const { addHabit } = useHabits()
    return (
        <button
            onClick={() => {
                names.forEach(n => addHabit(n))
            }}
        >
            Populate
        </button>
    )
}

describe('HabitList Component', () => {
    const visibleDates = [new Date(2026, 8, 21)]

    beforeEach(() => {
        localStorage.clear()
    })

    it('renders empty message when no habits exist', () => {
        render(
            <HabitProvider>
                <HabitList visibleDates={visibleDates} />
            </HabitProvider>
        )

        expect(
            screen.getByText('No habits yet. Add a new habit above to get started')
        ).toBeInTheDocument()
    })

    it('renders list of habit items when habits exist', async () => {
        const { container } = render(
            <HabitProvider>
                <HabitPopulator names={['Morning Run', 'Night Reading']} />
                <HabitList visibleDates={visibleDates} />
            </HabitProvider>
        )

        act(() => {
            screen.getByRole('button', { name: 'Populate' }).click()
        })

        expect(screen.getByText('Morning Run')).toBeInTheDocument()
        expect(screen.getByText('Night Reading')).toBeInTheDocument()
        expect(screen.queryByText('No habits yet. Add a new habit above to get started')).not.toBeInTheDocument()
    })
})

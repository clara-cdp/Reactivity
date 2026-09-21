import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HabitForm } from './Habitform'
import { HabitProvider } from '../context/HabitProvider'
import { useHabits } from '../context/useHabits'

function HabitStateInspector() {
    const { habits } = useHabits()
    return (
        <ul data-testid="habit-list">
            {habits.map(h => (
                <li key={h.id}>{h.name}</li>
            ))}
        </ul>
    )
}

describe('HabitForm Component', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('renders input field and disabled submit button initially', () => {
        render(
            <HabitProvider>
                <HabitForm />
            </HabitProvider>
        )

        const input = screen.getByPlaceholderText('New habit')
        const button = screen.getByRole('button', { name: /add habit/i })

        expect(input).toBeInTheDocument()
        expect(input).toHaveValue('')
        expect(button).toBeDisabled()
    })

    it('enables submit button when input has non-whitespace text', async () => {
        const user = userEvent.setup()

        render(
            <HabitProvider>
                <HabitForm />
            </HabitProvider>
        )

        const input = screen.getByPlaceholderText('New habit')
        const button = screen.getByRole('button', { name: /add habit/i })

        await user.type(input, 'Meditate')
        expect(button).not.toBeDisabled()
    })

    it('submits a new habit and resets the input field', async () => {
        const user = userEvent.setup()

        render(
            <HabitProvider>
                <HabitForm />
                <HabitStateInspector />
            </HabitProvider>
        )

        const input = screen.getByPlaceholderText('New habit')
        const button = screen.getByRole('button', { name: /add habit/i })

        await user.type(input, 'Read 30 mins')
        await user.click(button)

        // Input should reset
        expect(input).toHaveValue('')
        expect(button).toBeDisabled()

        // Habit should be added to state
        expect(screen.getByText('Read 30 mins')).toBeInTheDocument()
    })

    it('does not submit when input contains only whitespace', async () => {
        const user = userEvent.setup()

        render(
            <HabitProvider>
                <HabitForm />
            </HabitProvider>
        )

        const input = screen.getByPlaceholderText('New habit')
        const button = screen.getByRole('button', { name: /add habit/i })

        await user.type(input, '   ')
        expect(button).toBeDisabled()
    })
})

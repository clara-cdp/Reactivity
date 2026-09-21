import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button Component', () => {
    it('renders button children correctly', () => {
        render(<Button>Click Me</Button>)
        expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
    })

    it('applies primary variant styles by default', () => {
        render(<Button>Primary</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-teal-600')
    })

    it('applies secondary variant styles when variant="secondary"', () => {
        render(<Button variant="secondary">Secondary</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('bg-zinc-700')
    })

    it('applies delete variant styles when variant="delete"', () => {
        render(<Button variant="delete">Delete</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('text-red-800')
    })

    it('merges custom className props', () => {
        render(<Button className="custom-class">Custom</Button>)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('custom-class')
    })

    it('handles click events when enabled', async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup()

        render(<Button onClick={handleClick}>Submit</Button>)
        await user.click(screen.getByRole('button'))

        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('does not fire click events when disabled', async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup()

        render(<Button disabled onClick={handleClick}>Disabled</Button>)
        const button = screen.getByRole('button')
        
        expect(button).toBeDisabled()
        await user.click(button)
        expect(handleClick).not.toHaveBeenCalled()
    })
})

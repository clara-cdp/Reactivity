import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import { Button } from './Button'

describe('Button Component', () => {
    it('renders button children correctly', () => {
        render(<Button>Click Me</Button>)

        expect(
            screen.getByRole('button', { name: /click me/i }),
        ).toBeInTheDocument()
    })

    it('applies primary variant styles by default', () => {
        render(<Button>Primary</Button>)

        expect(screen.getByRole('button')).toHaveClass('bg-teal-600')
    })

    it('applies the selected variant styles', () => {
        render(<Button variant="delete">Delete</Button>)

        expect(screen.getByRole('button')).toHaveClass('text-red-800')
    })

    it('merges custom className props', () => {
        render(<Button className="custom-class">Custom</Button>)

        expect(screen.getByRole('button')).toHaveClass('custom-class')
    })

    it('forwards click events', async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup()

        render(<Button onClick={handleClick}>Submit</Button>)

        await user.click(screen.getByRole('button'))

        expect(handleClick).toHaveBeenCalledOnce()
    })

    it('forwards the disabled prop', async () => {
        const handleClick = vi.fn()
        const user = userEvent.setup()

        render(
            <Button disabled onClick={handleClick}>
                Disabled
            </Button>,
        )

        const button = screen.getByRole('button')

        expect(button).toBeDisabled()

        await user.click(button)

        expect(handleClick).not.toHaveBeenCalled()
    })
})
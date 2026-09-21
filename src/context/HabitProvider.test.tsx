import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { HabitProvider } from './HabitProvider'
import { useHabits } from './useHabits'

describe('HabitProvider & useHabits', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('should throw an error when used outside of HabitProvider', () => {
        expect(() => renderHook(() => useHabits())).toThrow('Null context')
    })

    it('should initialize with empty habits list', () => {
        const { result } = renderHook(() => useHabits(), {
            wrapper: HabitProvider,
        })

        expect(result.current.habits).toEqual([])
    })

    it('should add a habit', () => {
        const { result } = renderHook(() => useHabits(), {
            wrapper: HabitProvider,
        })

        act(() => {
            result.current.addHabit('Read books')
        })

        expect(result.current.habits).toHaveLength(1)
        expect(result.current.habits[0].name).toBe('Read books')
        expect(result.current.habits[0].completions).toEqual([])
    })

    it('should delete a habit', () => {
        const { result } = renderHook(() => useHabits(), {
            wrapper: HabitProvider,
        })

        act(() => {
            result.current.addHabit('Exercise')
        })

        const habitId = result.current.habits[0].id

        act(() => {
            result.current.deleteHabit(habitId)
        })

        expect(result.current.habits).toEqual([])
    })

    it('should toggle the same calendar day regardless of time', () => {
        const { result } = renderHook(() => useHabits(), {
            wrapper: HabitProvider,
        })

        act(() => {
            result.current.addHabit('Drink water')
        })

        const habitId = result.current.habits[0].id

        const morning = new Date(2026, 8, 21, 9, 0)
        const evening = new Date(2026, 8, 21, 20, 0)

        act(() => {
            result.current.toggleHabit(habitId, morning)
        })

        expect(result.current.habits[0].completions).toHaveLength(1)

        act(() => {
            result.current.toggleHabit(habitId, evening)
        })

        expect(result.current.habits[0].completions).toHaveLength(0)
    })

    it('should persist habits to localStorage and revive completion dates on reload', () => {
        const { result, unmount } = renderHook(() => useHabits(), {
            wrapper: HabitProvider,
        })

        const testDate = new Date(2026, 8, 21)

        act(() => {
            result.current.addHabit('Read book')
        })
        const habitId = result.current.habits[0].id

        act(() => {
            result.current.toggleHabit(habitId, testDate)
        })

        unmount()

        // Remount provider to simulate page reload from localStorage
        const { result: remountedResult } = renderHook(() => useHabits(), {
            wrapper: HabitProvider,
        })

        expect(remountedResult.current.habits).toHaveLength(1)
        expect(remountedResult.current.habits[0].completions[0]).toBeInstanceOf(Date)

        // Verify toggle off works on restored Date instance
        act(() => {
            remountedResult.current.toggleHabit(habitId, testDate)
        })
        expect(remountedResult.current.habits[0].completions).toHaveLength(0)
    })
})



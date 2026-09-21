// src/hooks/useLocalStorage.test.ts

import { describe, it, expect, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'


describe('useLocalStorage', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('should return initial value when localStorage is empty', () => {
        const { result } = renderHook(() => useLocalStorage('test-key', 'default value'))
        expect(result.current[0]).toBe('default value')
    })

    it('should save updated value to localStorage', () => {
        const { result } = renderHook(() => useLocalStorage('test-key', 'initial'))

        act(() => {
            const [, setValue] = result.current
            setValue('new value')
        })

        expect(result.current[0]).toBe('new value')
        expect(localStorage.getItem('test-key')).toBe(JSON.stringify('new value'))
    })

    it('should load pre-existing value from localStorage', () => {
        localStorage.setItem('test-key', JSON.stringify('stored value'))

        const { result } = renderHook(() => useLocalStorage('test-key', 'default'))
        expect(result.current[0]).toBe('stored value')
    })
})
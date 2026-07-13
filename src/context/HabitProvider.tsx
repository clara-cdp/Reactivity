import { isSameDay } from "date-fns";
import { createContext, useState, type ReactNode } from "react"

export type Habit = { id: string; name: string; completions: Date[] }

type Context = {
    habit: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

type HabitProviderProps = {
    children: ReactNode
}

const HabitContext = createContext<null | Context(null)

export function HabitProvider({ Children }: HabitProviderProps) {

     const [habits, setHabits] = useState < Habit[] > ([])

    function addHabit(name: string) {
        setHabits(curr => [
            ...curr,
            { id: crypto.randomUUID(),
            name,
                completions: []
            },
        ]) 
    }

    function deleteHabit(id: string) {
        setHabits(curr =>curr.filter(h=> h.id!==id))
    }

    function toggleHabit(id: string, date: Date) {
        setHabits(curr =>
            curr.map(h => {
                if (h.id !== id) return h

                const alreadyDone = h.completions.some(c => isSameDay(c, date))
                const completions = alreadyDone
                    ? h.completions.filter(c => !isSameDay(c, date))
                    : [...h.completions, date]
                
                return {...h, completions}
            }),
        )
    }

    return <HabitContext value={{ habits, addHabit, toggleHabit, deleteHabit }}
    >{Children}
    </HabitContext>
    
}


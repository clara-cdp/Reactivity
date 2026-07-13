import { createContext } from "react"

type Context = {
    name: string
}

type HabitProviderProps = {
    children: ReactNode
}

export const HabitContext = createContext<null | Context(null)

export function HabitProvider({ Children }: HabitProviderProps) {
    return <HabitContext value={{ name: "Any" }}>{Children}</HabitContext>
    
}
import { useState } from "react"
import { Header } from "./components/Header"
import { HabitForm } from "./components/Habitform"
import { HabitList } from "./components/HabitList"

export default function App() {
    const [habits, setHabits] = useState < Habit[] > ([])

    function addHabit(name: string) {
        setHabits(curr => [...curr, {id: crypto.randomUUID(), name}]) 
    }
    
    return <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
        <Header/>
        <HabitForm addHabit={addHabit}/>
        <HabitList habits={habits} />
  </div>
}




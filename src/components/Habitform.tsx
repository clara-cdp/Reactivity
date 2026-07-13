import { useContext, useState, type SubmitEvent } from "react"
import { Button } from "./Button"
import { HabitContext } from "../context/HabitProvider";

export function HabitForm() {
    const [name, setName] = useState("");
    const habitContext = useContext(HabitContext)

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        
        if (name.trim() === "") return
        setName("")
        habitContext?.addHabit(name) 
}

    return(
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <input
                value={name}
                onChange={e=> setName(e.target.value)}
                className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 
                outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                placeholder="New habit"
            />
            <Button
                disabled = {name.trim()===""}
                className="bg-violet-500 rounded-xl px-4 py-2 font-bold tracking-wide"
            >
                Add Habit
            </Button>
        </form>
    )
}
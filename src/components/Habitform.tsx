import { useState } from "react"
import { Button } from "./Button"

export function HabitForm() {
    const [name, setName] = useState("");

    function handleSubmit(e: submitEvent) {
        e.preventDefault()
        
        if (name.trim() === "") return
        setName("")

        console.log(name)
}

    return(
        <form className="flex gap-2">
            <input
                value={name}
                onChange={e=> setName(e.target.value)}
                className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 
            outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            placeholder="New habit"/>
            <Button
                disabled = {name.trim()===""}
                className="bg-violet-500 rounded-xl px-4 py-2 font-bold tracking-wide">Add Habit</Button>
        </form>
    )
}
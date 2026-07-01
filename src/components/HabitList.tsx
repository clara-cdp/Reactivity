import {Button} from "./Button"

export function HabitList() {
    const habits = ["habit 1", "habit 2", "habit 3"]
   
    if (habits.length === 0) {
        return (
            < p className="text-center text-zinc-500 py-12" > No habits yet. Add a new habit above to get started</ p>     
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => (
                <h1>{habit}</h1>
            ))}
    </div>
    )
}
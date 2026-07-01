import { HabitItem } from "./HabitItem"

export function HabitList() {
    const habits = [
        { id: 1, name: "habit 1" },
        { id: 2, name: "habit 2" },
        { id: 3, name: "habit 3" }
    ]
   
    if (habits.length === 0) {
        return (
            < p className="text-center text-zinc-500 py-12" > No habits yet. Add a new habit above to get started</ p>     
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => (
                <HabitItem key={habit.id} habit={habit}/>
            ))}
    </div>
    )
}
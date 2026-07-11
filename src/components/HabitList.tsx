import { HabitItem, type Habit } from "./HabitItem"


type HabitListProps = {
    habits: Habit[]
    deleteHabit: (id:string)=> void
}

export function HabitList({habits, deleteHabit}: HabitListProps) {
   
    if (habits.length === 0) {
        return (
            <p className="text-center text-zinc-500 py-12" >
                No habits yet. Add a new habit above to get started
            </p>     
        )
    }

    return (
        <div className="flex flex-col gap-3">
            {habits.map(habit => (
                <HabitItem deleteHabit={deleteHabit} key={habit.id} habit={habit}/>
            ))}
    </div>
    )
} 
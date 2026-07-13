import { HabitItem, type Habit } from "./HabitItem"


type HabitListProps = {
    habits: Habit[]
    deleteHabit: (id: string) => void
    toggleHabit: (id: string, date: Date) => void
}

export function HabitList({
    habits,
    deleteHabit,
    toggleHabit
}: HabitListProps) {
   
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
                <HabitItem
                    deleteHabit={deleteHabit}
                    toggleHabit={toggleHabit}
                    key={habit.id}
                    habit={habit}
                />
            ))}
    </div>
    )
} 
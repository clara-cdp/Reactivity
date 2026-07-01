type HabitItemProps = {
    habit: { id:number; name:string}
}

export function HabitItem({ habit }: HabitItemProps) {
    return <h1>{ habit.name}</h1>
}
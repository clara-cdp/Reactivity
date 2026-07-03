import { Button } from "./Button"

type HabitItemProps = {
    habit: { id:number; name:string}
}

export function HabitItem({ habit }: HabitItemProps) {
    return (
        <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                    <span className="font-medium">{habit.name}</span>
                    <span className="text-sm text-amber-400">3 🔥</span>
                </div>
                <Button>Delete</Button>
            </div>
        </div>
    )
}


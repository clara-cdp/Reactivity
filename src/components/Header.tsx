import { Button } from "./Button"
import { useHabits } from "../context/useHabits"
import { isToday, format } from "date-fns"

type HeaderProps = {
    visibleDates: Date[]
    onPrev: () => void
    onNext: () => void
}

export function Header({ visibleDates, onPrev, onNext }: HeaderProps) {

    const { habits } = useHabits()
    const doneToday = habits.filter(h =>
        h.completions.some(c => isToday(c)),
    ).length
    const dateRange = `${format(visibleDates[0], "MMM d")} - ${format(visibleDates.at(-1)!, "MMM d")}`

    return (
        <header className="flex flex-col gap-4 mb-10">
            <div className="flex justify-start">
                <img src="/assets/reactivity_logo.svg" alt="Reactivity" className="h-8 sm:h-10 md:h-12 w-auto max-w-full object-contain" />
            </div>
            <div className="flex items-end justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wider">
                        {doneToday} / {habits.length} done today
                    </span>
                </div>
                <div className="flex flex-col gap-1.5 items-end">
                    <span className="text-zinc-400 text-sm">{dateRange}</span>
                    <div className="flex items-center gap-3">
                        <Button onClick={onPrev}>Prev</Button>
                        <Button
                            onClick={onNext}
                            disabled={visibleDates.some(d => isToday(d))}
                        >Next</Button>
                    </div>
                </div>
            </div>
        </header >
    )
}
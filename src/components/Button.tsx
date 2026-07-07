import type { ComponentProps } from "react"

type ButtonProps = {
    children: ReactNode
} & ComponentProps<"button">

export function Button({children, ...props}: ButtonProps) {
    return (
        <button {...props} className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 
        disabled:opacity-30 disabbled:cursor-not-allowed"
        >
            {children}
        </button>
    )
}
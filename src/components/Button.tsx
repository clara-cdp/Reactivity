import type { ComponentProps } from "react"
import {twMerge} from "tailwind-merge"

type Variant = "primary" | "secondary" | "delete"

type ButtonProps = {
    variant?: Variant
} & ComponentProps<"button">

export function Button
    ({ variant = "primary",
        className,
        ...props
    }: ButtonProps) {
    return (
        <button
            {...props}
            className={twMerge(
                getVariantStyles(variant),
                "transition-colors rounded-lg px-2  p-4 py-1 disabled:opacity-30 disabbled:cursor-not-allowed",
                className
            )}
        />
    )
}

function getVariantStyles(variant: Variant) {
    switch (variant) {
        case "primary":
            return "bg-teal-600 hover:bg-teal-400"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "delete":
            return "hover:bg-red-800 text-red-800 hover:text-red-200"
        default:
            throw new Error(`invalid variantÑ $^variant satisfies never}`)
    }
}
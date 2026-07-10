import type { ComponentProps } from "react"

type ButtonProps = {
    variant?: Variant
} & ComponentProps<"button">

export function Button({variant = "primary", ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={`${getVariantStyles(variant)}
            transition-colors rounded px-2 py-1 disabled:opacity-30 disabbled:cursor-not-allowed`}
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
type ButtonProps = {
    children : ReactNode
}

export function Button({children}: ButtonProps) {
    
    return <button className="bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-1 
    disabled:opacity-30 disabbled:cursor-not-allowed">{children}</button>
}
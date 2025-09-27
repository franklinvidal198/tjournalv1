import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "block w-full rounded-md border border-white/20 bg-white/5 px-4 py-2 text-base text-white placeholder:text-muted-foreground focus:border-blue-500/50 focus:ring-blue-500/20 focus:outline-none transition-colors",
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

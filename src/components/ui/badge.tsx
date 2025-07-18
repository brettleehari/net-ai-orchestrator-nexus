import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-all duration-200 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105",
        secondary:
          "border-transparent bg-gradient-secondary text-secondary-foreground hover:opacity-90 hover:scale-105",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        outline: "text-foreground border-border hover:bg-muted hover:scale-105",
        success: "border-transparent bg-gradient-success text-secondary-foreground hover:opacity-90 hover:scale-105",
        alert: "border-transparent bg-gradient-alert text-accent-foreground hover:opacity-90 hover:scale-105",
        warning: "border-transparent bg-amber-500 text-white hover:bg-amber-600 hover:scale-105",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

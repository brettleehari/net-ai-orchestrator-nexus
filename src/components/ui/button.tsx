import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-button hover:shadow-floating hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-button hover:bg-destructive/90 hover:shadow-floating",
        outline:
          "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground shadow-button hover:shadow-floating",
        secondary:
          "bg-gradient-secondary text-secondary-foreground shadow-button hover:shadow-floating hover:opacity-90",
        ghost: "hover:bg-muted hover:text-foreground transition-colors duration-200",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        enterprise: "bg-gradient-enterprise text-primary-foreground shadow-button hover:shadow-floating hover:opacity-95",
        alert: "bg-gradient-alert text-accent-foreground shadow-button hover:shadow-floating hover:opacity-90",
        success: "bg-gradient-success text-secondary-foreground shadow-button hover:shadow-floating hover:opacity-90"
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-11 w-11 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow",
        destructive:
          "bg-semantic-error text-white hover:bg-semantic-error/90",
        outline:
          "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-colors",
        secondary:
          "bg-brand-secondary text-white hover:bg-brand-secondary-hover",
        ghost: "hover:bg-brand-light hover:text-brand-primary",
        link: "text-brand-primary underline-offset-4 hover:underline",
        primary: "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
        accent: "bg-brand-accent text-brand-primary hover:bg-brand-accent-hover shadow-md hover:shadow-lg hover:-translate-y-0.5",
        success: "bg-semantic-success text-white hover:bg-semantic-success/90 shadow-md",
        warning: "bg-semantic-warning text-white hover:bg-semantic-warning/90 shadow-md",
        info: "bg-semantic-info text-white hover:bg-semantic-info/90 shadow-md",
        text: "text-brand-primary hover:text-brand-primary-hover underline font-medium py-2 transition-colors"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        md: "h-10 rounded-md px-4 py-2",
        lg: "h-11 rounded-md px-6 py-3 text-base",
        xl: "h-14 rounded-lg px-8 py-4 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
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

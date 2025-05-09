import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 shadow-sm",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-primary text-white hover:bg-brand-primary-hover",
        secondary:
          "border-transparent bg-brand-secondary text-white hover:bg-brand-secondary-hover",
        accent:
          "border-transparent bg-brand-accent text-brand-primary hover:bg-brand-accent-hover",
        outline: "border-brand-primary text-brand-primary",
        success:
          "border-transparent bg-semantic-success text-white",
        warning:
          "border-transparent bg-semantic-warning text-white",
        error:
          "border-transparent bg-semantic-error text-white",
        info:
          "border-transparent bg-semantic-info text-white",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[10px]",
        lg: "px-3 py-1 text-sm",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

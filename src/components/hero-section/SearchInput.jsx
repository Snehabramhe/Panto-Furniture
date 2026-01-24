import * as React from "react"
import { cva } from "class-variance-authority"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group"

const searchInputVariants = cva(
  "transition-all",
  {
    variants: {
      variant: {
        default: "",
        white: "border-white",
        dark: "border-neutral-800 bg-neutral-900",
        glass:
          "border border-white/30 bg-white/10 backdrop-blur-md shadow-lg",
      },
      size: {
        sm: "h-10",
        md: "h-12",
        lg: "h-14",
      },
      rounded: {
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      rounded: "md",
    },
  }
)

export function SearchInput({
  className,
  variant,
  size,
  rounded,
  iconAlign = "inline-end",
  placeholder = "Search furniture",
  ...props
}) {
  const isIconEnd = iconAlign === "inline-end"

  return (
    <InputGroup
      className={cn(
        "w-full",
        searchInputVariants({ variant, size, rounded }),
        className
      )}
      {...props}
    >
      {/* INPUT */}
      <InputGroupInput
        placeholder={placeholder}
        className={cn(
          "bg-transparent text-white placeholder:text-white/70",
          isIconEnd && "pr-14"
        )}
      />

      {/* ICON BUTTON */}
      <InputGroupAddon
        align={iconAlign}
        className="pr-2"
      >
        <button
          type="button"
          className="
            flex items-center justify-center
            size-10 rounded-full
            bg-orange-500 text-white
            hover:bg-orange-600
            transition-colors
            mr-2
          "
        >
          <Search className="h-5 w-5" />
        </button>
      </InputGroupAddon>
    </InputGroup>
  )
}

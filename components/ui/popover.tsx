"use client"; // Assuming this is for Deno or specific environment, otherwise remove or adjust as needed

import * as React from "react";
import { Popover, PopoverTrigger, PopoverContent, PopoverPortal } from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const CustomPopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverContent>,
  React.ComponentPropsWithoutRef<typeof PopoverContent>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverContent
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 rounded-md border border-popover bg-popover p-4 shadow-md outline-none animate-in data-[state=open]:fade-in-90 data-[state=closed]:fade-out-90 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      className
    )}
    {...props}
  />
));

CustomPopoverContent.displayName = "CustomPopoverContent"; // Set a display name for debugging and React DevTools

export { Popover, PopoverTrigger, CustomPopoverContent as PopoverContent, PopoverPortal };

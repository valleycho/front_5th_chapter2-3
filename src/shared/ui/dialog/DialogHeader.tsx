import * as DialogPrimitive from "@radix-ui/react-dialog"

interface DialogHeaderProps extends DialogPrimitive.DialogTitleProps {
  className?: string
}

export const DialogHeader = ({ className, ...props }: DialogHeaderProps) => (
  <div className={`flex flex-col space-y-1.5 text-center sm:text-left ${className}`} {...props} />
)
DialogHeader.displayName = "DialogHeader"

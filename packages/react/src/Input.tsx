import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const StyledInput = cva(
  'relative flex flex-1 items-center justify-center gap-2 rounded-[4px] border-2 border-solid border-neutral-200 bg-neutral-100 p-3 text-sm leading-none text-neutral-900 shadow-[0_0_0_2px_#f5f5f5]  focus:shadow-[0_0_0_2px_#171717] [&:autofill_&:autofill:hover_&:autofill:focus_&:autofill:active]:!fill-neutral-900 [&:autofill_&:autofill:hover_&:autofill:focus_&:autofill:active]:!shadow-[0_0_0_30px_$colors$slate5_inset]',
  {
    variants: {
      status: {
        default: {},
        error: 'shadow-[0_0_0_2px_#fca5a5]',
      },
    },
    defaultVariants: {
      status: 'default',
    },
  },
)

export interface InputProps
  extends React.HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof StyledInput> {}

export const Input: React.FC<InputProps> = ({
  className,
  status,
  ...props
}) => <input className={StyledInput({ className, status })} {...props} />

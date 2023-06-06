import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const InputErrorStyled = cva(
  'text-red-300 m-0 whitespace-pre-wrap font-normal text-xs leading-relaxed tracking-[0.045em]',
)

export interface InputErrorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof InputErrorStyled> {}

export const InputError: React.FC<InputErrorProps> = ({
  className,
  ...props
}) => <span className={InputErrorStyled({ className })} {...props} />

// import React from 'react'
// import { cva, type VariantProps } from 'class-variance-authority'

// const InputErrorStyled = cva('text-red-300 m-0 whitespace-pre-wrap font-normal')

// export interface InputErrorProps
//   extends React.HTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof InputErrorStyled> {}

// export const InputError: React.FC<InputErrorProps> = ({
//   className,
//   ...props
// }) => <p className={InputErrorStyled({ className })} {...props} />

export const InputError = () => (
  <input className="text-red-300 m-0 whitespace-pre-wrap font-normal" />
)

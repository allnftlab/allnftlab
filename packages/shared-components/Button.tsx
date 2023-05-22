import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import cs from 'classnames'

export const StyledButton = cva('button', {
  variants: {
    variant: {
      primary: [
        'text-neutral-100',
        'bg-neutral-800',
        'enabled:hover:text-neutral-100',
        'enabled:hover:bg-neutral-900',
        'disabeld:text-neutral-100',
        'disabeld:bg-neutral-300',
      ],
      secondary: [
        'text-neutral-500',
        'bg-neutral-400',
        'enabled:hover:text-neutral-900',
        'enabled:hover:bg-neutral-200',
        'disabled:text-neutral-100',
        'disabled:border-neutral100',
      ],
      tertiary: [
        'text-neutral-500',
        'underline',
        'border-transparent',
        'bg-neutral-100',
        'p-0',
        'min-w-0',
        'enabled:hover:text-neutral-900',
        'disabled:text-neutral-200',
      ],
    },
    size: {
      xs: ['min-w-fit', 'h-6', 'gap-0', 'p-1', 'pl-2', 'text-sm', 'uppercase'],
      sm: ['h-8'],
      md: ['h-8', 'text-base', 'py-4', 'px-3', 'md:h-12'],
      lg: [
        'py-4',
        'px-6',
        'text-2xl',
        'h-16',
        'md:px-8',
        'md:h-[4.5rem]',
        'md:text-3xl',
        'md:font-semibold',
      ],
    },
  },
  compoundVariants: [
    {
      size: 'xs',
      variant: 'primary',
      class: [
        'text-neutral-100',
        'bg-neutral-500',
        'font-semibold',
        'enabled:hover:text-neutral-50',
        'enabled:hover:bg-neutral-900',
      ],
    },
  ],
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof StyledButton> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  size,
  variant,
  ...props
}) => (
  <button
    className={cs(
      'rounded-md',
      'text-lg',
      'leading-none',
      'font-bold',
      'text-center',
      'min-w-[120px]',
      'w-fit',
      'box-border',
      'px-3',
      'py-5',
      'shadow-[0_3px_6px_#262626,_0_2px_4px_#1f1f1f]',
      'flex',
      'items-center',
      'justify-center',
      'gap-2',
      'border-2',
      'border-solid',
      'border-neutral-200',
      '[&>svg]:w-4',
      '[&>svg]:h-4',
      'disabled:cursor-not-allowed',
      'focus:outline-2',
      'focus:outline',
      'focus:outline-neutral-500',
      'focus:outline-offset-2',
      StyledButton({ size, variant, className }),
    )}
    {...props}
  />
)

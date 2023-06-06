import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

export const Headings = cva('m-0text-neutral-100font-semibold', {
  variants: {
    size: {
      xs: ['text-base', 'leading-normal', 'md:text-lg', 'md:leading-normal'],
      sm: ['text-xl', 'leading-normal'],
      md: ['text-xl', 'leading-tight', 'md:text-2xl', 'md:leading-tight'],
      lg: ['text-3xl', 'leading-tight'],
      xl: ['text-4xl', 'leading-tight'],
      '2xl': ['text-lg', 'leading-tight', 'md:text-5xl', 'md:leading-tight'],
      '3xl': [
        'text-4xl',
        'leading-none',
        'md:text-6xl',
        'md:leading-none',
        'tracking-tighter',
      ],
      '4xl': [
        'text-4xl',
        'leading-none',
        'md:text-7xl',
        'md:leading-none',
        'tracking-tighter',
      ],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof Headings> {}

export const Heading: React.FC<TitleProps> = ({
  className,
  size,
  ...props
}) => <h2 className={Headings({ size, className })} {...props} />

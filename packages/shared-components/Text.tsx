import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import cs from 'classnames'

const Texts = cva('text', {
  variants: {
    size: {
      xs: ['text-xs', 'leading-relaxed', 'tracking-[0.045em]'],
      sm: ['text-sm', 'leading-relaxed', 'tracking-[0.045em]'],
      md: [
        'text-base',
        'leading-normal',
        'tracking-wider',
        'md:text-base',
        'md:leading-normal',
        'md:-tracking-[0.045em]',
      ],
      lg: [
        'text-base',
        'leading-normal',
        'md:text-lg',
        'md:leading-normal',
        'md:tracking-[0.045em]',
      ],
      xl: ['text-xl', 'leading-normal'],
      '2xl': ['text-2xl', 'leading-normal'],
      '3xl': ['text-3xl', 'leading-tight'],
      '4xl': ['text-4xl', 'leading-tight'],
      '5xl': ['text-5xl', 'leading-none'],
      '6xl': ['text-6xl', 'leading-none'],
      '7xl': ['text-7xl', 'leading-none'],
      '8xl': ['text-8xl', 'leading-none'],
      '9xl': ['text-9xl', 'leading-none'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof Texts> {}

export const Text: React.FC<TextProps> = ({ className, size, ...props }) => (
  <p
    className={cs(
      'm-0',
      'whitespace-pre-wrap',
      'font-normal',
      'text-neutral-100',
      Texts({ size, className }),
    )}
    {...props}
  />
)

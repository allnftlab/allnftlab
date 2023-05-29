import { styled } from '@/styles/stitches.config'
import { Text } from './Text'
import { ComponentProps, ElementType } from 'react'

export const InputError = styled(Text, {
  color: '$red8',
})

export interface InputErrorProps extends ComponentProps<typeof InputError> {
  as?: ElementType
}

InputError.displayName = 'InputError'

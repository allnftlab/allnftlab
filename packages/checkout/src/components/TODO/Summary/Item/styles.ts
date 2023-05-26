import ImagePrimitive from 'next/image'
import { styled } from '@/styles/stitches.config'

import { Flex as PrimitiveFlex } from '@/components/shared/Flex'
import { Text } from '@/components/shared/Text'
import { Heading } from '@/components/shared/Heading'

export const Container = styled(PrimitiveFlex, {
  gap: '$2',
  justifyContent: 'space-between',
  fontWeight: '$semibold',
  alignItems: 'flex-start !important',

  [`& > ${PrimitiveFlex}`]: {
    gap: '$4',
  },
})

export const Image = styled(ImagePrimitive, {
  width: '$16',
  height: 70,
  background: '$slate6',
  borderRadius: '$xs',
})

export const Details = styled(PrimitiveFlex, {
  gap: '$1',
  height: 70,

  [`& > ${Text}`]: {
    color: '$slate11',
  },

  [`& > ${Heading}`]: {
    marginBlockEnd: 'auto',
    lineHeight: '$none',
  },
})

export const QuantityButton = styled('button', {
  fontWeight: '$semibold',
  background: '$slate1',
  border: '1px solid $colors$slate1',
  color: '$slate12',
  fontSize: '$xl',
  width: '$8',
  height: '$8',
  borderRadius: '$full',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '&:hover': {
    background: '$slate2',
  },
  '&:focus': {
    borderColor: '$slate8',
  },
})

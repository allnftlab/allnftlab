import { Flex as PrimitiveFlex } from '@/components/shared/Flex'
import { Text } from '@/components/shared/Text'
import { styled } from '@/styles/stitches.config'

export const Header = styled(PrimitiveFlex, {
  width: '35%',
  gap: '$3',
  flexDirection: 'column',

  [`& > ${Text}`]: {
    color: '$slate11',
    lineHeight: '$loose',
  },

  [`& > ${Text}:first-of-type`]: {
    fontWeight: '$semibold',
  },
})

export const Form = styled('form', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
  width: '100%',
})

export const InputBlock = styled(PrimitiveFlex, {
  width: '100%',
  flexDirection: 'column !important',
  alignItems: 'flex-start !important',
  gap: '$1',

  color: '$slate11',

  '> *': {
    width: 'calc(100% - 2rem) !important',
  },
})

export const Footer = styled(PrimitiveFlex, {
  width: '100%',
  paddingBlockStart: '$5',
  gap: '$4',
  justifyContent: 'end',
  borderTop: '1px solid $colors$slate6',
})

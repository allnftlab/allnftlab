import * as Accordion from '@radix-ui/react-accordion'

import { Box } from '@/components/shared/Box'
import { Flex as PrimitiveFlex } from '@/components/shared/Flex'
import { Text } from '@/components/shared/Text'
import { styled } from '@/styles/stitches.config'

export const Container = styled(Box, {
  width: '100%',
  padding: '$5',
})

export const AccordionRoot = styled(Accordion.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const AccordionItem = styled(Accordion.Item, {})
export const AccordionHeader = styled(Accordion.Header, {})

export const AccordionTrigger = styled(Accordion.Trigger, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',

  background: 'transparent',
  border: 'none',
  color: '$slate12',
  width: '100%',

  '> button': {
    minWidth: 'fit-content !important',
    padding: '$4',

    '> svg': {
      transform: 'scale(2)',
      transition: '0.4s ease',
    },
  },

  "[data-state='open']": {
    svg: {
      transform: 'rotate(180deg) scale(3)',
    },
  },
})

export const AccordionContent = styled(Accordion.Content, {})

export const Header = styled(PrimitiveFlex, {
  paddingBlock: '$3',
  marginBlock: '$5',
  gap: '$3',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  borderBottom: '1px solid $colors$slate6',

  [`& > ${Text}`]: {
    color: '$slate11',
    fontWeight: '$semibold',
  },
})

export const Items = styled(PrimitiveFlex, {})

export const Footer = styled(PrimitiveFlex, {
  width: '100%',
  paddingBlockStart: '$5',
  gap: '$4',
  justifyContent: 'end',
  fontWeight: '$semibold',

  [`> ${PrimitiveFlex}`]: {
    borderTop: '1px solid $colors$slate6',
    width: '100%',
    justifyContent: 'space-between',
    gap: '$2',
    paddingBlockStart: '$4',

    [`> ${Text}:first-of-type`]: {
      color: '$slate11',
      fontWeight: '$semibold',
    },
    [`> ${PrimitiveFlex}`]: {
      width: '100%',
      justifyContent: 'space-between',

      [`> ${Text}:first-of-type`]: {
        color: '$slate11',
        fontWeight: '$semibold',
      },
    },
  },
})

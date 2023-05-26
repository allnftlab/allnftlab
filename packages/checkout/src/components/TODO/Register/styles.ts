import { Box } from '@/components/shared/Box'
import { styled } from '@/styles/stitches.config'

export const Container = styled(Box, {
  width: '100%',
  padding: '$5',

  '> form': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$8',
  },
})

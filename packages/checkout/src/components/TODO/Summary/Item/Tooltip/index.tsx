import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { IconButton, TooltipArrow, TooltipContent } from './styles'

const Tooltip = () => {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <IconButton>!</IconButton>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipContent sideOffset={5}>
            You can only get 2 of this NFT
            <TooltipArrow />
          </TooltipContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

export { Tooltip }

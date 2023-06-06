import Image from 'next/image'
import { Button } from '../../../react/src/Button'
import { Heading } from '../../../react/src/Heading'
import { Text } from '../../../react/src/Text'

import { Tooltip } from './TODO/ToolTip'
import { Item as ItemType, useCheckout } from '@/stores/checkout'

interface ItemProps {
  item: ItemType
}

const Item = ({ item }: ItemProps) => {
  const updateItemQuantity = useCheckout((state) => state.updateItemQuantity)

  const handleClickOnDecreaseQtd = () => {
    if (item.quantity <= 1) {
      return
    }
    updateItemQuantity(item.id, -1)
  }
  const handleClickOnIncreaseQtd = () => {
    updateItemQuantity(item.id, 1)
  }

  return (
    <article className="!items-start justify-between gap-2 font-semibold">
      <div className="flex items-start gap-6 ">
        <Image
          className="h-[70px] w-16 rounded-sm bg-neutral-200"
          src=""
          alt=""
        />

        <div className="flex flex-col items-center gap-1">
          <Text className="text-neutral-500" size="xs">
            Zico: The Legacy Collection
          </Text>
          <Heading className="mb-auto leading-none" size="xs">
            Legend
          </Heading>
          <Text className="text-neutral-500" size="xs">
            FREE
          </Text>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button
          className="flex h-8 w-8 rounded-full border border-solid border-neutral-50 bg-neutral-50 text-xl font-semibold text-neutral-900 "
          onClick={handleClickOnDecreaseQtd}
          type="button"
        >
          -
        </button>
        <Text>{item?.quantity ?? 0}</Text>
        <button
          className="flex h-8 w-8 rounded-full border border-solid border-neutral-50 bg-neutral-50 text-xl font-semibold text-neutral-900 "
          onClick={handleClickOnIncreaseQtd}
          type="button"
        >
          +
        </button>

        <Tooltip />
      </div>

      <Button size="xs" variant="secondary">
        Remover
      </Button>
    </article>
  )
}

export { Item }

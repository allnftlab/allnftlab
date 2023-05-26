import { checkout } from '@/assets/i18n/pages/checkout'
import { Button } from '@/components/shared/Button'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'
import { useState } from 'react'
import { ProductCheckbox } from './ProductCheckbox'

import { useCheckout, Item } from '@/stores/checkout'

interface SelectProductProps {
  content?: typeof checkout.en.select_product
  onProceed: () => void
}

const SelectProduct = ({ content, onProceed }: SelectProductProps) => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (id: number) => {
    setItems((items) => [...items, { id, quantity: 1 }])
  }
  const removeItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleClickOnProceed = () => {
    if (items.length === 0) {
      return
    }

    useCheckout.setState((state) => ({ ...state, items }))
    onProceed()
  }

  return (
    <section className="flex w-full flex-col gap-8 rounded-md border border-solid border-neutral-200 bg-neutral-50 p-5">
      <div className="flex flex-col items-start justify-between gap-12">
        <div className="flex flex-col gap-3">
          <Heading size="lg">{content?.title ?? ''}</Heading>
          <Text className="font-semibold text-neutral-500">
            {content?.text ?? ''}
          </Text>
        </div>

        <div className="flex items-center gap-6">
          {content?.options?.map((option) => (
            <ProductCheckbox
              key={option.id}
              content={option}
              addItem={addItem}
              removeItem={removeItem}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full items-center justify-end gap-4 border-t border-solid border-neutral-200 pt-5">
        <Button
          variant="secondary"
          type="button"
          onClick={handleClickOnProceed}
        >
          {content?.btn?.cta ?? ''}
        </Button>
      </div>
    </section>
  )
}

export { SelectProduct }

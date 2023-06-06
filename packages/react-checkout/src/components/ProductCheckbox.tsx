import { checkout } from '@/assets/i18n/pages/checkout'
import { Text } from '../../../react/src/Text'
import { CheckedState, Root, Indicator } from '@radix-ui/react-checkbox'
import { useState } from 'react'
import cs from 'classnames'

interface ProductCheckboxProps {
  addItem: (id: number) => void
  removeItem: (id: number) => void
  content?: (typeof checkout.en.select_product.options)[0]
}

const ProductCheckbox = ({
  addItem,
  removeItem,
  content,
}: ProductCheckboxProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleChangeValue = (checked: CheckedState) => {
    setChecked(!!checked)

    if (checked) {
      addItem(Number(content!.id))
    } else {
      removeItem(Number(content!.id))
    }
  }

  return (
    <form
      className={cs(
        'flex w-40 flex-col gap-0 overflow-hidden rounded-sm bg-neutral-50 p-0 ',
        checked && 'border border-solid border-blue-500 ',
      )}
    >
      <div className="flex flex-col gap-1 bg-neutral-100 p-3 [&>p]:text-neutral-500">
        <div className="flex cursor-pointer items-center gap-2">
          <Root
            id={content?.id ?? ''}
            onCheckedChange={handleChangeValue}
            className={cs(
              'flex h-4 w-4 items-center justify-center rounded-sm border border-solid border-neutral-200 bg-neutral-50 hover:brightness-90',
              checked && 'bg-blue-500',
            )}
          >
            <Indicator className="h-2 w-2 rounded-sm bg-blue-50"></Indicator>
          </Root>
          <Text size="md" htmlFor={content?.id ?? ''} className="font-semibold">
            {content?.title ?? ''}
          </Text>
        </div>

        <div className="flex items-center justify-between gap-1">
          <Text size="sm">{content?.price_label ?? ''}</Text>
          <Text size="sm">{content?.price ?? ''}</Text>
        </div>
      </div>
      <div className="h-[200px] bg-neutral-200">{/* <Image /> */}</div>
    </form>
  )
}

export { ProductCheckbox }

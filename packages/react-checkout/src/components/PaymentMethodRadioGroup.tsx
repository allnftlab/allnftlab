// import { useState } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { checkout } from '@/assets/i18n/pages/checkout'
import { Text } from '../../../react/src/Text'

import { PaymentMethodsEnum } from './ChoosePaymentMethod'

interface ProductCheckboxProps {
  selected: PaymentMethodsEnum
  setSelected: (state: PaymentMethodsEnum) => void
  content?: typeof checkout.en.choose_payment_method.options
}

const PaymentMethodRadioGroup = ({
  selected,
  setSelected,
  content,
}: ProductCheckboxProps) => {
  const handleValueChange = (state: PaymentMethodsEnum) => {
    setSelected(state)
  }

  return (
    <form className="flex w-full rounded-md bg-neutral-50 p-0">
      <RadioGroup.Root
        className="grid w-full grid-cols-2 gap-4"
        defaultValue="pix"
        aria-label="payment method"
        onValueChange={handleValueChange}
      >
        {content?.map((method) => (
          <RadioGroup.Item
            key={method.id}
            value={method.id}
            id={method.id}
            className="box-border flex gap-4 rounded-sm border border-solid border-neutral-200 bg-neutral-100 p-4 hover:bg-neutral-200 [&[data-state='checked']]:bg-neutral-200 [&[data-state='checked']]:shadow-[0px_0px__0px_1px_#7e868c]"
          >
            <div
              className="h-6 w-6 shrink-0 -scale-110 items-center justify-center rounded-sm border border-solid border-neutral-200 bg-neutral-50 [&[data-state='checked']]:border-green-200 [&[data-state='checked']]:shadow-[0px_0px__0px_1px_#7e868c]"
              data-state={selected === method.id ? 'checked' : 'unchecked'}
            >
              <RadioGroup.Indicator className="relative h-2 w-3 -translate-x-[20%] -translate-y-[20%] rotate-45 border-b-2 border-r-2 border-solid border-neutral-500" />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="m-0 whitespace-pre-wrap text-base font-normal leading-normal -tracking-[0.045em] text-slate-100"
                htmlFor={method.id}
              >
                {method.title}
              </label>
              <Text size="sm" className="text-neutral-500">
                {method.text}
              </Text>
            </div>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </form>
  )
}

export { PaymentMethodRadioGroup }

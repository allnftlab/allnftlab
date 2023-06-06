import { ChevronDownIcon } from '@radix-ui/react-icons'
import * as Accordion from '@radix-ui/react-accordion'

import { Button } from '../../../react/src/Button'
import { Heading } from '../../../react/src/Heading'
import { Text } from '../../../react/src/Text'

import { useCheckout } from '@/stores/checkout'

import { Item } from './Item'

interface SummaryProps {
  content?: any
}

const Summary = ({ content }: SummaryProps) => {
  const items = useCheckout((state) => state.items)

  return (
    <section className="w-full rounded-md border border-solid border-neutral-200 bg-neutral-50 p-5">
      <Accordion.Root
        className="flex flex-col p-8"
        type="single"
        defaultValue="summary"
        collapsible
      >
        <Accordion.Item value="summary">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent text-neutral-900 [&[data-state='open']:svg]:rotate-180 [&[data-state='open']:svg]:scale-[3]">
              <Heading size="lg">{content?.title ?? ''}</Heading>
              <Button
                className="!min-w-fit p-4"
                variant="secondary"
                aria-hidden
              >
                <ChevronDownIcon className="scale-[2] transition-[ease] duration-[2s]" />
              </Button>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content>
            <header className="border-b-solid items-end justify-between gap-3 border-b border-neutral-200 px-5 py-3">
              <Text className="font-semibold text-neutral-500" size="sm">
                ITEMS
              </Text>
              <Button size="xs" variant="secondary">
                {content?.btn_clear?.cta ?? ''}
              </Button>
            </header>

            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </div>

            <footer className="flex w-full flex-col justify-end gap-4 pt-5 font-semibold">
              <div className="flex w-full flex-col justify-between gap-2 border-t border-solid border-neutral-200 pt-4">
                <div className="flex w-full items-center justify-between gap-2 border-t border-solid border-neutral-200 pt-4">
                  <Text className="font-semibold text-neutral-500">
                    {content?.subtotal_price_label ?? ''}
                  </Text>
                  <Text className="font-semibold text-neutral-500">$2000</Text>
                </div>
                <div className="flex w-full items-center justify-between gap-2 border-t border-solid border-neutral-200 pt-4">
                  <Text className="font-semibold text-neutral-500">
                    {content?.taxes_price_label ?? ''}
                  </Text>
                  <Text className="font-semibold text-neutral-500">$10</Text>
                </div>
              </div>
              <div className="flex w-full items-center justify-between gap-2 border-t border-solid border-neutral-200 pt-4">
                <Text className="font-semibold text-neutral-500" size="2xl">
                  {content?.total_price_label ?? ''}
                </Text>
                <Text className="font-semibold text-neutral-500" size="2xl">
                  $2010
                </Text>
              </div>
            </footer>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </section>
  )
}

export { Summary }

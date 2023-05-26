import { ChevronDownIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/shared/Button'
import { Flex } from '@/components/shared/Flex'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'

import { useCheckout } from '@/stores/checkout'

import { Item } from './Item'

import {
  Container,
  Header,
  Footer,
  Items,
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from './styles'

interface SummaryProps {
  content?: any
}

const Summary = ({ content }: SummaryProps) => {
  const items = useCheckout((state) => state.items)

  return (
    <Container as="section">
      <AccordionRoot type="single" defaultValue="summary" collapsible>
        <AccordionItem value="summary">
          <AccordionHeader>
            <AccordionTrigger>
              <Heading as="h1" size="lg">
                {content?.title ?? ''}
              </Heading>
              <Button
                variant="secondary"
                css={{ width: 'fit-content' }}
                aria-hidden
              >
                <ChevronDownIcon />
              </Button>
            </AccordionTrigger>
          </AccordionHeader>

          <AccordionContent>
            <Header as="header">
              <Text size="sm">ITEMS</Text>
              <Button size="xs" variant="secondary">
                {content?.btn_clear?.cta ?? ''}
              </Button>
            </Header>

            <Items direction="column">
              {items.map((item) => (
                <Item key={item.id} item={item} />
              ))}
            </Items>

            <Footer as="footer" direction="column">
              <Flex direction="column">
                <Flex>
                  <Text>{content?.subtotal_price_label ?? ''}</Text>
                  <Text>$2000</Text>
                </Flex>
                <Flex>
                  <Text>{content?.taxes_price_label ?? ''}</Text>
                  <Text>$10</Text>
                </Flex>
              </Flex>
              <Flex>
                <Text size="2xl">{content?.total_price_label ?? ''}</Text>
                <Text size="2xl">$2010</Text>
              </Flex>
            </Footer>
          </AccordionContent>
        </AccordionItem>
      </AccordionRoot>
    </Container>
  )
}

export { Summary }

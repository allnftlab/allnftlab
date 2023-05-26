import { Button } from '@/components/shared/Button'
import { Flex } from '@/components/shared/Flex'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'

import { Container, Details, Image, QuantityButton } from './styles'
import { Tooltip } from './Tooltip'
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
    <Container as="article">
      <Flex css={{ alignItems: 'flex-start' }}>
        <Image src="" alt="" height={70} />

        <Details direction="column">
          <Text size="xs">Zico: The Legacy Collection</Text>
          <Heading size="xs">Legend</Heading>
          <Text size="xs">FREE</Text>
        </Details>
      </Flex>

      <Flex>
        <QuantityButton onClick={handleClickOnDecreaseQtd} type="button">
          -
        </QuantityButton>
        <Text>{item?.quantity ?? 0}</Text>
        <QuantityButton onClick={handleClickOnIncreaseQtd} type="button">
          +
        </QuantityButton>

        <Tooltip />
      </Flex>

      <Button size="xs" variant="secondary">
        Remover
      </Button>
    </Container>
  )
}

export { Item }

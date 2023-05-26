import { useState } from 'react'
import axios from 'axios'
import { useAccount, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { BigNumber, ethers } from 'ethers'

import { checkout } from '@/assets/i18n/pages/checkout'
import { Button } from '@/components/Tailwind/Button'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'
import { useCheckout } from '@/stores/checkout'
import { usePix } from '@/stores/pix'

import { log } from '@/utils/log'

import { PaymentMethodRadioGroup } from './PaymentMethodRadioGroup'

import { ABI, CONTRACT_ADDRESS } from '@/assets/contracts/main'

export enum PaymentMethodsEnum {
  CRYPTO = 'crypto',
  PIX = 'pix',
}

interface ChoosePaymentMethodProps {
  content?: typeof checkout.en.choose_payment_method
  onBuyWithPix?: () => void
}

const ChoosePaymentMethod = ({
  content,
  onBuyWithPix = () => {},
}: ChoosePaymentMethodProps) => {
  const { address } = useAccount()
  const items = useCheckout((state) => state.items)

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodsEnum>(
    PaymentMethodsEnum.PIX,
  )

  const [ids, qtds] = items.reduce(
    (acc, entry) => {
      acc[0].push(BigNumber.from(entry.id))
      acc[1].push(BigNumber.from(entry.quantity))

      return acc
    },
    [[] as Array<BigNumber>, [] as Array<BigNumber>],
  )

  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    functionName: 'mintBatch',
    args: [address!, ids, qtds, '0x'],
    overrides: {
      value: ethers.utils.parseEther('0.001'),
    },
  })

  const { writeAsync: mint } = useContractWrite(config)

  const buyWithPix = async () => {
    try {
      const { items, customer } = useCheckout.getState()

      const payload = {
        items,
        customer: {
          ...customer,
          address,
        },
      }

      const { data } = await axios.post<PagarmeTransaction>(
        '/api/pagarme/order',
        payload,
      )

      log(data)

      usePix.setState((state) => ({ ...state, pix: data }))

      onBuyWithPix()
    } catch (error) {
      log(error)
    }
  }

  const buyWithCrypto = async () => {
    if (typeof mint === 'undefined') {
      return
    }

    try {
      const transaction = await mint()

      await transaction.wait()
    } catch (error) {
      log(error)
    }
  }

  const handleClickOnBuyBtn = async () => {
    if (paymentMethod === PaymentMethodsEnum.PIX) {
      await buyWithPix()
    } else if (paymentMethod === PaymentMethodsEnum.CRYPTO) {
      await buyWithCrypto()
    }
  }

  return (
    <section className="flex w-full flex-col gap-8 rounded-md border border-solid border-neutral-200 bg-neutral-50 p-5">
      <div className="flex flex-col gap-6">
        <Heading size="lg">{content?.title ?? ''}</Heading>
        <Text className="font-semibold text-neutral-500">
          {content?.text ?? ''}
        </Text>
      </div>

      <PaymentMethodRadioGroup
        selected={paymentMethod}
        setSelected={setPaymentMethod}
        content={content?.options}
      />

      <div className="w-full justify-end gap-4 border border-solid border-neutral-200 pt-5">
        <Button
          variant="primary"
          className="border-green-200 bg-emerald-300 uppercase text-white hover:!bg-green-300 hover:text-white"
          type="button"
          onClick={handleClickOnBuyBtn}
        >
          {content?.btn?.cta ?? ''}
        </Button>
      </div>
    </section>
  )
}

export { ChoosePaymentMethod }

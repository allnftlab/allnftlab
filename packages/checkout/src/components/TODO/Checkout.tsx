import { GetStaticProps } from 'next'
import { useState } from 'react'

import { i18n } from '@/assets/i18n'

import { SelectProduct } from '../SelectProduct'
import { Summary } from '../Summary'
import { Register } from '../Register'

// Pendência de implementação
import { getCheckoutLayout } from '@/components/layout/Checkout'
import { Meta } from '@/components/shared/Meta'

import { Pix } from '../Pix'
import { ChoosePaymentMethod } from '../ChoosePaymentMethod'

enum StagesEnum {
  SELECT,
  REGISTER,
  CHOOSE_PAYMENT,
  PIX,
}

interface ICheckoutProps {
  content: typeof i18n.en.pages.checkout
}

const metadata = {
  title: '',
  description: '',
  image: '',
}

export default function CheckoutPage({ content }: ICheckoutProps) {
  const [stage, setStage] = useState<StagesEnum>(StagesEnum.SELECT)

  const onSelectEnd = () => {
    setStage(StagesEnum.REGISTER)
  }

  const onRegisterEnd = () => {
    setStage(StagesEnum.CHOOSE_PAYMENT)
  }

  const onBuyWithPix = () => {
    setStage(StagesEnum.PIX)
  }

  return (
    <>
      <Meta {...metadata} />

      <div className="flex flex-col w-full max-w-[920px] p-4 mx-auto gap-8 pt-12 pb-40">
        {/* <Onboarding content={content.onboarding} /> */}
        {stage >= StagesEnum.REGISTER && <Summary content={content.summary} />}

        {stage === StagesEnum.SELECT && (
          <SelectProduct
            content={content.select_product}
            onProceed={onSelectEnd}
          />
        )}

        {stage >= StagesEnum.REGISTER && (
          <Register content={content.register} onRegisterEnd={onRegisterEnd} />
        )}

        {stage === StagesEnum.CHOOSE_PAYMENT && (
          <ChoosePaymentMethod
            content={content.choose_payment_method}
            onBuyWithPix={onBuyWithPix}
          />
        )}

        {stage === StagesEnum.PIX && <Pix />}
      </div>
    </>
  )
}

CheckoutPage.getLayout = getCheckoutLayout

export const getStaticProps: GetStaticProps = (ctx) => {
  // eslint-disable-next-line no-undef
  const locale = ctx.locale as I18n

  const content = i18n[locale].pages.checkout

  return {
    props: { content },
  }
}

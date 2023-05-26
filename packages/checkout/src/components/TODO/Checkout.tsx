import { GetStaticProps } from 'next'
import { useState } from 'react'

import { i18n } from '@/assets/i18n'

import { SelectProduct } from './components/SelectProduct'
import { Summary } from './components/Summary'
import { Register } from './components/Register'
import { getCheckoutLayout } from '@/components/layout/Checkout'
import { Meta } from '@/components/shared/Meta'

import { Container } from './styles'
import { Pix } from './Tailwind/Pix'
import { ChoosePaymentMethod } from './Tailwind/ChoosePaymentMethod'

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

      <Container direction="column">
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
      </Container>
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

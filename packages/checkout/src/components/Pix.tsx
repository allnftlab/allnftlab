import { CheckIcon, CopyIcon, Cross2Icon } from '@radix-ui/react-icons'

import { Button } from '@/components/Tailwind/Button'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'
import { Spinner } from './Spinner'

import { usePix } from '@/stores/pix'
import { useMemo } from 'react'
import { priceFormatter } from '@/utils/formatPrice'
import Image from 'next/image'

interface PixProps {
  status?: 'pending' | 'success' | 'fail'
}

const Pix = ({ status = 'pending' }: PixProps) => {
  const { qr_code, qr_code_url, expires_at, amount } = usePix(
    (state) => state.pix,
  )

  const handleClickOnPixCopiaECola = () => {
    navigator.clipboard.writeText(qr_code)
  }

  const remainingTime = useMemo(() => {
    const expirationDate = new Date(expires_at)
    const currentDate = new Date()

    const secondsRemaining = Math.floor(
      (expirationDate.getTime() - currentDate.getTime()) / 1000,
    )

    const minutes = String(Math.floor(secondsRemaining / 60))
    const seconds = String(secondsRemaining % 60)

    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
  }, [expires_at])

  const total = priceFormatter.format(amount / 100)

  return (
    <section className="flex flex-col items-center gap-12 rounded-md border border-solid border-neutral-200 bg-neutral-50 p-6">
      <header className="flex items-center gap-6">
        {status === 'pending' && <Spinner />}
        {status === 'fail' && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-700">
            <Cross2Icon className="h-6 w-6 stroke-[4px]" />
          </div>
        )}
        {status === 'success' && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-200">
            <CheckIcon className="h-6 w-6 stroke-[4px]" />
          </div>
        )}
        <Heading>Aguardando pagamento</Heading>
      </header>

      <div className="border-neutral-neutral-200 flex w-full flex-col items-center gap-4 rounded-md border border-solid bg-neutral-100 p-6">
        <Heading size="xs">QR Code valido por</Heading>
        <Text size="4xl" className="font-semibold">
          {remainingTime}
        </Text>

        <Image
          src={qr_code_url}
          alt="QR code"
          className="h-[263px] w-[270px] rounded-sm bg-neutral-500 object-contain p-4"
        />

        <Text size="2xl">Valor: {total}</Text>

        <div
          className="mt-4 flex flex-col gap-3"
          onClick={handleClickOnPixCopiaECola}
        >
          <Text className="font-semibold">Pix copia e cola</Text>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="secondary"
              className="min-w-fit p-4"
              onClick={handleClickOnPixCopiaECola}
            >
              <CopyIcon className="h-5 w-5" />
            </Button>

            <Text className="line-clamp-2 max-h-[4ch] max-w-[20ch] text-ellipsis font-semibold text-neutral-500">
              {qr_code ?? ''}
            </Text>
          </div>
        </div>
      </div>

      <footer className="flex flex-col items-center gap-6">
        <Heading size="xs">
          Pagar com pix e rapido e seguro! E so seguir estes passos:
        </Heading>

        <ol className="flex flex-col gap-2">
          <li>
            <Text className="max-w-[40ch]">
              Abra o aplicativo ou Internet Banking paga pagar
            </Text>
          </li>
          <li>
            <Text className="max-w-[40ch]">
              Na opcao Pix, escolha “Ler QR Code”{' '}
            </Text>
          </li>
          <li>
            <Text className="max-w-[40ch]">
              Leia o QR Code ou, se preferir, copie o codigo para pix copia e
              cola
            </Text>
          </li>
          <li>
            <Text className="max-w-[40ch]">
              Revise as informacoes e confirme o pagamento.
            </Text>
          </li>
        </ol>
      </footer>
    </section>
  )
}

export { Pix }

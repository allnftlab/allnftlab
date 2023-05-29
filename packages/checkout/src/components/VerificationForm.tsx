import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../../react/src/Button'
import { Heading } from '../../../react/src/Heading'
import { Text } from '../../../react/src/Text'
import { Input } from '../../../react/src/Input'
import { InputError } from '../../../react/src/InputError'

import { log } from '@/utils/log'

const VerificationFormValuesSchema = z.object({
  confirmation_code: z.string().length(6),
})

type VerificationFormValues = z.infer<typeof VerificationFormValuesSchema>

interface VerificationProps {
  content?: any
  onSubmit: () => void
  onGoBack: () => void
}

const VerificationForm = ({
  content,
  onSubmit,
  onGoBack,
}: VerificationProps) => {
  const { inputs } = content

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<VerificationFormValues>({
    resolver: zodResolver(VerificationFormValuesSchema),
  })

  const verifyUser = (data: VerificationFormValues) => {
    log(data)
    try {
      onSubmit()
    } catch (err) {
      log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit(verifyUser)}>
      <div className="items-start gap-12 flex">
        <header className="flex flex-col w-[35%] gap-3">
          <Heading size="lg">{content?.title ?? ''}</Heading>

          <Text className="text-neutral-500 leading-loose font-semibold">
            {content?.text ?? ''}
          </Text>
          <Text className="text-neutral-500 leading-loose">
            {content?.annotation ?? ''}
          </Text>
        </header>

        <div className="flex-1 flex flex-col gap-2 w-full">
          <div className="flex !flex-col !items-start gap-1 text-neutral-500 [&>*]:!w-[calc(100%-2rem)]">
            <Text size="sm" as="label" htmlFor={inputs.confirmation_code.name}>
              {inputs.confirmation_code.label}
            </Text>
            <Input
              {...register(inputs.confirmation_code.name)}
              id={inputs.confirmation_code.name}
              status={errors.confirmation_code ? 'error' : 'default'}
            />
            {errors.confirmation_code && (
              <InputError as="span" size="xs">
                {errors.confirmation_code.message}
              </InputError>
            )}
          </div>
        </div>
      </div>

      <footer className="w-full pt-5 gap-4 justify-end border-t border-solid border-neutral-200">
        <Button
          type="button"
          onClick={onGoBack}
          variant="tertiary"
          disabled={isSubmitting}
        >
          {content?.btn_back?.cta ?? ''}
        </Button>
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="relative w-2 h-2 rounded-[50%] bg-white shadow-[16px_0_#fff,_-16px_0_#fff] animate-[flash_0.5s_ease-out_infinite_alternate]" />
          ) : (
            content?.btn_proceed?.cta ?? ''
          )}
        </Button>
      </footer>
    </form>
  )
}

export { VerificationForm }

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
      <div className="flex items-start gap-12">
        <header className="flex w-[35%] flex-col gap-3">
          <Heading size="lg">{content?.title ?? ''}</Heading>

          <Text className="font-semibold leading-loose text-neutral-500">
            {content?.text ?? ''}
          </Text>
          <Text className="leading-loose text-neutral-500">
            {content?.annotation ?? ''}
          </Text>
        </header>

        <div className="flex w-full flex-1 flex-col gap-2">
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
              <InputError>{errors.confirmation_code.message}</InputError>
            )}
          </div>
        </div>
      </div>

      <footer className="w-full justify-end gap-4 border-t border-solid border-neutral-200 pt-5">
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
            <span className="relative h-2 w-2 animate-[flash_0.5s_ease-out_infinite_alternate] rounded-[50%] bg-white shadow-[16px_0_#fff,_-16px_0_#fff]" />
          ) : (
            content?.btn_proceed?.cta ?? ''
          )}
        </Button>
      </footer>
    </form>
  )
}

export { VerificationForm }

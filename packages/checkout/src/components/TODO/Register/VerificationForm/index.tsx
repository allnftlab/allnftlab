import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '../../../react/src/Button'
import { Heading } from '../../../react/src/Heading'
import { Text } from '../../../react/src/Text'
import { Flex } from '@/components/shared/Flex'
import { Input } from '../../../react/src/Input'

import { Header, Form, InputBlock, Footer } from './styles'
import { log } from '@/utils/log'
import { Loader } from '@/pages/teaser/components/NewsletterForm/styles'
import { InputError } from '../../../react/src/InputError'

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
      <Flex css={{ alignItems: 'flex-start', gap: '$12' }}>
        <Header direction="column">
          <Heading as="h1" size="lg">
            {content?.title ?? ''}
          </Heading>

          <Text>{content?.text ?? ''}</Text>
          <Text>{content?.annotation ?? ''}</Text>
        </Header>

        <Form as="div">
          <InputBlock>
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
          </InputBlock>
        </Form>
      </Flex>

      <Footer>
        <Button
          type="button"
          onClick={onGoBack}
          variant="tertiary"
          disabled={isSubmitting}
        >
          {content?.btn_back?.cta ?? ''}
        </Button>
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : content?.btn_proceed?.cta ?? ''}
        </Button>
      </Footer>
    </form>
  )
}

export { VerificationForm }

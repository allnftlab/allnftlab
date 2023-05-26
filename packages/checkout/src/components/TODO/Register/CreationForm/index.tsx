/* eslint-disable no-unused-vars */
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/shared/Button'
import { Heading } from '@/components/shared/Heading'
import { Text } from '@/components/shared/Text'
import { Flex } from '@/components/shared/Flex'
import { Input } from '@/components/shared/Input'

import { Header, Form, InputBlock, Footer } from './styles'
import { log } from '@/utils/log'
import { useCheckout } from '@/stores/checkout'
import { Loader } from '@/pages/teaser/components/NewsletterForm/styles'
import { InputError } from '@/components/shared/InputError'

const creationFormValuesSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(8),
  country: z.string().min(2),
  tax_id: z.string(),
  address: z.string(),
  zip_code: z.string(),
})

type CreationFormValues = z.infer<typeof creationFormValuesSchema>

interface CreationProps {
  content?: any
  onSubmit: () => void
}

const CreationForm = ({ content, onSubmit }: CreationProps) => {
  const { inputs } = content

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<CreationFormValues>({
    resolver: zodResolver(creationFormValuesSchema),
  })

  const createUser = (data: CreationFormValues) => {
    log(data)
    try {
      const customer = {
        name: data.name,
        email: data.email,
        document: data.tax_id,
        country: data.country,
        phone: data.phone,
      }

      onSubmit()

      useCheckout.setState((state) => ({ ...state, customer }))
    } catch (err) {
      log(err)
    }
  }

  console.log(errors)

  return (
    <form onSubmit={handleSubmit(createUser)}>
      <Flex css={{ alignItems: 'flex-start', gap: '$12' }}>
        <Header direction="column">
          <Heading as="h1" size="lg">
            {content?.title ?? ''}
          </Heading>

          <Text>{content?.text ?? ''}</Text>
          <Text>{content?.annotation ?? ''}</Text>
        </Header>

        <Form as="div">
          <Flex>
            <InputBlock>
              <Text size="sm" as="label" htmlFor={inputs.name.name}>
                {inputs.name.label}
              </Text>
              <Input
                {...register(inputs.name.name)}
                id={inputs.name.name}
                status={errors.name ? 'error' : 'default'}
              />
              {errors.name && (
                <InputError as="span" size="xs">
                  {errors.name.message}
                </InputError>
              )}
            </InputBlock>
            <InputBlock>
              <Text size="sm" as="label" htmlFor={inputs.phone.name}>
                {inputs.phone.label}
              </Text>
              <Input
                {...register(inputs.phone.name)}
                id={inputs.phone.name}
                status={errors.phone ? 'error' : 'default'}
              />
              {errors.phone && (
                <InputError as="span" size="xs">
                  {errors.phone.message}
                </InputError>
              )}
            </InputBlock>
          </Flex>

          <InputBlock>
            <Text size="sm" as="label" htmlFor={inputs.email.name}>
              {inputs.email.label}
            </Text>
            <Input
              {...register(inputs.email.name)}
              id={inputs.email.name}
              status={errors.email ? 'error' : 'default'}
            />
            {errors.email && (
              <InputError as="span" size="xs">
                {errors.email.message}
              </InputError>
            )}
          </InputBlock>
          <Flex>
            <InputBlock>
              <Text size="sm" as="label" htmlFor={inputs.country.name}>
                {inputs.country.label}
              </Text>
              <Input
                {...register(inputs.country.name)}
                id={inputs.country.name}
                status={errors.country ? 'error' : 'default'}
              />
              {errors.country && (
                <InputError as="span" size="xs">
                  {errors.country.message}
                </InputError>
              )}
            </InputBlock>

            <InputBlock>
              <Text size="sm" as="label" htmlFor={inputs.tax_id.name}>
                {inputs.tax_id.label}
              </Text>
              <Input
                {...register(inputs.tax_id.name)}
                id={inputs.tax_id.name}
                status={errors.tax_id ? 'error' : 'default'}
              />
              {errors.tax_id && (
                <InputError as="span" size="xs">
                  {errors.tax_id.message}
                </InputError>
              )}
            </InputBlock>
          </Flex>
          <Flex>
            <InputBlock>
              <Text size="sm" as="label" htmlFor={inputs.address.name}>
                {inputs.address.label}
              </Text>
              <Input
                {...register(inputs.address.name)}
                id={inputs.address.name}
                status={errors.address ? 'error' : 'default'}
              />
              {errors.address && (
                <InputError as="span" size="xs">
                  {errors.address.message}
                </InputError>
              )}
            </InputBlock>
            <InputBlock>
              <Text size="sm" as="label" htmlFor={inputs.zip_code.name}>
                {inputs.zip_code.label}
              </Text>
              <Input
                {...register(inputs.zip_code.name)}
                id={inputs.zip_code.name}
                status={errors.zip_code ? 'error' : 'default'}
              />
              {errors.zip_code && (
                <InputError as="span" size="xs">
                  {' '}
                  {errors.zip_code.message}
                </InputError>
              )}
            </InputBlock>
          </Flex>
        </Form>
      </Flex>

      <Footer>
        <Button type="submit" variant="secondary" disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : content?.btn_proceed?.cta ?? ''}
        </Button>
      </Footer>
    </form>
  )
}

export { CreationForm }

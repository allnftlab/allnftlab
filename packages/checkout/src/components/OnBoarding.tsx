import { Button } from '../../../react/src/Button'
import { Heading } from '../../../react/src/Heading'
import { Text } from '../../../react/src/Text'

interface OnboardingProps {
  content?: any
}

const Onboarding = ({ content }: OnboardingProps) => {
  return (
    <section className="flex w-full flex-col gap-8 rounded-md border border-solid border-neutral-200 bg-neutral-50 p-5">
      <header className="flex flex-col items-center gap-3">
        <Heading size="lg">{content?.title ?? ''}</Heading>
        <Text className="font-semibold text-neutral-500">
          {content?.text ?? ''}
        </Text>
      </header>

      <footer className="w-full justify-end gap-4 border-t border-solid border-neutral-200 pt-5">
        <Button variant="secondary">{content?.btn_deny?.cta ?? ''}</Button>
        <Button variant="secondary">{content?.btn_approve?.cta ?? ''}</Button>
      </footer>
    </section>
  )
}

export { Onboarding }

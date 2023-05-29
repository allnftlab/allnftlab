import { useState } from 'react'

import { CreationForm } from './CreationForm'
import { VerificationForm } from './VerificationForm'

enum RegistrationStep {
  CREATION,
  VERIFICATION,
}

interface RegisterProps {
  content?: any
  onRegisterEnd?: () => void
}

const Register = ({ content, onRegisterEnd = () => {} }: RegisterProps) => {
  const [step, setStep] = useState(RegistrationStep.CREATION)

  const onSubmitCreationForm = () => {
    setStep(RegistrationStep.VERIFICATION)
  }

  const onGoBack = () => {
    setStep(RegistrationStep.CREATION)
  }

  const onSubmitConfirmationForm = () => {
    onRegisterEnd()
  }

  return (
    <section className="w-full rounded-md border border-solid border-neutral-200 bg-neutral-50 p-5">
      {step === RegistrationStep.CREATION && (
        <CreationForm
          content={content.creation}
          onSubmit={onSubmitCreationForm}
        />
      )}
      {step === RegistrationStep.VERIFICATION && (
        <VerificationForm
          content={content.verification}
          onSubmit={onSubmitConfirmationForm}
          onGoBack={onGoBack}
        />
      )}
    </section>
  )
}

export { Register }

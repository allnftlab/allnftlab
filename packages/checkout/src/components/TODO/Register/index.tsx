import { useState } from 'react'

import { Container } from './styles'
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
    <Container as="section">
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
    </Container>
  )
}

export { Register }

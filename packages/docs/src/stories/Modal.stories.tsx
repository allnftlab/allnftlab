import type { StoryObj, Meta } from '@storybook/react'
import {
  OnboardingModal,
  OnboardingModalProps,
} from '@allnftlab-ui/onboarding-modal'

export default {
  title: 'OnboardingModal',
  component: OnboardingModal,
} as Meta<OnboardingModalProps>

export const Dark: StoryObj<OnboardingModalProps> = {}

export const Light: StoryObj<OnboardingModalProps> = {}

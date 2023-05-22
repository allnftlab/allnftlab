import { cva } from 'class-variance-authority'

export const Colors = cva('colors', {
  variants: {
    tailwindNeutral: {
      neutral50: 'rgb(250, 250, 250)',
      neutral100: 'rgb(245, 245, 245)',
      neutral200: 'rgb(229, 229, 229)',
      neutral300: 'rgb(212, 212, 212)',
      neutral400: 'rgb(163, 163, 163)',
      neutral500: 'rgb(115, 115, 115)',
      neutral600: 'rgb(82, 82, 82)',
      neutral700: 'rgb(64, 64, 64)',
      neutral800: 'rgb(38, 38, 38)',
      neutral900: 'rgb(23, 23, 23)',
      neutral950: 'rgb(10, 10, 10)',
    },
    radixSlate: {
      slate1: ['rgb(251, 252, 253)', 'neutral-50'],

      slate2: ['rgb(248, 249, 250)', 'neutral-100'],
      slate3: ['rgb(241, 243, 245)', 'neutral-100'],

      slate4: ['rgb(236, 238, 240)', 'neutral-200'],
      slate5: ['rgb(230, 232, 235)', 'neutral-200'],
      slate6: ['rgb(223, 227, 230)', 'neutral-200'],

      slate7: ['rgb(215, 219, 223)', 'neutral-300'],
      slate8: ['rgb(193, 200, 205)', 'neutral-300'],

      slate9: ['rgb(136, 144, 150)', 'neutral-400'],

      slate10: ['rgb(126, 134, 140)', 'neutral-500'],
      slate11: ['rgb(104, 112, 118)', 'neutral-500'],

      slate12: ['rgb(17, 24, 28)', 'neutral-900'],
    },
  },
})

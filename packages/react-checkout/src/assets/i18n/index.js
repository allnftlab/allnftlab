import { teaser } from './pages/teaser'
import { not_found } from './pages/not-found'
import { privacy } from './pages/privacy'
import { terms } from './pages/terms'
import { checkout } from './pages/checkout'
import { toasts } from './shared/toasts'
import { order } from './pages/order'

export const i18n = {
  en: {
    shared: {
      header: {
        nav: [
          // {
          //   title: 'Zico',
          //   href: '/',
          // },
          // {
          //   title: 'FAQ',
          //   href: '/faq',
          // },
          // {
          //   title: 'Benefits',
          //   href: '/#benefits',
          // },
        ],
        social: [
          {
            title: 'Instagram',
            href: 'https://www.instagram.com/zico/',
          },
        ],
        btn: null,
        // {
        //   cta: 'Fique por dentro',
        //   href: '',
        // },
      },
      footer: {
        owner: '© 2022 por Zico & allnft{lab}.',
        legal: [
          {
            title: 'Privacy',
            href: '/legal/privacy',
          },
          {
            title: 'Terms',
            href: '/legal/terms',
          },
          {
            title: 'Contact us',
            href: 'mailto:contato@allnftlab.com',
          },
        ],
        social: [
          {
            title: 'Instagram',
            href: 'https://www.instagram.com/zico/',
          },
        ],
      },
      releaseDialog: {
        title: 'Stay tuned',
        text: 'Sign up for our mailing list to be notified when the project is released',
        input: {
          label: 'Email*',
          placeholder: 'Type your email...',
          error: 'Invalid email',
        },
        disclaimer:
          'By clicking keep updated below, you agree to the processing of your personal information by allnft{lab} as described in the Privacy Policy.',
        form_disclaimer: '*Required fields',
        back_btn: {
          cta: 'No, thanks',
          href: '',
        },
        submit_btn: {
          cta: 'Keep updated',
          href: '',
        },
      },
      action: {
        title: 'Get Closer to Your Idol',
        btn: {
          cta: 'Stay tuned',
          href: '',
        },
        annotation: 'You can pay it with crypto, credit cards or pix',
        social_btn: {
          title: 'GET INTO THE OFFICIAL CHANNELS',
          btn: {
            cta: 'ENTER',
            href: '',
          },
        },
      },
      toasts: toasts.en,
    },
    pages: {
      landing_page: {
        hero: {
          title: 'Zico 70th Anniversary!',
          text: "Connect with Quintino's star in a new way. Purchase Zico's digital collectibles and enjoy exclusive benefits alongside Camisa 10.",
          btn: {
            cta: 'Stay tuned',
            href: '',
          },
          annotation: 'You can pay it with crypto, credit cards or pix',
          social_btn: {
            title: 'GET INTO THE OFFICIAL CHANNELS',
            btn: {
              cta: 'ENTER',
              href: '',
            },
          },
        },
        clipping: {
          enabled: false,
          items: [
            {
              title: '',
              text: '',
            },
          ],
        },
        project: {
          title: 'The Project',
          text: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
          products: [
            {
              title: 'NFT A',
              text: 'This is NFT A',
              tier: 'Tier 1',
              price: 'GRATUITO',
            },
            {
              title: 'NFT B',
              text: 'This is NFT B',
              tier: 'Tier 2',
              price: '$200',
            },
            {
              title: 'NFT C',
              text: 'This is NFT C',
              tier: 'Tier 3',
              price: '$1000',
            },
          ],
          disclaimer:
            '* To claim your free NFT you will need to pay for the transaction fee. You can get only one per wallet account.',
        },
        benefits: {
          title: 'Benefits',
          text: 'This is your last opportunity to get this close to your idol',
          items: {
            'tier-1': [
              {
                icon: 'message',
                title: 'Custom Message',
                text: 'You will get a custom message from Zico.',
              },
            ],
            'tier-2': [
              {
                icon: 'meeting',
                title: 'Exclusive Meeting',
                text: 'You will meet Zico face to face.',
              },
            ],
            'tier-3': [
              {
                icon: 'star',
                title: 'Stars Game',
                text: 'You will watch the game in the stadium.',
              },
            ],
          },
          annotation: 'Click to see the benefits included in each tier',
        },
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            title: 'O que são NFTs?',
            text: 'Um Token Não Fungível (NFT), é um ativo único que estabelece a propriedade sobre um bem digital. Um vídeo, uma música, uma imagem, uma experiência no mundo real, um terreno virtual… qualquer representação digital de algo, pode ser listado, colecionado e comercializado em uma Blockchain como um NFT. Os NFTs deste projeto são chamados XXXX.',
          },
          {
            title: 'O que é Blockchain?',
            text: 'Blockchain é tecnologia utilizada para documentar ações e transações realizadas em uma rede. Ela tem esse nome por organizar seus dados em uma cadeia de blocos. Os XXXX estão listados na blockchain Ethereum, por isso cada ação ou transação utiliza a criptomoeda ETH. O que torna esse “livro de registro virtual” tão incrível é a segurança que a cadeia de blocos oferece. Uma fez que inscrita na rede, uma ação não pode ser desfeita, apagada ou escondida - e cada novo bloco repete os dados do anterior antes de adicionar outros.',
          },
          {
            title: 'O que é uma carteira Metamask?',
            text: 'Metamask é uma carteira digital que possibilita comprar criptomoedas e guardar fundos e NFTs. Além disso, ela é utilizada como validação da sua presença virtual, substituindo o cadastro por e-mail em determinadas plataformas.',
          },
          {
            title: 'Como participar da nossa comunidade?',
            text: 'Nossa comunidade acontece no Discord, uma plataforma gratuita de conversação através de texto, vídeo ou voz. Ela permite a criação de grupos (comunidades) personalizados e divididos em salas. Essa plataforma se destaca pelas automações e por seu compromisso com a segurança dos dados de seus usuários. Clique aqui e junte-se a essa comunidade',
          },
          {
            title: 'O que e a Colecao?',
            text: '',
          },
          {
            title: 'O que e um Token?',
            text: '',
          },
          {
            title: 'Por que colecionar um Token',
            text: '',
          },
          {
            title: 'Como colecionar um Token',
            text: '',
          },
          {
            title: 'Como visualizar meu Token',
            text: '',
          },
        ],
      },
      teaser: teaser.en,
      not_found: not_found.en,
      privacy: privacy.en,
      terms: terms.en,
      checkout: checkout.en,
      order: order.en,
    },
  },
  'pt-br': {
    shared: {
      header: {
        nav: [
          // {
          //   title: 'Zico',
          //   href: '/',
          // },
          // {
          //   title: 'FAQ',
          //   href: '/faq',
          // },
          // {
          //   title: 'Beneficios',
          //   href: '/#benefits',
          // },
        ],
        social: [
          {
            title: 'Instagram',
            href: 'https://www.instagram.com/zico/',
          },
        ],
        btn: null,
        // {
        //   cta: 'Fique por dentro',
        //   href: '',
        // },
      },
      footer: {
        owner: '© 2022 por Zico & allnft{lab}.',
        legal: [
          {
            title: 'Privacidade',
            href: '/legal/privacy',
          },
          {
            title: 'Termos',
            href: '/legal/terms',
          },
          {
            title: 'Contate-nos',
            href: 'mailto:contato@allnftlab.com',
          },
        ],
        social: [
          {
            title: 'Instagram',
            href: 'https://www.instagram.com/zico/',
          },
        ],
      },
      releaseDialog: {
        title: 'Fique por dentro',
        text: 'Se inscreva na nossa lista de para que você seja notificado quando o projeto for lancado',
        input: {
          label: 'E-mail',
          placeholder: 'Digite seu email...',
          error: 'Email invalido',
        },
        disclaimer:
          'Clicando em ficar atualizado abaixo, você concordo com o processamento de seus dados pessoais realizado pela allnft{lab}, como descrito na Politica de Privacidade',
        form_disclaimer: '',
        back_btn: {
          cta: 'Nao, obrigado',
          href: '',
        },
        submit_btn: {
          cta: 'Ficar atualizado',
          href: '',
        },
      },
      action: {
        title: 'Esteja mais proximo do seu idolo',
        btn: {
          cta: 'Ficar por dentro',
          href: '',
        },
        annotation: 'Você podera pagar com crypto, cartao de credito ou pix',
        social_btn: {
          title: 'Entre nos canais oficiais ',
          btn: {
            cta: 'Entrar',
            href: '',
          },
        },
      },
      toasts: toasts['pt-br'],
    },
    pages: {
      landing_page: {
        hero: {
          title: 'Colecione os NFTs do Zico!',
          text: 'Conecte-se com o craque de Quintino de uma nova forma. Adiquira os colecionáveis digitais do Zico e aproveite benefícios exclusivos ao lado do Camisa 10.',
          btn: {
            cta: 'Fique por dentro',
            href: '',
          },
          annotation: 'Você podera pagar com crypto, cartao de credito ou pix',
          social_btn: {
            title: 'Entre nos canais oficiais ',
            btn: {
              cta: 'Entrar',
              href: '',
            },
          },
        },
        clipping: {
          enabled: false,
          items: [
            {
              title: '',
              text: '',
            },
          ],
        },
        project: {
          title: 'O Projeto',
          text: 'No ano que completa 70 anos, a lenda do futebol decide conectar-se com seu público em um novo nível. No passado, Zico saudava sua torcida a cada jogo comemorando seus gols, correndo pelo gramado com os braços erguidos festejando com os nação.\n\nHoje, como comunicador, o eterno Galinho de Quintino compartilha momentos históricos da sua carreira e parte do seu dia-a-dia nas redes sociais, sem perder contato com aqueles que sempre o acompanharam.\n\nAgora, com a “xxx collection”, a coleção oficial de NFTs do Camisa 10, você pode estar mais próximo do Zico que nunca antes. Colecionar um desses ativos digitais te permitirá aproveitar benefícios únicos, e viver experiências inesquecíveis.',
          products: [
            {
              title: 'NFT A',
              text: 'Essa e a NFT A',
              tier: 'Nivel 1',
              price: 'GRATUITO',
            },
            {
              title: 'NFT B',
              text: 'Essa e a NFT B',
              tier: 'Nivel 2',
              price: '$200',
            },
            {
              title: 'NFT C',
              text: 'Essa e a NFT C',
              tier: 'Nivel 3',
              price: '$1000',
            },
          ],
          disclaimer:
            'Para obter a NFT gratuita você deve pagar pela taxa de transacao. Você pode obter apenas duas por carteira.',
        },
        benefits: {
          title: 'Beneficios',
          text: 'Obtendo a NFT você pode viver experiências unicas.',
          items: {
            'tier-1': [
              {
                icon: 'message',
                title: 'Mensagem Personalizada',
                text: '',
              },
            ],
            'tier-2': [
              {
                icon: 'meeting',
                title: 'Encontro Exclusivo',
                text: 'Você podera encontrar o Zico cara a cara.',
              },
            ],
            'tier-3': [
              {
                icon: 'star',
                title: 'Jogo das Estrelas',
                text: '',
              },
            ],
          },
          annotation: 'Clique em nivel para ver os beneficios inclusos',
        },
      },
      faq: {
        title: 'FAQ',
        items: [
          {
            title: 'O que são NFTs?',
            text: 'Um Token Não Fungível (NFT), é um ativo único que estabelece a propriedade sobre um bem digital. Um vídeo, uma música, uma imagem, uma experiência no mundo real, um terreno virtual… qualquer representação digital de algo, pode ser listado, colecionado e comercializado em uma Blockchain como um NFT. Os NFTs deste projeto são chamados XXXX.',
          },
          {
            title: 'O que é Blockchain?',
            text: 'Blockchain é tecnologia utilizada para documentar ações e transações realizadas em uma rede. Ela tem esse nome por organizar seus dados em uma cadeia de blocos. Os XXXX estão listados na blockchain Ethereum, por isso cada ação ou transação utiliza a criptomoeda ETH. O que torna esse “livro de registro virtual” tão incrível é a segurança que a cadeia de blocos oferece. Uma fez que inscrita na rede, uma ação não pode ser desfeita, apagada ou escondida - e cada novo bloco repete os dados do anterior antes de adicionar outros.',
          },
          {
            title: 'O que é uma carteira Metamask?',
            text: 'Metamask é uma carteira digital que possibilita comprar criptomoedas e guardar fundos e NFTs. Além disso, ela é utilizada como validação da sua presença virtual, substituindo o cadastro por e-mail em determinadas plataformas.',
          },
          {
            title: 'Como participar da nossa comunidade?',
            text: 'Nossa comunidade acontece no Discord, uma plataforma gratuita de conversação através de texto, vídeo ou voz. Ela permite a criação de grupos (comunidades) personalizados e divididos em salas. Essa plataforma se destaca pelas automações e por seu compromisso com a segurança dos dados de seus usuários. Clique aqui e junte-se a essa comunidade',
          },
          {
            title: 'O que e a Colecao?',
            text: '',
          },
          {
            title: 'O que e um Token?',
            text: '',
          },
          {
            title: 'Por que colecionar um Token',
            text: '',
          },
          {
            title: 'Como colecionar um Token',
            text: '',
          },
          {
            title: 'Como visualizar meu Token',
            text: '',
          },
        ],
      },
      teaser: teaser['pt-br'],
      not_found: not_found['pt-br'],
      privacy: privacy['pt-br'],
      terms: terms['pt-br'],
      checkout: checkout['pt-br'],
      order: order['pt-br'],
    },
  },
}

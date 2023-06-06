export const checkout = {
  en: {
    onboarding: {
      title: 'Iniciar compra',
      text: 'Vamos iniciar o processo de compra. Você tem uma carteira crypto?',
      btn_deny: {
        cta: 'Nao tenho carteira de crypto',
      },
      btn_approve: {
        cta: 'Sim, tenho carteira de crypto',
      },
    },
    select_product: {
      title: 'Escolha seu Colecionavel',
      text: 'Escolha o seu NFT favorito. Você pode selecionar um ou mais.',
      btn: {
        cta: 'Prosseguir',
      },
      options: [
        {
          id: 0,
          title: 'Legend',
          price_label: 'Price',
          price: 0,
        },
        {
          id: 1,
          title: 'Celebration',
          price_label: 'Price',
          price: 100,
        },
        {
          id: 2,
          title: 'Escorpion',
          price_label: 'Price',
          price: 1000,
        },
      ],
    },
    summary: {
      title: 'Resumo da Compra',
      btn_clear: {
        cta: 'Limpar',
      },
      btn_remove: {
        cta: 'Remover',
      },
      subtotal_price_label: 'Subtotal',
      taxes_price_label: 'Taxes (Ethrereum)',
      total_price_label: 'Total',
      disclaimer: 'You can only get 2 of this NFT',
    },
    register: {
      creation: {
        title: 'Registrar conta',
        text: 'Preencha o formulario para registrar sua conta',
        annotation:
          'Atenção, se o seu e-mail estiver incorreto não será possível atualizá-lo após o envio do formulário. Inserir o e-mail correto é um processo crucial, reserve um tempo para verificar antes de enviar o formulário.',
        inputs: {
          name: {
            name: 'name',
            label: 'Nome completo',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          phone: {
            name: 'phone',
            label: 'Telefone',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          email: {
            name: 'email',
            label: 'Endereco de email',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          country: {
            name: 'country',
            label: 'Pais',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          tax_id: {
            name: 'tax_id',
            label: 'CPF',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          address: {
            name: 'address',
            label: 'Endereco completo',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          zip_code: {
            name: 'zip_code',
            label: 'CEP',
            required: true,
            err_message: 'Campo obrigatorio',
          },
        },
        btn_proceed: {
          cta: 'Registrar',
        },
      },
      verification: {
        title: 'Registrar conta',
        text: 'Confirme seu e-mail',
        annotation:
          'Enviamos um código de verificação para o e-mail usado na etapa anterior. Se você não recebeu o código, aguarde alguns segundos e verifique se o e-mail está na caixa de spam.',
        inputs: {
          confirmation_code: {
            name: 'confirmation_code',
            label: 'Codigo de verificacao',
            required: true,
            err_message: 'Campo obrigatorio',
          },
        },
        btn_back: {
          cta: 'Voltar',
        },
        btn_proceed: {
          cta: 'Confirmar',
        },
      },
    },
    choose_payment_method: {
      title: 'Escolha seu Colecionavel',
      text: 'Escolha o seu NFT favorito. Você pode selecionar um ou mais.',
      btn: {
        cta: 'Prosseguir',
      },
      options: [
        {
          id: 'pix',
          title: 'PIX',
          text: 'The payment will be realized in ths Stripe checkout, when you click buy now you will be redirect to the Stripe checkout page. After the payment succeeded your NFT will be sended to you, it could take a few minutes.',
        },
        {
          id: 'crypto',
          title: 'Crypto (Ethereum)',
          text: '',
        },
      ],
    },
  },
  'pt-br': {
    onboarding: {
      title: 'Iniciar compra',
      text: 'Vamos iniciar o processo de compra. Você tem uma carteira crypto?',
      btn_deny: {
        cta: 'Nao tenho carteira de crypto',
      },
      btn_approve: {
        cta: 'Sim, tenho carteira de crypto',
      },
    },
    select_product: {
      title: 'Escolha seu colecionavel',
      text: 'Escolha o seu NFT favorito. Você pode selecionar um ou mais.',
      btn: {
        cta: 'Prosseguir',
      },
      options: [
        {
          id: 0,
          title: 'Legend',
          price_label: 'Preco',
          price: 0,
        },
        {
          id: 1,
          title: 'Celebration',
          price_label: 'Preco',
          price: 100,
        },
        {
          id: 2,
          title: 'Escorpion',
          price_label: 'Preco',
          price: 1000,
        },
      ],
    },
    summary: {
      title: 'Resumo da Compra',
      btn_clear: {
        cta: 'Limpar',
      },
      btn_remove: {
        cta: 'Remover',
      },
      subtotal_price_label: 'Subtotal',
      taxes_price_label: 'Taxes (Ethrereum)',
      total_price_label: 'Total',
      disclaimer: 'You can only get 2 of this NFT',
    },
    register: {
      creation: {
        title: 'Registrar conta',
        text: 'Preencha o formulario para registrar sua conta',
        annotation:
          'Atenção, se o seu e-mail estiver incorreto não será possível atualizá-lo após o envio do formulário. Inserir o e-mail correto é um processo crucial, reserve um tempo para verificar antes de enviar o formulário.',
        inputs: {
          name: {
            name: 'name',
            label: 'Nome completo',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          phone: {
            name: 'phone',
            label: 'Telefone',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          email: {
            name: 'email',
            label: 'Endereco de email',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          country: {
            name: 'country',
            label: 'Pais',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          tax_id: {
            name: 'tax_id',
            label: 'CPF',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          address: {
            name: 'address',
            label: 'Endereco completo',
            required: true,
            err_message: 'Campo obrigatorio',
          },
          zip_code: {
            name: 'zip_code',
            label: 'CEP',
            required: true,
            err_message: 'Campo obrigatorio',
          },
        },
        btn_proceed: {
          cta: 'Registrar',
        },
      },
      verification: {
        title: 'Registrar conta',
        text: 'Confirme seu e-mail',
        annotation:
          'Enviamos um código de verificação para o e-mail usado na etapa anterior. Se você não recebeu o código, aguarde alguns segundos e verifique se o e-mail está na caixa de spam.',
        inputs: {
          confirmation_code: {
            name: 'confirmation_code',
            label: 'Codigo de verificacao',
            required: true,
            err_message: 'Campo obrigatorio',
          },
        },
        btn_back: {
          cta: 'Voltar',
        },
        btn_proceed: {
          cta: 'Confirmar',
        },
      },
    },
    choose_payment_method: {
      title: 'Escolha metodo de pagamento',
      text: 'Escolha o metodo de pagamento de sua preferência.',
      btn: {
        cta: 'Finalizar compra',
      },
      options: [
        {
          id: 'pix',
          title: 'PIX',
          text: 'The payment will be realized in ths Stripe checkout, when you click buy now you will be redirect to the Stripe checkout page. After the payment succeeded your NFT will be sended to you, it could take a few minutes.',
        },
        {
          id: 'crypto',
          title: 'Crypto (Ethereum)',
          text: '',
        },
      ],
    },
  },
}

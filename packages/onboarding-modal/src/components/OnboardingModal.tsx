import * as Dialog from '@radix-ui/react-dialog'

export type OnboardingModalProps = {
  mode: 'dark' | 'light'
}

const OnboardingModal = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black font-sans">
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="rounded-full border border-solid border-zinc-600 bg-zinc-900 px-3 py-1 text-2xl font-bold text-white">
            ?
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] flex h-[50rem] max-h-[90vh] w-[95%] max-w-[662px] translate-x-[-50%] translate-y-[-50%] flex-col rounded-[6px] bg-[#151718] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px]">
            <header className="flex items-center justify-between rounded-t-[6px] border border-solid border-zinc-600 bg-zinc-900 p-5  text-white">
              <h2 className="text-xl text-slate-200">allnft&#x7b;lab&#x7d;</h2>
              <h3 className="text-base text-neutral-400">Passo a passo</h3>
            </header>
            <section className="m-auto h-full w-full overflow-auto border-x border-solid border-zinc-600 px-5 pt-7">
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl text-slate-200">
                  Aprenda como comprar
                </h1>
                <p className="text-neutral-500">
                  O allnft&#x7b;lab&#x7d; criou um passo a passo para te ajudar
                  a colecionar seu token! Aqui está tudo que precisa saber para
                  adquirir um NFT.
                </p>
              </div>
              <div className="my-10 [&>*:not(:last-child)]:mb-12">
                <section className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800">
                      <h3 className="text-base text-neutral-400">1</h3>
                    </div>
                    <h2 className="text-lg text-slate-200">Criar carteira</h2>
                  </div>
                  <div>
                    <p className="text-neutral-500">
                      Acesse o site{' '}
                      <a
                        href={'http://metamask.io'}
                        className="underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        http://metamask.io
                      </a>
                      , clique em “Download”. A Metamask pode ser acessada
                      através da extensão para navegadores no desktop ou através
                      de aplicativo para dispositivos móveis. Após o download,
                      siga as instruções e crie sua carteira.
                      <br /> <br />
                      Obs.: A metamask não está disponível para o navegador
                      desktop Safari.
                    </p>
                  </div>
                </section>
                <section className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800">
                      <h3 className="text-base text-neutral-400">2</h3>
                    </div>
                    <h2 className="text-lg text-slate-200">
                      Conectar a carteira
                    </h2>
                  </div>
                  <div>
                    <p className="text-neutral-500">
                      Acesse a página de checkout e clique em “conectar
                      carteira”, selecione a carteira que deseja conectar, em
                      seguida, autorize a conexão através do pop-up de
                      assinatura.
                    </p>
                  </div>
                </section>
                <section className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800">
                      <h3 className="text-base text-neutral-400">3</h3>
                    </div>
                    <h2 className="text-lg text-slate-200">Selecionar NFT</h2>
                  </div>
                  <div>
                    <p className="text-neutral-500">
                      Selecione as NFTs que deseja obter e clique em
                      “continuar”. Para mudar a quantidade que você deseja,
                      basta conferir o Resumo do pedido.
                    </p>
                  </div>
                </section>
                <section className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800">
                      <h3 className="text-base text-neutral-400">4</h3>
                    </div>
                    <h2 className="text-lg text-slate-200">
                      Cadastro da conta
                    </h2>
                  </div>
                  <div>
                    <p className="text-neutral-500">
                      Preencha os campos com seus dados. Essas informações são
                      necessárias para propósitos fiscais e de segurança.
                      Confirme sua identidade através do código de verificação
                      enviado ao e-mail cadastrado.
                    </p>
                  </div>
                </section>
                <section className="flex flex-col justify-start gap-4">
                  <div className="flex flex-row gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-zinc-600 bg-zinc-800">
                      <h3 className="text-base text-neutral-400">5</h3>
                    </div>
                    <h2 className="text-lg text-slate-200">
                      Realizar pagamento
                    </h2>
                  </div>
                  <div>
                    <p className="text-neutral-500">
                      Abra o aplicativo do seu banco pelo celular. Na opção PIX,
                      escolha “Ler QR Code” e aponte sua câmera para o código.
                      Revise as informações e confirme o pagamento.
                    </p>
                  </div>
                </section>
              </div>
            </section>
            <footer className="flex justify-end rounded-b-[6px] border border-solid border-zinc-600 bg-zinc-900 px-5 py-4">
              <Dialog.Close asChild>
                <button className="rounded-lg border border-solid border-zinc-600 bg-[#242424] px-4 py-2 text-lg font-semibold text-slate-200 shadow-[0px_2px_1px_#000000cc]">
                  Continuar
                </button>
              </Dialog.Close>
            </footer>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export { OnboardingModal }

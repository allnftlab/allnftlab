import * as ReactTooltip from '@radix-ui/react-tooltip'

const Tooltip = () => {
  return (
    <ReactTooltip.Provider>
      <ReactTooltip.Root>
        <ReactTooltip.Trigger asChild>
          {/* faltou box shadow do button */}
          <button className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-solid border-neutral-200 bg-neutral-100 hover:bg-transparent">
            !
          </button>
        </ReactTooltip.Trigger>
        <ReactTooltip.Portal>
          <ReactTooltip.Content
            // falta implementar animações
            className="select-none rounded-sm border border-solid border-neutral-200 bg-neutral-100 px-3 py-2 text-base"
            sideOffset={5}
          >
            You can only get 2 of this NFT
            <ReactTooltip.Arrow className="fill-neutral-100" />
          </ReactTooltip.Content>
        </ReactTooltip.Portal>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  )
}

export { Tooltip }

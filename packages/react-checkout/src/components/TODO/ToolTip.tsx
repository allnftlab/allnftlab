import * as ReactTooltip from '@radix-ui/react-tooltip'

const Tooltip = () => {
  return (
    <ReactTooltip.Provider>
      <ReactTooltip.Root>
        <ReactTooltip.Trigger asChild>
          <button className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-solid border-neutral-200 bg-neutral-100 hover:bg-transparent">
            !
          </button>
        </ReactTooltip.Trigger>
        <ReactTooltip.Portal>
          <ReactTooltip.Content
            className="offset select-none rounded-sm border border-solid border-neutral-200 bg-neutral-100 px-3 py-2 text-base data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade "
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

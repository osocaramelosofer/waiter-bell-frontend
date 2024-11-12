import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogSubtitle,
  DialogClose,
  DialogContainer
} from '@/components/core/dialog'
import { ScrollArea } from '@/components/website/scroll-area'

export function MenuItem() {
  return (
    <Dialog
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 24
      }}
    >
      <DialogTrigger
        style={{
          borderRadius: '4px'
        }}
        className="border border-gray-200/60 dark:border-none bg-zinc-100 dark:bg-zinc-700 w-max"
      >
        <div className="flex flex-col items-center p-3  ">
          <DialogImage
            src="/images/pizza.webp"
            alt="What I Talk About When I Talk About Running - book cover"
            className="h-24 w-24 object-cover object-top"
            style={{
              borderRadius: '4px'
            }}
          />
          <div className="flex flex-col items-start justify-center space-y-0">
            <DialogTitle className="text-[10px] font-medium text-foreground sm:text-xs uppercase">
              pizza
            </DialogTitle>
            <DialogSubtitle className="text-[10px] text-gray-600 dark:text-gray-300 sm:text-xs flex flex-wrap max-w-[180px]">
              carne | peperoni | jamon | queso de cabra | espinaca
            </DialogSubtitle>
          </div>
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '12px'
          }}
          className="relative h-auto w-[500px] border border-gray-300 bg-foreground-800"
        >
          <ScrollArea className="h-[90vh]" type="scroll">
            <div className="relative p-6">
              <div className="flex justify-center py-10">
                <DialogImage
                  src="/images/pizza.webp"
                  alt="What I Talk About When I Talk About Running - book cover"
                  className="h-auto w-[400px]"
                />
              </div>
              <div className="">
                <DialogTitle className="font-bold text-foreground-100 uppercase">
                  Pizza
                </DialogTitle>
                <DialogSubtitle className="font-light text-foreground-300">
                  carne | peperoni | jamon | queso de cabra | espinaca
                </DialogSubtitle>
                <div className="mt-4 text-sm text-foreground-300">
                  <p>
                    Deliciosa pizza hecha en horno, con ingredientes de alta
                    calidad, ideal para compartirla con amigos y familia
                  </p>
                </div>
              </div>
            </div>
          </ScrollArea>
          <DialogClose className="text-zinc-500" />
        </DialogContent>
      </DialogContainer>
    </Dialog>
  )
}

'use client'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogContainer
} from '@/components/core/dialog'
import { ScrollArea } from '@/components/website/scroll-area'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { AccordionHelpInfo } from './accordion-help-info'

export function TableHelpInfo() {
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
        className=""
      >
        <div className="flex items-center  ">
          <BsFillQuestionCircleFill size={25} className="text-gray-400" />
        </div>
      </DialogTrigger>
      <DialogContainer>
        <DialogContent
          style={{
            borderRadius: '12px'
          }}
          className="relative h-auto w-[500px] border border-gray-100 bg-white"
        >
          <ScrollArea className="h-[60vh]" type="scroll">
            <div className="relative p-6">
              <div className="">
                <DialogTitle className="text-black text-center">
                  Llama a tu mesero para que te atienda 😄
                </DialogTitle>
                <div className="mt-4 text-sm text-gray-700">
                  <AccordionHelpInfo />
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

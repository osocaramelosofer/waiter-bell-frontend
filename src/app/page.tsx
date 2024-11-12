'use client'
import SwitchTheme from '@/components/global/switch-theme'
import { AccordionMenu } from '@/components/menu/accordion-menu'

export default function Home() {
  return (
    <section className="grid  grid-rows-[50px_1fr_100px] h-screen w-full relative ">
      <div className="mt-2 h-max justify-self-end">
        <SwitchTheme />
      </div>
      <div className="px-5 mt-10 md:px-20 md:mt-10">
        <AccordionMenu />
      </div>

      <div className="justify-self-center self-end mb-3">
        <span className="font-bold text-foreground-800 uppercase text-5xl text-center ">
          holbox
        </span>
      </div>
    </section>
  )
}

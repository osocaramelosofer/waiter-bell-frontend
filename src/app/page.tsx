'use client'
import SwitchTheme from '@/components/global/switch-theme'
import { AccordionMenu } from '@/components/menu/accordion-menu'

export default function Home() {
  return (
    <section className="flex flex-col h-screen w-full relative">
      <div className="mt-2 h-max absolute top-2 right-2">
        <SwitchTheme />
      </div>
      <div className="px-5 mt-10 md:px-20 md:mt-10">
        <AccordionMenu />
      </div>
    </section>
  )
}

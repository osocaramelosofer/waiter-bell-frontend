'use client'
import SwitchTheme from '@/components/global/switch-theme'
import { AccordionMenu } from '@/components/menu/accordion-menu'

export default function Home() {
  return (
    <section className="grid bg-foreground-100 h-full w-full">
      {/* <div className="bg-red-200 w-max mx-auto">
        <p>select an option</p>
        <div className="flex flex-col">
          <a href="tables/1">Join a table</a>
          <a href="admin">Admin panel</a>
        </div>
      </div> */}
      <div className="justify-self-end mt-2 ">
        <SwitchTheme />
      </div>
      <AccordionMenu />
    </section>
  )
}

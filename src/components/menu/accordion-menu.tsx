/* eslint-disable @next/next/no-img-element */
'use client'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/core/accordion'
import { ChevronRight } from 'lucide-react'
import { MenuItem } from './menu-item'
import { AnimatedCards } from './animated-cards'

export function AccordionMenu() {
  return (
    <Accordion
      className="flex w-full flex-col "
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1
        },
        collapsed: {
          opacity: 0,
          scale: 0.7
        }
      }}
    >
      <AccordionItem value="getting-started" className="py-2 ">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50 ">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-4xl font-bold">
              Entradas 🍟
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Tienes hambre y no sabes por donde empezar? Aqui te dejamos nuestras
            mejores recomendaciones
          </p>

          <div className="md:ml-5 flex gap-x-5 gap-y-7 flex-wrap mt-5 justify-center md:justify-start">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="animation-properties" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-4xl font-bold">
              Platillos fuertes 🥩
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <AnimatedCards />
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Discover a variety of properties to customize your animations. Learn
            to adjust timing, easing, and delays for smoother effects. This
            guide will help you tailor these settings to your app’s needs.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="advanced-features" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-4xl font-bold">
              Bebidas 🍹
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Advance your skills by using more complex functions of
            Motion-Primitives. Explore how to link animations together, create
            intricate sequences, and interact with motion sensors for dynamic
            effects.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="community-support" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-90 dark:text-zinc-50" />
            <div className="ml-2 text-zinc-950 dark:text-zinc-50 text-4xl font-bold">
              Postres 🍧
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6 pr-2 text-zinc-500 dark:text-zinc-400">
            Connect with the Motion-Primitives community for support and
            collaboration. Learn how to contribute, share knowledge, and access
            helpful resources. Stay updated on new updates and collective
            insights.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/core/accordion'
import { ChevronRight } from 'lucide-react'

export function AccordionHelpInfo() {
  return (
    <Accordion
      className="flex w-full flex-col"
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
      <AccordionItem value="getting-started" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-black">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-90 " />
            <div className="ml-2 text-black font-bold">¿Cómo funciona?</div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6  text-zinc-600 flex items-center ">
            Presiona el boton y en seguida un mesero vendra atenderte
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="py-2">
        <AccordionTrigger className="w-full py-0.5 text-left text-black">
          <div className="flex items-center">
            <ChevronRight className="h-4 w-4 text-black transition-transform duration-200 group-data-[expanded]:rotate-90 " />
            <div className="ml-2 text-black font-bold">
              ¿Por qué usar la app?
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="origin-left">
          <p className="pl-6  text-zinc-600 flex items-center ">
            La razón principal es facilitar que los meseros puedan ver las mesas
            que necesitan atención. Cuando un cliente presiona el botón para
            llamar al mesero, los meseros pueden ver qué mesa está solicitando
            servicio. Esto hace más eficiente y rápido el servicio que los
            meseros brindan a los clientes.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

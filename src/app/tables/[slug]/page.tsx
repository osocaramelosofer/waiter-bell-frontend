import { CallWaiterButton } from '@/components/tables/call-waiter-button'
import { TableHelpInfo } from '@/components/tables/table-help-info'

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return (
    <section className="bg-white w-full h-full grid relative justify-center items-center">
      <div className="self-start size-max absolute right-0 mt-3 mr-3">
        <TableHelpInfo />
      </div>

      <div className="w-max">
        <div className="rounded-full bg-neutral-800 p-8">
          <div className="flex flex-col gap-y-16">
            <span className="font-bold text-2xl uppercase text-white text-center">
              Mesa {slug}
            </span>
            <CallWaiterButton tableId={slug} />
          </div>
        </div>
      </div>
    </section>
  )
}

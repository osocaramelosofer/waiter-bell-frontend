import { FaAsterisk } from 'react-icons/fa'

export function PhraseSection() {
  return (
    <section className="w-full my-10">
      <div className="max-w-3xl w-full mx-auto">
        <p className="font-rubik uppercase text-md md:text-xl text-center leading-8 md:leading-10">
          <span className="mx-2 border-b-4 border-b-black">Ferleth</span> for
          Elevated Everyday Life. Styles change
          <span className="border-2 rounded-full border-black mx-4 px- inline-flex items-center px-2">
            <FaAsterisk size={20} className="mr-1" />
            with seasons
          </span>
          united by the liberating essence of travel-inspired lightheartedness
        </p>
      </div>
    </section>
  )
}

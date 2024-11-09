/* eslint-disable @next/next/no-img-element */
import { FaCircleArrowDown } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

export function HeroSection() {
  return (
    <section className="px-5">
      <div className="flex gap-2 flex-col-reverse md:flex-row">
        <div className="flex flex-wrap gap-2">
          <div className="rounded-3xl overflow-hidden flex-auto w-52 bg-stone-300 p-8">
            <div className="flex flex-col gap-y-20 ">
              <span className="font-pirata text-5xl tracking-widest uppercase font-semibold text-stone-800">
                for everyone but notanyone
              </span>

              <small>
                we establish personal relationships with our boutiques, to make
                sure each is vetted for a stress-free shopping experience
              </small>
            </div>
          </div>
          <div className="flex gap-2 flex-col md:flex-row">
            <div className="rounded-3xl overflow-hidden relative flex">
              <img
                className="w-full h-full object-cover"
                src="https://media.elitemodellook.com/311/36/31136.jpg"
                alt="model"
              />
              <span className="tracking-widest text-white absolute bottom-0 inset-x-0 uppercase font-bold text-xl text-center">
                #ripstop
              </span>
            </div>
            <div className="rounded-3xl overflow-hidden relative flex">
              <img
                className="w-full h-full object-cover"
                src="https://as2.ftcdn.net/v2/jpg/05/43/42/97/1000_F_543429728_CVV7ILPBnx50wV4v9aKnY5QFYYL6uBWm.jpg"
                alt="model"
              />
              <span className="tracking-widest text-white absolute bottom-0 inset-x-0 uppercase font-bold text-xl text-center">
                #insulated
              </span>
            </div>
          </div>
        </div>

        <div className="hero-img gap-2 rounded-3xl overflow-hidden relative">
          <img
            className="object-cover h-full w-full"
            src="https://media.vogue.co.uk/photos/62b3332d6d77b958820c42d9/1:1/w_2124,h_2124,c_limit/PARIS-MENS-STREETSTYLE-PHILOH-DAY1-%2026.jpg"
            alt="model"
          />

          <div className="absolute bottom-0 inset-x-0 flex justify-end mb-4 mr-4 gap-x-4">
            <div className="contact-btn backdrop-blur-md flex border-2 p-1 border-white rounded-full items-center hover:cursor-pointer">
              <span className=" text-black font-normal text-xs text-center leading-none md:leading-normal md:text-md font-rubik">
                learn more
              </span>
              <FaCircleArrowDown className="text-black ml-2 text-sm md:text-md" />
            </div>
            <div className="contact-btn backdrop-blur-md flex border-2 p-1 border-white rounded-full items-center hover:cursor-pointer">
              <span className="text-black  font-normal text-xs text-center leading-none md:leading-normal md:text-md font-rubik">
                contact us
              </span>
              <MdOutlineMail className="text-black ml-2 text-md md:text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* eslint-disable @next/next/no-img-element */

import { GiEarthAmerica, GiEcology } from 'react-icons/gi'
import { GoArrowUpRight } from 'react-icons/go'

export function AboutSection() {
  return (
    <section className="my-20">
      <div className="flex">
        <div className="flex gap-4 lg:flex-row flex-col-reverse">
          <div className="w-full lg:w-2/5 aspect-auto rounded-2xl overflow-hidden relative">
            <img
              className="h-full w-full object-cover"
              src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-AI710938516003_alternate1?$rl_4x5_pdp$"
              alt="man image"
            />
            <div className="absolute bottom-0 left-0 right-0 mb-4 flex justify-center">
              <div className="bg-white flex items-center px-4 py-2 text-black rounded-full relative w-max">
                <span className="mr-2 text-black z-10">LEARN MORE</span>
                <GoArrowUpRight className="z-10" />
                <div
                  className="absolute inset-0 rounded-[100px] bg-white z-0"
                  style={{
                    clipPath:
                      'polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)'
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#789c49] rounded-2xl flex flex-col justify-between md:gap-y-40 gap-y-20 md:p-20 p-8">
            <div className="max-w-[500px] md:max-w-[900px] lg:max-w-[1200px]">
              <span className="font-rubik tracking-tighter text-2xl md:text-6xl lg:text-8xl leading-3 md:leading-normal white-space-normal overflow-wrap-break-word text-center">
                we&#39;re changing the way things get made
              </span>
            </div>
            <div className="container-cards flex flex-col md:flex-row border-[2px] border-[#536f2f] rounded-xl p-4 gap-8 ">
              <div className="card1 flex-initial">
                <div className="flex items-center">
                  <GiEcology className="text-2xl md:text-4xl mr-2" />
                  <span className="font-rubik tracking-tighter text-md lg:text-4xl">
                    sustainability
                  </span>
                </div>
                <p className="font-bold">
                  we&#39;re challenging conventional retail, putting and end to
                  dead stock, unconventional waste and more fantastic
                </p>
              </div>
              <div className="card1 flex-initial">
                <div className="flex items-center">
                  <GiEarthAmerica className="text-md lg:text-4xl mr-2" />
                  <span className="font-rubik tracking-tighter text-md md:text-xl">
                    mission
                  </span>
                </div>
                <p className="font-bold">
                  we&#39;re on a mission to empower create independence in a
                  commercial world and incredible
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

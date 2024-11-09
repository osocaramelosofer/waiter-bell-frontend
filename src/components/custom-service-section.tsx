/* eslint-disable @next/next/no-img-element */

import { FaPlay } from 'react-icons/fa'

export function CustomServiceSection() {
  return (
    <section className="my-20">
      <div>
        <div className="font-rubik lg:text-3xl lg:tracking-tighter text-center my-5">
          <h3>want to to design your own?</h3>
          <h3>calm, we can do it</h3>
        </div>
        <div className="relative ">
          <div className="w-full">
            <img
              className="w-full h-full object-cover rounded-2xl "
              src="https://media.istockphoto.com/id/1345105817/photo/young-female-customer-shopping-in-clothing-store-retail-sales-associate-helps-with-advice.jpg?s=612x612&w=0&k=20&c=i-Yf4mjiN3kHD9W5BrY3O80GBLRxA6vuLpuSga2pb-E="
              alt="custom service"
            />
            <div className="bg-white rounded-full p-2 absolute bottom-0 inset-x-0 mx-auto w-max mb-2">
              <div className="flex  items-center p-2 rounded-2xl">
                <FaPlay className="mr-2" />
                <span className="uppercase semi-bold">
                  see all our services
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

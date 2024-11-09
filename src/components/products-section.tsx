/* eslint-disable @next/next/no-img-element */
export function ProductsSection() {
  const products = [
    {
      url: 'https://i.insider.com/63e3d30827e5db0018eebf41?width=800&format=jpeg&auto=webp'
    },
    {
      url: 'https://i.insider.com/63e3d30827e5db0018eebf41?width=800&format=jpeg&auto=webp'
    },
    {
      url: 'https://i.insider.com/63e3d30827e5db0018eebf41?width=800&format=jpeg&auto=webp'
    },
    {
      url: 'https://i.insider.com/63e3d30827e5db0018eebf41?width=800&format=jpeg&auto=webp'
    },
    {
      url: 'https://au.benetton.com/on/demandware.static/-/Sites-ucb-master/default/dw3bac4fe5/images/Full_Card_h/Benetton_23A_2JF8UN02Q_313_FY_Full_Card_h.jpg'
    },
    {
      url: 'https://au.benetton.com/on/demandware.static/-/Sites-ucb-master/default/dw3bac4fe5/images/Full_Card_h/Benetton_23A_2JF8UN02Q_313_FY_Full_Card_h.jpg'
    },
    {
      url: 'https://au.benetton.com/on/demandware.static/-/Sites-ucb-master/default/dw3bac4fe5/images/Full_Card_h/Benetton_23A_2JF8UN02Q_313_FY_Full_Card_h.jpg'
    },
    {
      url: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1463368_alternate3?$rl_4x5_pdp$'
    },
    {
      url: 'https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1463368_alternate3?$rl_4x5_pdp$'
    }
  ]
  return (
    <section>
      <nav className="">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="max-w-[200px] text-center">
            <span className="font-rubik text-2xl leading-none md:leading-tight ">
              shop by essentials
            </span>
          </div>
          <ul className="flex gap-x-2 items-center font-rubik flex-wrap justify-center gap-y-2">
            <li className="chip text-xs md:text-lg w-max">All</li>
            <li className="chip text-xs md:text-lg w-max">summer coll</li>
            <li className="chip text-xs md:text-lg w-max">new ariv</li>
            <li className="chip text-xs md:text-lg w-max">best sell</li>
            <li className="chip text-xs md:text-lg w-max">flash</li>
          </ul>
        </div>
      </nav>
      {/* PRODUCTS */}
      <div className="mt-5">
        <div className="product-wrapper flex flex-wrap gap-2 ">
          {products.map(({ url }, index) => {
            return (
              <div
                className="card-product flex-col flex hover:cursor-pointer"
                key={index}
              >
                <div className="flex-auto w-full md:max-w-[300px] overflow-hidden max-h-[300px] aspect-[4/3] rounded-xl">
                  <img
                    className="w-full h-ful object-cover"
                    src={url}
                    alt="model man"
                  />
                </div>
                <div className="mt-5 flex flex-col">
                  <span className="font-rubik uppercase m-0">cord shirt</span>
                  <span className="font-bold text-stone-400 m-0 max-h-min">
                    $100
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function FooterComponent() {
  return (
    <footer className="p-10">
      <div className="flex flex-wrap gap-10 justify-items-baseline justify-between flex-col md:flex-row">
        <div>
          <span className="font-rubik text-5xl text-white">ferlet</span>
          <p className="text-xl semi-bold text-white uppercase">
            for everyone but notanyone
          </p>
        </div>
        <div className="colum-wrapper flex flex-wrap text-neutral-200 gap-32 flex-col md:flex-row">
          <div className="col">
            <span className="uppercase font-bold text-2xl ">product</span>
            <ul className="">
              <li className="uppercase semi-bold">jackets</li>
              <li className="uppercase semi-bold">shirts</li>
              <li className="uppercase semi-bold">dresses</li>
              <li className="uppercase semi-bold">hats</li>
              <li className="uppercase semi-bold">outwears</li>
            </ul>
          </div>
          <div className="col">
            <span className="uppercase font-bold text-2xl ">buying</span>
            <ul className="">
              <li className="uppercase semi-bold">shop</li>
              <li className="uppercase semi-bold">term to use</li>
              <li className="uppercase semi-bold">privacy</li>
              <li className="uppercase semi-bold">how it works</li>
              <li className="uppercase semi-bold">customer service</li>
            </ul>
          </div>
          <div className="col">
            <span className="uppercase font-bold text-2xl ">social</span>
            <ul className="">
              <li className="uppercase semi-bold">instagram</li>
              <li className="uppercase semi-bold">facebook</li>
              <li className="uppercase semi-bold">twitter</li>
            </ul>
          </div>
          <div className="col">
            <span className="uppercase font-bold text-2xl ">
              join our community
            </span>
            <form className="">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="rounded-full p-2"
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

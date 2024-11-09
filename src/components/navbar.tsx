import { FaSearch } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

const routes = ["women's wear", "men's wear", 'kids', 'sale', 'discover']
export function NavBar() {
  return (
    <nav className="flex p-2 justify-between items-center m-4 border-2 border-slate-300 rounded-xl">
      <div className="">
        <span className="font-bold text-xs tracking-tighter md:text-md lg:2xl font-rubik lg:tracking-wider">
          ferleth
        </span>
      </div>

      <ul className="list-none md:flex md:gap-x-3 md:items-center lg:gap-x-5 hidden">
        {routes.map((route) => (
          <li
            className="relative md:pb-1 lg:pb-0 text-center lg:text-start md:w-min lg:w-max text-sm lg:text-xl font-bold uppercase leading-none tracking-tighter hover:cursor-pointer transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300"
            key={route}
          >
            {route}
          </li>
        ))}
      </ul>

      <div className="inline-block ">
        <form>
          <div className="pl-2 inline-flex gap-x-2 bg-slate-100  items-center rounded-full overflow-hidden ">
            <FaSearch size={13} className="text-slate-900" />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="search..."
              className="w-[100px] focus:w-[150px] transition-all duration-500 outline-none bg-inherit"
            />
          </div>
        </form>
      </div>
      <div className="block md:hidden">
        <button>
          <IoCloseSharp className="text-2xl" />
        </button>
      </div>
    </nav>
  )
}

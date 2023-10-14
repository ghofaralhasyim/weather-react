import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="z-40 fixed top-0 left-0 bg-white h-16 w-full border-b border-gray-200">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="font-extrabold">
          <Link to="/" className="">
            <span>Weather</span>
          </Link>
        </div>
       <div
        className="absolute bg-white left-0 top-0 w-full min-h-screen -translate-x-full ease-in-out duration-300 md:translate-x-0 md:relative md:bg-transparent md:min-h-0 md:w-fit"
      >
        <nav className="w-full px-4">
          <div className="flex justify-between items-center h-16 border-b border-gray-200 md:hidden">
            <button>
              <span>Home</span>
            </button>
          </div>
          <ul className="flex flex-col md:flex-row">
            {/* <li className="p-4"><Link to="/test">Home</Link></li> */}
          </ul>
        </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
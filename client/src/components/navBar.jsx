import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#003058] py-4">
            <div className="container mx-auto flex justify-between items-center py-4 px-8 ">
                <Link to="/">
                    <h1 className="text-white font-bold text-xl ">TrailBlazer UpKeeper</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-10 text-gray-300 text-md">
                        <li>
                            <Link to="/login" className="hover:text-[#ba1c21] text-white px-5">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/buildings" className="hover:text-[#ba1c21] text-white">
                                Buildings
                            </Link>
                        </li>
                        <li>
                            <Link to="/paints" className="hover:text-[#ba1c21] text-white">
                                Paints
                            </Link>
                        </li>
                        <li>
                            <Link to="/rooms" className="hover:text-[#ba1c21] text-white">
                                Rooms
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar

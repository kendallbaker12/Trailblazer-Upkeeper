import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <a>TrailBlazer UpKeeper</a>
                </Link>
                <Link to='/login'>
                    <a>Login</a>
                </Link>
                <Link to='/buildings'>
                    <a>Buildings</a>
                </Link>
                <Link to='/paints'>
                    <a>Paints</a>
                </Link>
                <Link to='/rooms'>
                    <a>Rooms</a>
                </Link>
            </div>
        </header>
    )
}

export default Navbar
import {Link} from 'react-router-dom'


const Navbar = () => {

    return (
        <nav className="navbar">
            <h2>Blogs</h2>
            <Link to="/">Home</Link>
            <Link to="/create">New Blogs</Link>
        </nav>
    )
}

export default Navbar;
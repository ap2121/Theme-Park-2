import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            Vaca(n)tion
        </div>
        <nav className='nav'>
            <ul className='nav-menu'>
                <li className='nav-item'><Link className='nav-links'>Home</Link></li>
                <li className='nav-item'><Link className='nav-links'>Parks List</Link></li>
                <li className='nav-item'><Link className='nav-links'>Rides List</Link></li>
                <li className='nav-item'><Link className='nav-links'>About</Link></li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav
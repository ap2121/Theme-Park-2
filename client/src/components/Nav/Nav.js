import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <Link to='/' className='link'>
            Vaca(<span className='n'>n</span>)tion
            </Link>
        </div>
        
        <nav className='nav'>
            <ul className='nav-menu'>
                <li className='nav-item'><Link className='nav-links' to='/'><button className='link-btn'>Home</button></Link></li>
                <li className='nav-item'><Link className='nav-links' to='/parks-list'><button className='link-btn'>Parks List</button></Link></li>
                <li className='nav-item'><Link className='nav-links' to='/rides-list'><button className='link-btn'>Rides List</button></Link></li>
                <li className='nav-item'><Link className='nav-links' to='/about'><button className='link-btn'>About</button></Link></li>
            </ul>
        </nav>
    </div>
  )
}
export default Nav
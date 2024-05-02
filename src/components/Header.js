import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
 
function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='logo de Kasa' />
            <nav className='nav-header'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header


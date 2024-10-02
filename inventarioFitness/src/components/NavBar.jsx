import './NavBar.css'
import logo from '../img/logo.png'

function NavBar() {
    return(
    <>
    <nav className='navBar'>
        <img src={logo} className='logo'></img>
        <h2>WORLD FIT <spam className="tipografia">Women</spam></h2>
    </nav>
    </>)
    
}

export default NavBar;
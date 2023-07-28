import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="header-container">
    <Link className="heading" to="/">
      <img
        src="https://startup.network/upload/iblock/b28/nuic2bmt517e18d9cy4m72nyr6kdkdhy/mysotre_logo.jpg"
        alt="website-logo"
        className="logo-modification"
      />
    </Link>
    <ul className="nav-menu">
      <li className="nav-menu-item">
        <Link to="/" className="nav-menu-link">
          Home
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link to="/products" className="nav-menu-link">
          Products
        </Link>
      </li>
      <li className="nav-menu-item">
        <Link to="/cart" className="nav-menu-link">
          Cart
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

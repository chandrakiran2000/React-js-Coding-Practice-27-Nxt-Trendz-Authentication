// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const logoUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png'
  console.log(logoUrl)
  return (
    <nav className="header-card">
      <div className="card">
        <img className="logo-img" src={logoUrl} alt="website logo" />
        <button type="button" className="sm-logout-desktop-btn-img">
          <img
            className="logout-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt=" logout"
          />
        </button>
      </div>

      <ul className="sm-nav-card sm-card-nav">
        <Link to="/" className="sm-nav-link">
          <li className="sm-home-link">
            <img
              className="nav-hpc-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
          </li>
        </Link>

        <Link to="/products" className="sm-nav-link">
          <li className="sm-home-link">
            <img
              className="nav-hpc-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
            />
          </li>
        </Link>
        <Link to="/cart" className="sm-nav-link">
          <li className="sm-home-link">
            <img
              className="nav-hpc-img"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
            />
          </li>
        </Link>
      </ul>

      <div className="card-nav">
        <ul className="nav-card">
          <Link to="/" className="nav-link">
            <li className="home-link">Home</li>
          </Link>

          <Link to="/products" className="nav-link">
            <li className="home-link">Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li className="home-link">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header

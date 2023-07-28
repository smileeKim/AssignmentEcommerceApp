import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-menu-container">
      <div className="home">
        <h1 className="main-heading">Multipurpose Store</h1>
        <p className="desc">Choice is yours</p>
        <Link to="/products">
          <button type="button" className="button">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  </div>
)
export default Home

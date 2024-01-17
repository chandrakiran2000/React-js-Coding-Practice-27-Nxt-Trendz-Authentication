// Write your JS code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-card">
    <Header />
    <div className="home-text-logo-card">
      <div className="home-text-card">
        <h1 className="home-text-heading">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="sm-clothes that get you noticed"
          className="sm-home-logo-img"
        />
        <p className="home-text-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button type="button" className="shop-now-button">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-logo-img"
      />
    </div>
  </div>
)

export default Home

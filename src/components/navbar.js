import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="hero-head">
        
        {/* <!-- Cloned navbar --> */}
        {/* <!-- Cloned navbar that comes in on scroll --> */}
        <nav id="navbar-clone" className="navbar is-fixed is-dark">
            <div className="container">
                {/* <!-- Brand --> */}
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img   src={require("./assets/images/logo/krypton-gradient.svg")} alt=""/>
                        <span className="brand-name">Krypton</span>
                    </Link>
                    {/* <!-- Responsive toggle --> */}
                    <span className="navbar-burger burger" data-target="cloneNavbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                {/* <!-- Menu --> */}
                <div id="cloneNavbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <Link to = "/token" className="is-centered-responsive">Token</Link>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <Link to='/ico' className="is-centered-responsive">Ico</Link>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <Link to='/roadmap' className="is-centered-responsive">Roadmap</Link>
                        {/* <!-- Menu item --> */}
                        </div>
                        <div className="navbar-item is-nav-link">
                            <Link to = './blog' className="is-centered-responsive" >Media</Link>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <a className="is-centered-responsive" href="#" target="_blank">
                                <img className="telegram" src={require("./assets/images/logo/telegram.svg")} alt=""/>
                                Telegram
                            </a>
                        </div>
                        {/* <!-- Sign up --> */}
                        <div className="navbar-item is-nav-link">
                            <a href="#" className="button k-button k-primary raised has-gradient slanted">
                                <span className="text">Register</span>
                                <span className="front-gradient"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* <!-- /Cloned navbar --> */}
        {/* <!-- Static navbar --> */}
        {/* <!-- Static navbar --> */}
        <nav className="navbar is-light">
            <div className="container">
                {/* <!-- Brand --> */}
                <div className="navbar-brand">
                    <a href="index.html" className="navbar-item">
                        <img className="rotating" src={require("./assets/images/logo/krypton.svg")} alt=""/>
                        <span className="brand-name">Krypton</span>
                    </a>
                    {/* <!-- Responsive toggle --> */}
                    <span className="navbar-burger burger" data-target="navbarMenu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </div>
                {/* <!-- Menu --> */}
                <div id="navbarMenu" className="navbar-menu light-menu">
                    <div className="navbar-end">
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <Link to = './components/token.js' className="is-centered-responsive" >Token</Link>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <a className="is-centered-responsive" href="ico.html">Ico</a>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <a className="is-centered-responsive" href="roadmap.html">Roadmap</a>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <a className="is-centered-responsive" href="blog.html">Media</a>
                        </div>
                        {/* <!-- Menu item --> */}
                        <div className="navbar-item is-nav-link">
                            <a className="is-centered-responsive" href="#" target="_blank">
                                <img className="telegram" src={require("./assets/images/logo/telegram.svg")} alt=""/>
                                Telegram
                            </a>
                        </div>
                        {/* <!-- Sign up --> */}
                        <div className="navbar-item">
                            <a href="#" className="button k-button k-primary raised has-gradient slanted">
                                <span className="text">Register</span>
                                <span className="front-gradient"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        {/* <!-- /Static navbar --> */}
    </div>
      </div>
    );
  }
}

export default Navbar;
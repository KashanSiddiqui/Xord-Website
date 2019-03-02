import React, { Component } from 'react';
import './assets/css/bulma.css';
import './assets/css/core.css';
import './assets/fonts/cryptofont/css/cryptofont.min.css';
import './assets/js/modalvideo/modal-video.min.css';
import './assets/js/aos/aos.css';
import AOS from 'aos';



// class App extends React.Component {
//   constructor(props){
//     super(props);
//   }
  
class Home extends Component {
    componentDidMount() {
        AOS.init();
        AOS.refresh();
    }
    render() {
    return (
      <div className="Home">
     {/* <!-- Pageloader --> */}
        <div className="pageloader is-theme"></div>
        <div className="infraloader is-active" style={{backgroundColor:'transparent'}}></div>        
        <div className="dark-wrapper">
            {/* <!-- Landing page Hero --> */}
            <section className="hero is-fullheight is-transparent">
                <div className="hero-head">
        
                    {/* <!-- Cloned navbar --> */}
                    {/* <!-- Cloned navbar that comes in on scroll --> */}
                    <nav id="navbar-clone" className="navbar is-fixed is-dark">
                        <div className="container">
                            {/* <!-- Brand --> */}
                            <div className="navbar-brand">
                                <a href="index.html" className="navbar-item">
                                    <img   src={require("./assets/images/logo/krypton-gradient.svg")} alt=""/>
                                    <span className="brand-name">Krypton</span>
                                </a>
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
                                        <a className="is-centered-responsive" href="token.html">Token</a>
                                    </div>
                                    {/* <!-- Menu item --> */}
                                    <div className="navbar-item is-nav-link">
                                        <a className="is-centered-responsive" href="ico.html">Ico</a>
                                    </div>
                                    {/* <!-- Menu item --> */}
                                    <div className="navbar-item is-nav-link">
                                        <a className="is-centered-responsive" href="roadmap.html">Roadmap</a>
                                    {/* <!-- Menu item --> */}
                                    </div>
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
                                        <a className="is-centered-responsive" href="token.html">Token</a>
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
        
                {/* <!-- Animated particles --> */}
                <div id="particles-js"></div>
        
                {/* <!-- Hero Image and Title --> */}
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
        
                            {/* <!-- Landing page Title --> */}
                            <div className="column is-5 landing-caption">
                                <h1 className="title is-1 is-light is-semibold is-spaced main-title">Cryptocurrency Exchange Market</h1>
                                <h2 className="subtitle is-6 is-light is-thin">
                                    Cryptocurrency brought to the next level. Join our ICO for supercharged rates.
                                </h2>
                                {/* <!-- CTA --> */}
                                <p>
                                    <a href="#start" className="button k-button k-primary raised has-gradient is-fat is-bold">
                                        <span className="text">Get Started</span>
                                        <span className="front-gradient"></span>
                                    </a>
                                </p>
        
                            </div>
                            {/* <!-- Hero image --> */}
                            <div className="column is-7">
                                <figure className="image">
                                    <img src={require("./assets/images/illustrations/buildings.svg")} alt=""/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
        
                {/* <!-- Hero footer --> */}
                <div className="hero-foot">
                    <div className="container">
                        <div className="tabs is-centered">
                            {/* <!-- Client / partner list --> */}
                            <ul>
                                <li><a><img className="hero-logo" src={require("./assets/images/clients/cryptomarket.svg")} alt=""/></a></li>
                                <li><a><img className="hero-logo" src={require("./assets/images/clients/bitit.svg")} alt=""/></a></li>
                                <li><a><img className="hero-logo" src={require("./assets/images/clients/coin.svg")} alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Landing page Hero --> */}
        
            {/* <!-- Icon Features section --> */}
            <section id="start" className="section is-transparent is-relative">
                {/* <!-- Container --> */}
                <div className="container">
        
                    <div className="has-text-centered">
                        <a className="button k-button k-secondary raised has-gradient is-fat is-bold rounded">
                            <span className="text">Buy Tokens 20% off</span>
                            <span className="front-gradient"></span>
                        </a>
                        
                        <div className="buy-title">We Accept</div>
                        
                        <div className="accepted-currencies">
                            <div>
                                <i className="cf cf-btc"></i>
                            </div>
                            <div>
                                <i className="cf cf-eth"></i>
                            </div>
                            <div>
                                <i className="cf cf-ltc"></i>
                            </div>
                            <div>
                                <i className="cf cf-xem"></i>
                            </div>
                        </div>
                    </div>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper is-medium">
                        <div className="columns is-vcentered">
                            {/* <!-- Feature --> */}
                            <div className="column is-4">
                                <div className="feature">
                                    <img src={require("./assets/images/icons/chained.svg")} alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                    <h4 className="title is-6 is-tight is-light">Chaining</h4>
                                    <p>Supercharged features to make you happy and lorem ipsum sit dolor amet</p>
                                </div>
                            </div>
                            {/* <!-- Feature --> */}
                            <div className="column is-4">
                                <div className="feature">
                                    <img src={require("./assets/images/icons/stacked.svg")} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                    <h4 className="title is-6 is-tight is-light">Stacking</h4>
                                    <p>Supercharged features to make you happy and lorem ipsum sit dolor amet</p>
                                </div>
                            </div>
                            {/* <!-- Feature --> */}
                            <div className="column is-4">
                                <div className="feature">
                                    <img src={require("./assets/images/icons/compact.svg")} alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                    <h4 className="title is-6 is-tight is-light">Managing</h4>
                                    <p>Supercharged features to make you happy and lorem ipsum sit dolor amet</p>
                                </div>
                            </div>
                        </div>
        
                        {/* <!-- Play video button --> */}
                        <div className="cta-wrapper has-text-centered">
                            <div className="video-button levitate js-modal-btn" data-video-id="6WG7D47tGb0">
                                <img src={require("./assets/images/icons/play.svg")} alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Content wrapper --> */}
                </div>
                {/* <!-- /Container --> */}
            </section>
            {/* <!-- /Icon Features section --> */}
        
            {/* <!-- Side Features section --> */}
            <section id="big-gradient" className="section is-transparent">
                {/* <!-- Container --> */}
                <div className="container">
                    {/* <!-- Divider --> */}
                    <div className="divider is-centered"></div>
                    {/* <!-- Title & subtitle --> */}
                    <h2 className="title is-light is-semibold has-text-centered is-spaced">Decentralized Exchange</h2>
                    <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper is-large">
                        <div className="columns is-vcentered">
        
                            {/* <!-- Feature content --> */}
                            <div className="column is-5 is-offset-1">
                                <div className="side-feature-content">
        
                                    <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitbanner.svg")} alt=""/> <span>Token Building</span></h3>
                                    <div className="divider is-long"></div>
                                    <p className="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                                    <div className="cta-wrapper">
                                        <a href="token.html" className="button k-button k-primary raised has-gradient is-bold">
                                            <span className="text">Learn More</span>
                                            <span className="front-gradient"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Feature image --> */}
                            <div className="column is-7">
                                <img className="side-feature" src={require("./assets/images/illustrations/token.svg")} alt=""/>
                            </div>
                        </div>
        
                        <div className="columns is-vcentered">
                            {/* <!-- Feature image desktop --> */}
                            <div className="column is-7 is-hidden-mobile">
                                <img className="side-feature" src={require("./assets/images/illustrations/blockchain-blocks.svg")} alt=""/>
                            </div>
        
                            {/* <!-- Feature content --> */}
                            <div className="column is-5">
                                <div className="side-feature-content">
        
                                    <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitnetwork.svg")} alt=""/> <span>Cascading Blockchain</span></h3>
                                    <div className="divider is-long"></div>
                                    <p className="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                                    <div className="cta-wrapper">
                                        <a href="#" className="button k-button k-primary raised has-gradient is-bold">
                                            <span className="text">Whitepaper</span>
                                            <span className="front-gradient"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Feature image only for mobile --> */}
                            <div className="column is-7 is-hidden-desktop is-hidden-tablet">
                                <img className="side-feature" src={require("./assets/images/illustrations/blockchain-blocks.svg")} alt=""/>
                            </div>
                        </div>
        
                        <div className="columns is-vcentered">
                            {/* <!-- Feature content --> */}
                            <div className="column is-5 is-offset-1">
                                <div className="side-feature-content">
        
                                    <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitmining.svg")} alt=""/> <span>Crypto Farming</span></h3>
                                    <div className="divider is-long"></div>
                                    <p className="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                                    <div className="cta-wrapper">
                                        <a href="#" className="button k-button k-primary raised has-gradient is-bold">
                                            <span className="text">Join the ICO</span>
                                            <span className="front-gradient"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Feature image --> */}
                            <div className="column is-7">
                                <img className="side-feature" src={require("./assets/images/illustrations/crypto-mining.svg")} alt=""/>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Content wrapper --> */}
                </div>
                {/* <!-- /Container --> */}
            </section>
            {/* <!-- /Side Features section --> */}
        
            {/* <!-- ICO section --> */}
            <section className="section is-medium is-end">
                {/* <!-- Container --> */}
                <div className="container">
                    {/* <!-- Divider --> */}
                    <div className="divider is-centered"></div>
                    {/* <!-- Title & subtitle --> */}
                    <h2 className="title is-light is-semibold has-text-centered is-spaced">Join our ICO Now</h2>
                    <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper is-large">
        
                        {/* <!-- Flying tabs wrapper --> */}
                        <div className="flying-wrapper">
                            {/* <!-- Tabs container --> */}
                            <div className="flying-tabs-container">
                                {/* <!-- Tabs --> */}
                                <div className="flying-tabs">
                                    <div className="flying-child tab-1 is-active" data-tab="tab-1"><a href="javascript:void(0);">ICO</a></div>
                                    <div className="flying-child tab-2" data-tab="tab-2"><a href="javascript:void(0);">TOKEN</a></div>
                                    <div className="flying-child tab-3" data-tab="tab-3"><a href="javascript:void(0);">PROFIT</a></div>
                                    <div className="flying-child tab-4" data-tab="tab-4"><a href="javascript:void(0);">BOUNTY</a></div>
                                    <div className="slider"></div>
                                </div>
                            </div>
        
                            {/* <!-- Tabs content wrapper --> */}
                            <div className="flying-tabs-content">
                                {/* <!-- Tab 1 --> */}
                                <div id="tab-1" className="tab-content is-active">
                                    <div className="columns is-vcentered tab-content-wrapper">
                                        {/* <!-- ICO Terms --> */}
                                        <div className="column is-5 is-offset-1">
                                            <div className="text-content">
                                                <h4 className="title is-6 is-light animated preFadeInUp fadeInUp">ICO TERMS</h4>
                                                <ul className="custom-bullet-list">
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Presale</span>
                                                        <br/>
                                                        <span className="item-content">Presale starts on Apr 8 2018 (9:00am GMT)</span>
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Sale</span>
                                                        <br/>
                                                        <span className="item-content">Token sales starts on Jun 8 2018 (12:00am GMT)</span>
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Bonus</span>
                                                        <br/>
                                                        <span className="item-content">Bonus starts on July 29 2018 (12:00am GMT)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- ICO COuntdown --> */}
                                        <div className="column is-5">
                                            {/* <!-- Card --> */}
                                            <div className="ico-card animated preFadeInUp fadeInUp">
                                                {/* <!-- Countdown --> */}
                                                <ul id="countdown" className="is-ico">
                                                    <li id="days">
                                                        <div className="timer-number">00</div>
                                                        <div className="label">Days</div>
                                                    </li>
                                                    <li id="hours">
                                                        <div className="timer-number">00</div>
                                                        <div className="label">Hours</div>
                                                    </li>
                                                    <li id="minutes">
                                                        <div className="timer-number">00</div>
                                                        <div className="label">Minutes</div>
                                                    </li>
                                                    <li id="seconds">
                                                        <div className="timer-number">00</div>
                                                        <div className="label">Seconds</div>
                                                    </li>
                                                </ul>
                                                {/* <!-- Progress bar --> */}
                                                <div className="progress-block">
                                                    {/* <!-- Tags --> */}
                                                    <div className="progress-tags">
                                                        <div>Presale</div>
                                                        <div>Soft Cap</div>
                                                        <div>Bonus</div>
                                                    </div>
                                                    <progress className="progress ico-progress" value="65" max="100">65%</progress>
                                                </div>
        
                                                {/* <!-- Button --> */}
                                                <div className="button-block">
                                                    <a href="#" className="button k-button k-secondary raised has-gradient is-bold is-fullwidth rounded">
                                                        <span className="text">Join the ICO Now</span>
                                                        <span className="front-gradient"></span>
                                                    </a>
                                                </div>
        
                                                {/* <!-- Icons --> */}
                                                <div className="icon-block">
                                                    <i className="cf cf-btc"></i>
                                                    <i className="cf cf-eth"></i>
                                                    <i className="cf cf-ltc"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Tab 1 --> */}
        
                                {/* <!-- Tab 2 --> */}
                                <div id="tab-2" className="tab-content">
                                    <div className="columns is-vcentered tab-content-wrapper">
                                        {/* <!-- Tab content --> */}
                                        <div className="column is-5 is-offset-1">
                                            <div className="text-content">
                                                <h4 className="title is-6 is-light animated preFadeInUp fadeInUp">TOKEN RATES</h4>
                                                <ul className="custom-bullet-list">
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Tokens Sales</span>
                                                        <br/>
                                                        <span className="item-content">1 200 000 KP (22%)</span>
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Token Exchange</span>
                                                        <br/>
                                                        <span className="item-content">1 BTC = 2200 KP, 1 ETH = 825 KP</span> 
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Transations</span>
                                                        <br/>
                                                        <span className="item-content">Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- Tab image --> */}
                                        <div className="column is-5">
                                            <img className="animated preFadeInUp fadeInUp" src={require("./assets/images/illustrations/tokens.svg")} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Tab 2 --> */}
        
                                {/* <!-- Tab 3 --> */}
                                <div id="tab-3" className="tab-content">
                                    <div className="columns is-vcentered tab-content-wrapper">
                                        {/* <!-- Tab content --> */}
                                        <div className="column is-5 is-offset-1">
                                            <div className="text-content">
                                                <h4 className="title is-6 is-light animated preFadeInUp fadeInUp">PROFIT</h4>
                                                <ul className="custom-bullet-list">
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Tokens Sales</span>
                                                        <br/>
                                                        <span className="item-content">1 200 000 KP (22%)</span>
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Token Exchange</span>
                                                        <br/>
                                                        <span className="item-content">1 BTC = 2200 KP, 1 ETH = 825 KP</span> 
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Transations</span>
                                                        <br/>
                                                        <span className="item-content">Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- Tab image --> */}
                                        <div className="column is-5">
                                            <img className="animated preFadeInUp fadeInUp" src={require("./assets/images/illustrations/charts.svg")} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Tab 3 --> */}
        
                                {/* <!-- Tab 4 --> */}
                                <div id="tab-4" className="tab-content">
                                    <div className="columns is-vcentered tab-content-wrapper">
                                        {/* <!-- Tab content --> */}
                                        <div className="column is-5 is-offset-1">
                                            <div className="text-content">
                                                <h4 className="title is-6 is-light animated preFadeInUp fadeInUp">REWARDS & BOUNTIES</h4>
                                                <ul className="custom-bullet-list">
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Tokens Sales</span>
                                                        <br/>
                                                        <span className="item-content">1 200 000 KP (22%)</span>
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Token Exchange</span>
                                                        <br/>
                                                        <span className="item-content">1 BTC = 2200 KP, 1 ETH = 825 KP</span> 
                                                    </li>
                                                    <li className="animated preFadeInUp fadeInUp">
                                                        <span>Transations</span>
                                                        <br/>
                                                        <span className="item-content">Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- Tab image --> */}
                                        <div className="column is-5">
                                            <img className="animated preFadeInUp fadeInUp" src={require("./assets/images/illustrations/bounty.svg")} alt=""/>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Tab 4 --> */}
                            </div>
                        </div>
        
                    </div>
                    {/* <!-- Content wrapper --> */}
                </div>
                {/* <!-- /Container --> */}
            </section>
            {/* <!-- /ICO section --> */}
        
            {/* <!-- Roadmap section --> */}
            <section className="section is-medium is-dark">
                {/* <!-- Container --> */}
                <div className="container">
                    {/* <!-- Divider --> */}
                    <div className="divider is-centered"></div>
                    {/* <!-- Title & subtitle --> */}
                    <h2 className="title is-light is-semibold has-text-centered is-spaced">Our 2018 Roadmap</h2>
                    <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper">
                        {/* <!-- Timeline --> */}
                        <div className="krypton-timeline">
                            <div className="timeline">
                                {/* <!-- Events wrapper --> */}
                                <div className="events-wrapper">
                                    {/* <!-- Events list --> */}
                                    <div className="events">
                                        <ol>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="16/01/2018" className="selected">
                                                    <span>JAN</span> 
                                                    <span>16</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="28/02/2018">
                                                    <span>FEB</span> 
                                                    <span>28</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="20/03/2018">
                                                    <span>MAR</span> 
                                                    <span>20</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="20/04/2018">
                                                    <span>APR</span> 
                                                    <span>20</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="09/05/2018">
                                                    <span>MAY</span> 
                                                    <span>9</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="30/06/2018">
                                                    <span>JUN</span> 
                                                    <span>30</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="25/07/2018">
                                                    <span>JUL</span> 
                                                    <span>25</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="12/08/2018">
                                                    <span>AUG</span> 
                                                    <span>12</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="10/09/2018">
                                                    <span>SEP</span> 
                                                    <span>10</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="15/10/2018">
                                                    <span>OCT</span> 
                                                    <span>15</span>
                                                </a>
                                            </li>
                                            {/* <!-- Event --> */}
                                            <li>
                                                <a href="#0" data-date="25/11/2018">
                                                    <span>NOV</span> 
                                                    <span>25</span>
                                                </a>
                                            </li>
                                        </ol>
        
                                        {/* <!-- Track line --> */}
                                        <span className="filling-line" aria-hidden="true"></span>
                                    </div>
                                    {/* <!-- Events list --> */}
                                </div>
                                {/* <!-- Events wrapper --> */}
        
                                <ul className="timeline-navigation">
                                    <li><a href="#0" className="prev inactive">Prev</a></li>
                                    <li><a href="#0" className="next">Next</a></li>
                                </ul> 
                                {/* <!-- .cd-timeline-navigation --> */}
                            </div> 
                            {/* <!-- .timeline --> */}
        
                            {/* <!-- Main events content --> */}
                            <div className="events-content">
                                <ol>
                                    {/* <!-- Event --> */}
                                    <li className="selected" data-date="16/01/2018">
                                        {/* <!-- Inner --> */}
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                {/* <!-- Icon --> */}
                                                <img src={require("./assets/images/icons/ico/platform-launch.svg")} alt=""/>
                                                {/* <!-- Title & date --> */}
                                                <div>
                                                    <span className="event-title">Platform Launch</span>
                                                    <small>January 16th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="28/02/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/presale.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Presale starts</span>
                                                    <small>February 28th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="20/03/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/ico.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">ICO starts</span>
                                                    <small>February 28th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="20/04/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/ico-2.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">ICO Phase 2</span>
                                                    <small>April 20th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="09/05/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/development.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Development starts</span>
                                                    <small>May 9th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="30/06/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/community.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Krypton Meetup CA</span>
                                                    <small>June 30th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="25/07/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/wallet.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Krypton Wallet release</span>
                                                    <small>July 25th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="12/08/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/blockchain.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Chain Alpha release</span>
                                                    <small>Agust 12th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="10/09/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/coins.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Token Sale</span>
                                                    <small>September 10th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="15/10/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/security.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Security Audit</span>
                                                    <small>October 15th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
        
                                    {/* <!-- Event --> */}
                                    <li data-date="25/11/2018">
                                        <div className="inner-wrapper">
                                            <div className="title-wrapper">
                                                <img src={require("./assets/images/icons/ico/blockchain.svg")} alt=""/>
                                                <div>
                                                    <span className="event-title">Chain Beta release</span>
                                                    <small>November 25th, 2018</small>
                                                </div>
                                            </div> 
                                            <p>	
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam quisquam, quae, temporibus dolores porro doloribus.
                                            </p>
                                        </div>
                                    </li>
                                </ol>
                            </div> 
                            {/* <!-- .events-content --> */}
                        </div>
                        {/* <!-- Timeline --> */}
        
                    </div>
                </div>
                {/* <!-- /Container --> */}
            </section>
            {/* <!-- /Roadmap section --> */}
        
            {/* <!-- App section --> */}
            <section className="section is-medium is-darkest">
                {/* <!-- Container --> */}
                <div className="container">
                    {/* <!-- Divider --> */}
                    <div className="divider is-centered"></div>
                    {/* <!-- Title --> */}
                    <h2 className="title is-light is-semibold has-text-centered is-spaced">Live Tracking</h2>
                    <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper is-large">
        
                        {/* <!-- Row --> */}
                        <div className="columns is-vcentered">
                            <div className="column is-5">
                                {/* <!-- Side feature --> */}
                                <div className="side-feature-content">
                                    {/* <!-- Title --> */}
                                    <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitnetwork.svg")} alt=""/> <span>Track everything with the App</span></h3>
                                    {/* <!-- Divider --> */}
                                    <div className="divider is-long"></div>
                                    <p className="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                                    {/* <!-- CTA --> */}
                                    <div className="cta-wrapper">
                                        <a href="#" className="button k-button k-primary raised has-gradient is-fat is-bold">
                                            <span className="text">Download App</span>
                                            <span className="front-gradient"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Featured image --> */}
                            <div className="column is-7">
                                <img className="side-feature" src={require("./assets/images/illustrations/krypton-app.svg")} alt=""/>
                            </div>
                        </div>
        
                    </div>
                    {/* <!-- /Content wrapper --> */}
                </div>
                {/* <!-- /Container --> */}
            </section>
            {/* <!-- /App section --> */}
        
            {/* <!-- Company section --> */}
            <section className="section is-medium has-big-dark-gradient">
                {/* <!-- Container --> */}
                <div className="container">
                    {/* <!-- Divider --> */}
                    <div className="divider is-centered"></div>
                    {/* <!-- Title & subtitle --> */}
                    <h2 className="title is-light is-semibold has-text-centered is-spaced">Our Team</h2>
                    <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper is-large">
                        <div className="columns is-vcentered">
        
                            <div className="column is-hidden-mobile"></div>
        
                            {/* <!-- Team member --> */}
                            <div className="column is-3">
                                <div className="team-member-container">
                                    {/* <!-- Card --> */}
                                    <div className="dark-card">
                                        {/* <!-- Avatar wrapper --> */}
                                        <div className="avatar">
                                            {/* <!-- Svg circle --> */}
                                            <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                {/* <!-- Track --> */}
                                                <circle className="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                {/* <!-- Stroke --> */}
                                                <circle className="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            {/* <!-- Sketeched face --> */}
                                            <img className="is-sketch" src={require("./assets/images/team/john.svg")} alt=""/>
                                            {/* <!-- Real face --> */}
                                            <img className="is-real" src={require("./assets/images/team/john.jpg")} alt=""/>
                                        </div>
                                        {/* <!-- Member meta --> */}
                                        <div className="member-info">
                                            <h4 className="title is-light is-6 is-tight">John Cambell</h4>
                                            <div className="position">Founder / Ceo</div>
                                            <p className="description">John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Team member --> */}
                            <div className="column is-3">
                                <div className="team-member-container">
                                    <div className="dark-card">
                                        <div className="avatar">
                                            <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <circle className="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            <img className="is-sketch" src={require("./assets/images/team/lucy.svg")} alt=""/>
                                            <img className="is-real" src={require("./assets/images/team/lucy.jpg")} alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4 className="title is-light is-6 is-tight">Lucy Wong</h4>
                                            <div className="position">Founder / Cfo</div>
                                            <p className="description">Lucy is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Team member --> */}
                            <div className="column is-3">
                                <div className="team-member-container">
                                    <div className="dark-card">
                                        <div className="avatar">
                                            <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <circle className="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            <img className="is-sketch" src={require("./assets/images/team/joshua.svg")} alt=""/>
                                            <img className="is-real" src={require("./assets/images/team/joshua.jpg")} alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4 className="title is-light is-6 is-tight">Joshua Stevens</h4>
                                            <div className="position">Engineer</div>
                                            <p className="description">Joshua is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="column is-hidden-mobile"></div>
                        </div>
        
                        <div className="columns is-vcentered">
        
                            <div className="column is-hidden-mobile"></div>
        
                            {/* <!-- Team member --> */}
                            <div className="column is-3">
                                <div className="team-member-container">
                                    <div className="dark-card">
                                        <div className="avatar">
                                            <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <circle className="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            <img className="is-sketch" src={require("./assets/images/team/sara.svg")} alt=""/>
                                            <img className="is-real" src={require("./assets/images/team/sara.jpg")} alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4 className="title is-light is-6 is-tight">Sara Jackson</h4>
                                            <div className="position">Founder / Ceo</div>
                                            <p className="description">Sara is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Team member --> */}
                            <div className="column is-3">
                                <div className="team-member-container">
                                    <div className="dark-card">
                                        <div className="avatar">
                                            <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
                                                <circle className="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <circle className="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg>
                                            <img className="is-sketch" src={require("./assets/images/team/mike.svg")} alt=""/>
                                            <img className="is-real" src={require("./assets/images/team/mike.jpg")} alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4 className="title is-light is-6 is-tight">Mike Kovalsky</h4>
                                            <div className="position">Founder / Ceo</div>
                                            <p className="description">Sara is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- Team member --> */}
                            <div className="column is-3">
                                <div className="team-member-container">
                                    <div className="dark-card">
                                        <div className="avatar">
                                            {/* <svg className="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="140" height="140" xmlns="http://www.w3.org/2000/svg"/>
                                                <circle className="circle-chart-background" stroke-width="1" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                                <circle className="circle-chart-circle" stroke-width="1" stroke-dasharray="33,100" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                            </svg> */}
                                            <img className="is-sketch" src={require("./assets/images/team/sandra.svg")} alt=""/>
                                            <img className="is-real" src={require("./assets/images/team/sandra.jpg")} alt=""/>
                                        </div>
                                        <div className="member-info">
                                            <h4 className="title is-light is-6 is-tight">Sandra Bernard</h4>
                                            <div className="position">Founder / Ceo</div>
                                            <p className="description">Sandra is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="column is-hidden-mobile"></div>
        
                        </div>
        
                        {/* <!-- Spaced divider --> */}
                        <div className="divider is-centered is-spacer"></div>
                        {/* <!-- Title & subtitle --> */}
                        <h2 className="title is-light is-semibold has-text-centered is-spaced">Advisors</h2>
                        <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                        {/* <!-- Content wrapper --> */}
                        <div className="content-wrapper is-large">
                            <div className="columns is-vcentered is-multiline">
        
                                {/* <!-- Advisor --> */}
                                <div className="column is-one-fifth">
                                    <div className="advisor-container has-text-centered">
                                        {/* <!-- Picture --> */}
                                        <div className="photo">
                                            <img  src={require("./assets/images/team/a1.jpg")} alt="" data-aos="fade-down" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                        </div>
                                        {/* <!-- Meta --> */}
                                        <div className="info">
                                            <div className="subtitle is-6 is-light is-compressed">Rafael Agostino</div>
                                            <div className="position">Board Member</div>
                                        </div>
                                    </div>
                                </div>
        
                                {/* <!-- Advisor --> */}
                                <div className="column is-one-fifth" data-aos-delay="300" data-aos-offset="200">
                                    <div className="advisor-container has-text-centered">
                                        <div className="photo">
                                            <img src={require("./assets/images/team/a2.jpg")} alt="" data-aos="fade-down"  data-aos-easing="ease-out-quart"/>
                                        </div>
                                        <div className="info">
                                            <div className="subtitle is-6 is-light is-compressed">Marysa Vosniak</div>
                                            <div className="position">Board Member</div>
                                        </div>
                                    </div>
                                </div>
        
                                {/* <!-- Advisor --> */}
                                <div className="column is-one-fifth">
                                    <div className="advisor-container has-text-centered">
                                        <div className="photo">
                                            <img src={require("./assets/images/team/a3.jpg")} alt="" data-aos="fade-down" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                        </div>
                                        <div className="info">
                                            <div className="subtitle is-6 is-light is-compressed">Glenn Mitchells</div>
                                            <div className="position">Board Member</div>
                                        </div>
                                    </div>
                                </div>
        
                                {/* <!-- Advisor --> */}
                                <div className="column is-one-fifth">
                                    <div className="advisor-container has-text-centered">
                                        <div className="photo">
                                            <img src={require("./assets/images/team/a4.jpg")} alt="" data-aos="fade-down" data-aos-delay="700" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                        </div>
                                        <div className="info">
                                            <div className="subtitle is-6 is-light is-compressed">Gary Simmons</div>
                                            <div className="position">Crypto Finance Analyst</div>
                                        </div>
                                    </div>
                                </div>
        
                                {/* <!-- Advisor --> */}
                                <div className="column is-one-fifth">
                                    <div className="advisor-container has-text-centered">
                                        <div className="photo">
                                            <img src={require("./assets/images/team/a5.jpg")} alt="" data-aos="fade-down" data-aos-delay="900" data-aos-offset="200" data-aos-easing="ease-out-quart"/>
                                        </div>
                                        <div className="info">
                                            <div className="subtitle is-6 is-light is-compressed">Olga Broniszewska</div>
                                            <div className="position">Crypto Finance Analyst</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Content wrapper --> */}
        
                        {/* <!-- Spaced divider --> */}
                        <div className="divider is-centered is-spacer"></div>
                        {/* <!-- Title & subtitle --> */}
                        <h2 className="title is-light is-semibold has-text-centered is-spaced">FAQ</h2>
                        <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                        {/* <!-- Content wrapper --> */}
                        <div className="content-wrapper is-large">
                            <div className="columns">
                                <div className="column is-5 is-offset-1">
        
                                    {/* <!-- Accordion --> */}
                                    <div className="accordion">
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle1" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle1">
                                                What is Blockchain ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle2" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle2">
                                                What is ICO ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle3" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle3">
                                                Where to get the Whitepaper ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle4" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle4">
                                                What is Krypton Core Innovation ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle5" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle5">
                                                When will be the platform released ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Accordion --> */}
                                </div>
        
        
                                <div className="column is-5">
        
                                    {/* <!-- Accordion --> */}
                                    <div className="accordion">
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle6" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle6">
                                                How much tokens will be sold ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle7" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle7">
                                                What happens if Soft Cap isn't reached ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle8" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle8">
                                                How much do you want to raise with the ICO ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle9" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle9">
                                                When will the tokens be distributed ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
        
                                        {/* <!-- Option --> */}
                                        <div className="accordion-option">
                                            <input type="checkbox" id="toggle10" className="accordion-toggle" />
                                            <label className="accordion-title" for="toggle10">
                                                Will their be Bounties ?
                                            </label>
                                            <div className="accordion-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- /Accordion --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Content wrapper --> */}
        
                        {/* <!-- Spaced divider --> */}
                        <div className="divider is-centered is-spacer"></div>
                        {/* <!-- Title & subtitle --> */}
                        <h2 className="title is-light is-semibold has-text-centered is-spaced">Media & Partners</h2>
                        <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                        {/* <!-- Content wrapper --> */}
                        <div className="content-wrapper is-large">
                            <div className="columns">
                                {/* <!-- Media section --> */}
                                <div className="column is-10 is-offset-1">
        
                                    {/* <!-- Post --> */}
                                    <div className="blog-post">
                                        <a href="#">
                                            {/* <!-- Featured image --> */}
                                            <div className="featured-image">
                                                <img src={require("./assets/images/media/post1.svg")} alt=""/>
                                            </div>
                                            {/* <!-- Content --> */}
                                            <div className="content">
                                                <div className="post-title">Blockchain for dummies  <span className="blog-date">27.05.2018</span></div>
                                                <p>
                                                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
                                                    bilinmeyen bir matbaacının bir hurufat numune kitabı...
                                                </p>
                                                {/* <!-- Meta --> */}
                                                <div className="post-meta">
                                                    <div className="author-block">
                                                        <div className="image is-32x32">
                                                            <img src={require("./assets/images/team/john.jpg")} alt=""/>
                                                        </div>
                                                        <div className="author-name">by John Cambell</div>
                                                    </div>
                                                    <div className="stats-block">
                                                        <div className="comments">
                                                            <i data-feather="message-circle"></i>
                                                            <span>3</span>
                                                        </div>
                                                        <div className="likes">
                                                            <i data-feather="heart"></i>
                                                            <span>9</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
        
                                    {/* <!-- Post --> */}
                                    <div className="blog-post">
                                        <a href="#">
                                            {/* <!-- Featured image --> */}
                                            <div className="featured-image">
                                                <img src={require("./assets/images/media/post2.svg")} alt=""/>
                                            </div>
                                            {/* <!-- Content --> */}
                                            <div className="content">
                                                <div className="post-title">The Krypton chain algorythm  <span className="blog-date">15.04.2018</span></div>
                                                <p>
                                                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
                                                    bilinmeyen bir matbaacının bir hurufat numune kitabı...
                                                </p>
                                                {/* <!-- Meta --> */}
                                                <div className="post-meta">
                                                    <div className="author-block">
                                                        <div className="image is-32x32">
                                                            <img src={require("./assets/images/team/joshua.jpg")} alt=""/>
                                                        </div>
                                                        <div className="author-name">by Joshua Stevens</div>
                                                    </div>
                                                    <div className="stats-block">
                                                        <div className="comments">
                                                            <i data-feather="message-circle"></i>
                                                            <span>7</span>
                                                        </div>
                                                        <div className="likes">
                                                            <i data-feather="heart"></i>
                                                            <span>29</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
        
                                    {/* <!-- Post --> */}
                                    <div className="blog-post">
                                        <a href="#">
                                            {/* <!-- Featured image --> */}
                                            <div className="featured-image">
                                                <img src={require("./assets/images/media/post3.svg")} alt=""/>
                                            </div>
                                            {/* <!-- Content --> */}
                                            <div className="content">
                                                {/* <!--div className="rounded"></div--> */}
                                                <div className="post-title">What is Crypto mining ?  <span className="blog-date">02.04.2018</span></div>
                                                <p>
                                                    Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
                                                    bilinmeyen bir matbaacının bir hurufat numune kitabı...
                                                </p>
                                                {/* <!-- Meta --> */}
                                                <div className="post-meta">
                                                    <div className="author-block">
                                                        <div className="image is-32x32">
                                                            <img src={require("./assets/images/team/sandra.jpg")} alt=""/>
                                                        </div>
                                                        <div className="author-name">by Sandra Bernard</div>
                                                    </div>
                                                    <div className="stats-block">
                                                        <div className="comments">
                                                            <i data-feather="message-circle"></i>
                                                            <span>31</span>
                                                        </div>
                                                        <div className="likes">
                                                            <i data-feather="heart"></i>
                                                            <span>48</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- /Media section --> */}
                            </div>
        
                            {/* <!-- CTA --> */}
                            <div className="cta-wrapper has-text-centered">
                                <a href="#" className="button k-button k-primary raised has-gradient is-fat is-bold">
                                    <span className="text">More Articles</span>
                                    <span className="front-gradient"></span>
                                </a>
                            </div>
        
                            {/* <!-- Partner logos --> */}
                            <div className="partners">
                                {/* <!-- Partner --> */}
                                <div className="partner-item">
                                    <img src={require("./assets/images/clients/cryptomarket.svg")} alt=""/>
                                </div>
                                {/* <!-- Partner --> */}
                                <div className="partner-item">
                                    <img src={require("./assets/images/clients/bitit.svg")} alt=""/>
                                </div>
                                {/* <!-- Partner --> */}
                                <div className="partner-item">
                                    <img src={require("./assets/images/clients/coin.svg")} alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Content wrapper --> */}
        
                    </div>
                    {/* <!-- /Content wrapper --> */}
                </div>
            </section>
            {/* <!-- /Company section --> */}
        
            {/* <!-- Contact section --> */}
            <section className="section is-medium is-darkest">
                {/* <!-- Container --> */}
                <div className="container">
                    {/* <!-- Divider --> */}
                    <div className="divider is-centered"></div>
                    {/* <!-- Title & subtitle --> */}
                    <h2 className="title is-light is-semibold has-text-centered is-spaced">Get in Touch</h2>
                    <h4 className="subtitle is-6 is-light has-text-centered is-compact">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.</h4>
        
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper is-large">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                {/* <!-- Contact icons --> */}
                                <div className="contact-icons">
                                    {/* <!-- Phone --> */}
                                    <a className="contact-icon" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                        <img className="is-phone" src={require("./assets/images/icons/phone.svg")} alt=""/>
                                    </a>
                                    {/* <!-- Mail --> */}
                                    <a className="contact-icon" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                        <img className="is-phone" src={require("./assets/images/icons/mail.svg")} alt=""/>
                                    </a>
                                    {/* <!-- Telegram --> */}
                                    <a className="contact-icon" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                        <img className="is-telegram" src={require("./assets/images/logo/telegram.svg")} alt=""/>
                                    </a>
                                </div> 
                            </div>
                        </div>
        
                        <div className="columns">
                            <div className="column is-6 is-offset-3">
                                {/* <!-- Form --> */}
                                <form className="contact-form">
                                    {/* <!-- Field --> */}
                                    <div className="control-material is-secondary">      
                                        <input className="material-input " type="text" required/>
                                        <span className="material-highlight"></span>
                                        <span className="bar"></span>
                                        <label>Name</label>
                                    </div>
                                    {/* <!-- Field --> */}
                                    <div className="control-material is-secondary">      
                                        <input className="material-input " type="email" required/>
                                        <span className="material-highlight"></span>
                                        <span className="bar"></span>
                                        <label>Email</label>
                                    </div>
                                    {/* <!-- Field --> */}
                                    <div className="control-material is-secondary">  
                                        <textarea rows="3"></textarea>
                                        <span className="material-highlight"></span>
                                        <span className="bar"></span>
                                        <label>Message </label>
                                    </div>
        
                                    {/* <!-- Submit --> */}
                                    <div className="has-text-centered">
                                        <button className="button is-button k-button k-primary raised has-gradient is-fat is-bold is-submit">
                                            <span className="text">Send message</span>
                                            <span className="front-gradient"></span>
                                        </button>
                                    </div>
                                </form>
                                {/* <!-- /Form --> */}
                            </div>
                        </div>
        
        
                    </div>
                    {/* <!-- Content wrapper --> */}
                </div>
                {/* <!-- Container --> */}
            </section>
            {/* <!-- Contact section --> */}
        </div>
        
        <footer className="krypton-footer">
            <div className="container">
                {/* <!-- Logo --> */}
                <div className="footer-logo">
                    <a href="#">
                        <img className="rotating" src={require("./assets/images/logo/krypton-gradient.svg")} alt=""/>
                        <div className="brand-name">Krypton</div>
                        <div className="brand-subtitle">Blockchain brought to another level</div>
                    </a>
                </div>
                
                {/* <!-- Columns --> */}
                <div className="columns footer-columns is-vcentered">
                    <div className="column is-4">
                        {/* <!-- Links group --> */}
                        <ul className="footer-links">
                            <li>
                                <a href="#">Token</a>
                            </li>
        
                            <li>
                                <a href="#">ICO</a>
                            </li>
        
                            <li>
                                <a href="#">Roadmap</a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Newsletter --> */}
                    <div className="column is-4">
                        <div className="subscribe-block">
                            <form>
                                {/* <!-- Field --> */}
                                <div className="control">
                                    {/* <!-- Special input --> */}
                                    <input className="krypton-subscribe-input" type="email" name="email" placeholder=""/>
                                    <button className="subscribe-button">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Links group --> */}
                    <div className="column is-4">
                        <ul className="footer-links">
                            <li>
                                <a href="#">Register</a>
                            </li>
        
                            <li>
                                <a href="#">Media</a>
                            </li>
        
                            <li>
                                <a href="#">Telegram</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Copyright --> */}
                <p className="k-copyright">© 2018 | Krypton. All Rights Reserved</p>
                <br/>
                {/* <!-- Made by --> */}
                <p className="coded-by">Designed and Coded by <a href="https://cssninja.io" target="_blank">Css Ninja</a></p>
            </div>
            
            {/* <!-- Absolute image --> */}
            <img className="solar-system" src={require("./assets/images/bg/solar.svg")} alt=""/>
        </footer>        
        {/* <!-- Core js -->     */}



      </div>
    );
  }
}

export default Home;

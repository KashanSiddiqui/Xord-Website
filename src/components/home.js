import React, { Component } from 'react';
import './assets/css/bulma.css';
import './assets/css/core.css';
import './assets/fonts/cryptofont/css/cryptofont.min.css';
import './assets/js/modalvideo/modal-video.min.css';
import './assets/js/aos/aos.css';
import AOS from 'aos';
import Navbar from './navbar';
import Faq from './faq'
import Media from './media';
import SpaceDivider from './spaceDivider';
import Advisor from './advisor';
import OurTeam from './ourTeam';
import ContactForm from './contactForm';
import Footer from './footer';
import OurApps from './ourApps';



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
                <div className="infraloader is-active" style={{ backgroundColor: 'transparent' }}></div>
                <div className="dark-wrapper">
                    {/* <!-- Landing page Hero --> */}
                    <section className="hero is-fullheight is-transparent">
                        <Navbar />

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
                                            <img src={require("./assets/images/illustrations/buildings.svg")} alt="" />
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
                                        <li><a><img className="hero-logo" src={require("./assets/images/clients/cryptomarket.svg")} alt="" /></a></li>
                                        <li><a><img className="hero-logo" src={require("./assets/images/clients/bitit.svg")} alt="" /></a></li>
                                        <li><a><img className="hero-logo" src={require("./assets/images/clients/coin.svg")} alt="" /></a></li>
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
                                            <img src={require("./assets/images/icons/chained.svg")} alt="" data-aos="fade-up" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart" />
                                            <h4 className="title is-6 is-tight is-light">Chaining</h4>
                                            <p>Supercharged features to make you happy and lorem ipsum sit dolor amet</p>
                                        </div>
                                    </div>
                                    {/* <!-- Feature --> */}
                                    <div className="column is-4">
                                        <div className="feature">
                                            <img src={require("./assets/images/icons/stacked.svg")} alt="" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart" />
                                            <h4 className="title is-6 is-tight is-light">Stacking</h4>
                                            <p>Supercharged features to make you happy and lorem ipsum sit dolor amet</p>
                                        </div>
                                    </div>
                                    {/* <!-- Feature --> */}
                                    <div className="column is-4">
                                        <div className="feature">
                                            <img src={require("./assets/images/icons/compact.svg")} alt="" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart" />
                                            <h4 className="title is-6 is-tight is-light">Managing</h4>
                                            <p>Supercharged features to make you happy and lorem ipsum sit dolor amet</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Play video button --> */}
                                <div className="cta-wrapper has-text-centered">
                                    <div className="video-button levitate js-modal-btn" data-video-id="6WG7D47tGb0">
                                        <img src={require("./assets/images/icons/play.svg")} alt="" />
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

                                            <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitbanner.svg")} alt="" /> <span>Token Building</span></h3>
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
                                        <img className="side-feature" src={require("./assets/images/illustrations/token.svg")} alt="" />
                                    </div>
                                </div>

                                <div className="columns is-vcentered">
                                    {/* <!-- Feature image desktop --> */}
                                    <div className="column is-7 is-hidden-mobile">
                                        <img className="side-feature" src={require("./assets/images/illustrations/blockchain-blocks.svg")} alt="" />
                                    </div>

                                    {/* <!-- Feature content --> */}
                                    <div className="column is-5">
                                        <div className="side-feature-content">

                                            <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitnetwork.svg")} alt="" /> <span>Cascading Blockchain</span></h3>
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
                                        <img className="side-feature" src={require("./assets/images/illustrations/blockchain-blocks.svg")} alt="" />
                                    </div>
                                </div>

                                <div className="columns is-vcentered">
                                    {/* <!-- Feature content --> */}
                                    <div className="column is-5 is-offset-1">
                                        <div className="side-feature-content">

                                            <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitmining.svg")} alt="" /> <span>Crypto Farming</span></h3>
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
                                        <img className="side-feature" src={require("./assets/images/illustrations/crypto-mining.svg")} alt="" />
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
                                                                <br />
                                                                <span className="item-content">Presale starts on Apr 8 2018 (9:00am GMT)</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Sale</span>
                                                                <br />
                                                                <span className="item-content">Token sales starts on Jun 8 2018 (12:00am GMT)</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Bonus</span>
                                                                <br />
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
                                                                <br />
                                                                <span className="item-content">1 200 000 KP (22%)</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Token Exchange</span>
                                                                <br />
                                                                <span className="item-content">1 BTC = 2200 KP, 1 ETH = 825 KP</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Transations</span>
                                                                <br />
                                                                <span className="item-content">Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!-- Tab image --> */}
                                                <div className="column is-5">
                                                    <img className="animated preFadeInUp fadeInUp" src={require("./assets/images/illustrations/tokens.svg")} alt="" />
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
                                                                <br />
                                                                <span className="item-content">1 200 000 KP (22%)</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Token Exchange</span>
                                                                <br />
                                                                <span className="item-content">1 BTC = 2200 KP, 1 ETH = 825 KP</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Transations</span>
                                                                <br />
                                                                <span className="item-content">Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!-- Tab image --> */}
                                                <div className="column is-5">
                                                    <img className="animated preFadeInUp fadeInUp" src={require("./assets/images/illustrations/charts.svg")} alt="" />
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
                                                                <br />
                                                                <span className="item-content">1 200 000 KP (22%)</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Token Exchange</span>
                                                                <br />
                                                                <span className="item-content">1 BTC = 2200 KP, 1 ETH = 825 KP</span>
                                                            </li>
                                                            <li className="animated preFadeInUp fadeInUp">
                                                                <span>Transations</span>
                                                                <br />
                                                                <span className="item-content">Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* <!-- Tab image --> */}
                                                <div className="column is-5">
                                                    <img className="animated preFadeInUp fadeInUp" src={require("./assets/images/illustrations/bounty.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/platform-launch.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/presale.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/ico.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/ico-2.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/development.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/community.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/wallet.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/blockchain.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/coins.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/security.svg")} alt="" />
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
                                                        <img src={require("./assets/images/icons/ico/blockchain.svg")} alt="" />
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
                            {/* <!-- /Roadmap section --> */}
                            {/* <!-- /Container --> */}
                        </div>
                        
                        </section>

                    <OurApps/>

                    {/* <!-- Company section --> */}
                    <section className="section is-medium has-big-dark-gradient">
                        {/* <!-- Container --> */}
                        <div className="container">
                                {/* <!-- Spaced divider --> */}
                                <SpaceDivider/>
                                {/* <!-- /Content wrapper --> */}
                                <OurTeam/>
                                {/* <!-- Spaced divider --> */}
                                <SpaceDivider />
                                {/* <!-- /Content wrapper --> */}
                                <Advisor/>
                                {/* <!-- Spaced divider --> */}
                                <SpaceDivider />
                                {/* <!-- /Content wrapper --> */}
                                <Faq />
                                {/* <!-- Spaced divider --> */}
                                <SpaceDivider />
                                {/* <!-- /Content wrapper --> */}
                                <Media />

                            </div>
                            {/* <!-- /Content wrapper --> */}
                        
                    </section>
                    {/* <!-- /Company section --> */}

                   <ContactForm/>
                </div>

                <Footer/>



            </div>
        );
    }
}

export default Home;

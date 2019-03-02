import React, { Component } from 'react';
import './assets/css/bulma.css';
import './assets/css/core.css';
import './assets/fonts/cryptofont/css/cryptofont.min.css';
import './assets/js/modalvideo/modal-video.min.css';
import './assets/js/aos/aos.css'
class Ico extends Component {
  render() {
    return (
      <div className="Ico">
        <section className="hero is-fullheight has-big-dark-gradient">
    <div className="hero-head">

        {/* <!-- Cloned navbar --> */}
        {/* {{> navbar-clone}} */}

        {/* <!-- Static navbar --> */}
       {/* {{> navbar}} */}

    </div>

    {/* <!-- Hero Image and Title --> */}
    <div className="hero-body">
        <div className="container">
            <div className="columns is-vcentered">

                {/* <!-- Landing page Title --> */}
                <div className="column is-6 landing-caption">
                    <h1 className="title is-3 is-light is-semibold is-spaced main-title has-text-centered">Login to ICO</h1>
                    <form className="login-form">
                        {/* <!-- Field --> */}
                        <div className="control-material is-primary">      
                            <input className="material-input " type="email" required/>
                            <span className="material-highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
                        {/* <!-- Field --> */}
                        <div className="control-material is-primary">      
                            <input className="material-input " type="password" required/>
                            <span className="material-highlight"></span>
                            <span className="bar"></span>
                            <label>Password</label>
                        </div>
                        
                        {/* <!-- Submit --> */}
                        <div>
                            <button className="button is-button k-button k-primary raised has-gradient is-bold">
                                <span className="text">Login</span>
                                <span className="front-gradient"></span>
                            </button>
                        </div>
                    </form>

                </div>
                {/* <!-- Hero image --> */}
                <div className="column is-6 ico-countdown">
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
                                <span className="text">Register for ICO</span>
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
{/* <!-- /Landing page Hero --> </div>*/}
    

    </div>
    ) ;
    }
}

export default Ico;

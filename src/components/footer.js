import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <footer className="krypton-footer">
                    <div className="container">
                        {/* <!-- Logo --> */}
                        <div className="footer-logo">
                            <a href="#">
                                <img className="rotating" src={require("./assets/images/logo/krypton-gradient.svg")} alt="" />
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
                                            <input className="krypton-subscribe-input" type="email" name="email" placeholder="" />
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
                        <br />
                        {/* <!-- Made by --> */}
                        <p className="coded-by">Designed and Coded by <a href="https://cssninja.io" target="_blank">Css Ninja</a></p>
                    </div>

                    {/* <!-- Absolute image --> */}
                    <img className="solar-system" src={require("./assets/images/bg/solar.svg")} alt="" />
                </footer>
                {/* <!-- Core js -->     */}  
      </div>
    );
  }
}

export default Footer;
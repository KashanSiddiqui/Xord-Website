import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className="ContactForm">
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
                                                <img className="is-phone" src={require("./assets/images/icons/phone.svg")} alt="" />
                                            </a>
                                            {/* <!-- Mail --> */}
                                            <a className="contact-icon" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                                <img className="is-phone" src={require("./assets/images/icons/mail.svg")} alt="" />
                                            </a>
                                            {/* <!-- Telegram --> */}
                                            <a className="contact-icon" data-aos="fade-up" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart">
                                                <img className="is-telegram" src={require("./assets/images/logo/telegram.svg")} alt="" />
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
                                                <input className="material-input " type="text" required />
                                                <span className="material-highlight"></span>
                                                <span className="bar"></span>
                                                <label>Name</label>
                                            </div>
                                            {/* <!-- Field --> */}
                                            <div className="control-material is-secondary">
                                                <input className="material-input " type="email" required />
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
    );
  }
}

export default ContactForm;
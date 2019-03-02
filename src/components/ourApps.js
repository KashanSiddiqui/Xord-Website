import React, { Component } from 'react';

class OurApps extends Component {
  render() {
    return (
      <div className="OurApps">
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
                                            <h3 className="title is-4 is-light"><img src={require("./assets/images/icons/ico/bitnetwork.svg")} alt="" /> <span>Track everything with the App</span></h3>
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
                                        <img className="side-feature" src={require("./assets/images/illustrations/krypton-app.svg")} alt="" />
                                    </div>
                                </div>

                            </div>
                            {/* <!-- /Content wrapper --> */}
                        </div>
                        {/* <!-- /Container --> */}
                    </section>
                    {/* <!-- /App section --> */}
      </div>
    );
  }
}

export default OurApps;
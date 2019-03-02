import React, { Component } from 'react';

class Advisor extends Component {
  render() {
    return (
      <div className="Advisor">
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
                                                    <img src={require("./assets/images/team/a1.jpg")} alt="" data-aos="fade-down" data-aos-delay="100" data-aos-offset="200" data-aos-easing="ease-out-quart" />
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
                                                    <img src={require("./assets/images/team/a2.jpg")} alt="" data-aos="fade-down" data-aos-easing="ease-out-quart" />
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
                                                    <img src={require("./assets/images/team/a3.jpg")} alt="" data-aos="fade-down" data-aos-delay="500" data-aos-offset="200" data-aos-easing="ease-out-quart" />
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
                                                    <img src={require("./assets/images/team/a4.jpg")} alt="" data-aos="fade-down" data-aos-delay="700" data-aos-offset="200" data-aos-easing="ease-out-quart" />
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
                                                    <img src={require("./assets/images/team/a5.jpg")} alt="" data-aos="fade-down" data-aos-delay="900" data-aos-offset="200" data-aos-easing="ease-out-quart" />
                                                </div>
                                                <div className="info">
                                                    <div className="subtitle is-6 is-light is-compressed">Olga Broniszewska</div>
                                                    <div className="position">Crypto Finance Analyst</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
      </div>
    );
  }
}

export default Advisor;
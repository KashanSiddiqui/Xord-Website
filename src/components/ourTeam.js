import React, { Component } from 'react';

class OurTeam extends Component {
  render() {
    return (
      <div className="OurTeam">
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
                                                    <img className="is-sketch" src={require("./assets/images/team/john.svg")} alt="" />
                                                    {/* <!-- Real face --> */}
                                                    <img className="is-real" src={require("./assets/images/team/john.jpg")} alt="" />
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
                                                    <img className="is-sketch" src={require("./assets/images/team/lucy.svg")} alt="" />
                                                    <img className="is-real" src={require("./assets/images/team/lucy.jpg")} alt="" />
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
                                                    <img className="is-sketch" src={require("./assets/images/team/joshua.svg")} alt="" />
                                                    <img className="is-real" src={require("./assets/images/team/joshua.jpg")} alt="" />
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
                                                    <img className="is-sketch" src={require("./assets/images/team/sara.svg")} alt="" />
                                                    <img className="is-real" src={require("./assets/images/team/sara.jpg")} alt="" />
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
                                                    <img className="is-sketch" src={require("./assets/images/team/mike.svg")} alt="" />
                                                    <img className="is-real" src={require("./assets/images/team/mike.jpg")} alt="" />
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
                                                    <img className="is-sketch" src={require("./assets/images/team/sandra.svg")} alt="" />
                                                    <img className="is-real" src={require("./assets/images/team/sandra.jpg")} alt="" />
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
                                </div>
                                </div>
      
    );
  }
}

export default OurTeam;
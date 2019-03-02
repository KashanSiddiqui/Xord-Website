import React, { Component } from 'react';

class Media extends Component {
  render() {
    return (
      <div className="Media">
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
      </div>
    );
  }
}

export default Media;
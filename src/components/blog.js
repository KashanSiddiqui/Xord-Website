import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        
<div className="media-wrapper">
    {/* <!-- Landing page Hero --> */}
    <section className="hero">
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
                    <div className="column is-5 is-offset-1 landing-caption">
                        <div className="divider"></div>
                        <h1 className="title is-1 is-light is-semibold is-spaced main-title">News & Media</h1>
                        <h2 className="subtitle is-6 is-light is-thin">
                            Cryptocurrency brought to the next level. Join our ICO for supercharged rates.
                        </h2>

                    </div>
                    {/* <!-- Hero image --> */}
                    <div className="column is-6">
                        <figure className="image">
                            <img src={require("./assets/images/illustrations/media.svg")} alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="section">
        <div className="container">
            <div className="columns">

                <div className="column is-9">
                    {/* <!-- Content wrapper --> */}
                    <div className="content-wrapper">

                        {/* <!-- Post --> */}
                        <div className="blog-post">
                            <a href="blog-single.html">
                                {/* <!-- Featured image --> */}
                                <div className="featured-image">
                                    <img src={require("./assets/images/media/post4.svg")} alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="content">
                                    <div className="post-title">Featured on Coinative  <span className="blog-date">02.06.2018</span></div>
                                    <p>
                                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
                                        bilinmeyen bir matbaacının bir hurufat numune kitabı...
                                    </p>
                                    {/* <!-- Meta --> */}
                                    <div className="post-meta">
                                        <div className="author-block">
                                            <div className="image is-32x32">
                                                <img src={require("./assets/images/team/glenn.jpg")} alt=""/>
                                            </div>
                                            <div className="author-name">
                                                <span>by Glenn Dunward</span>
                                                <span><small>in</small> Featured</span>
                                            </div>
                                        </div>
                                        <div className="stats-block">
                                            <div className="comments">
                                                <i data-feather="message-circle"></i>
                                                <span>0</span>
                                            </div>
                                            <div className="likes">
                                                <i data-feather="heart"></i>
                                                <span>39</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- Post --> */}
                        <div className="blog-post">
                            <a href="blog-single.html">
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
                                            <div className="author-name">
                                                <span>by John Cambell</span>
                                                <span><small>in</small> Blockchain</span>
                                            </div>
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
                            <a href="blog-single.html">
                                {/* <!-- Featured image --> */}
                                <div className="featured-image">
                                    <img src={require("./assets/images/media/post5.svg")} alt=""/>
                                </div>
                                {/* <!-- Content --> */}
                                <div className="content">
                                    <div className="post-title">Featured on Bit It  <span className="blog-date">23.04.2018</span></div>
                                    <p>
                                        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı
                                        bilinmeyen bir matbaacının bir hurufat numune kitabı...
                                    </p>
                                    {/* <!-- Meta --> */}
                                    <div className="post-meta">
                                        <div className="author-block">
                                            <div className="image is-32x32">
                                                <img src={require("./assets/images/team/helen.jpg")} alt=""/>
                                            </div>
                                            <div className="author-name">
                                                <span>by Helen Miller</span>
                                                <span><small>in</small> Featured</span>
                                            </div>
                                        </div>
                                        <div className="stats-block">
                                            <div className="comments">
                                                <i data-feather="message-circle"></i>
                                                <span>29</span>
                                            </div>
                                            <div className="likes">
                                                <i data-feather="heart"></i>
                                                <span>184</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        {/* <!-- Post --> */}
                        <div className="blog-post">
                            <a href="blog-single.html">
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
                                            <div className="author-name">
                                                <span>by Joshua Stevens</span>
                                                <span><small>in</small> Blockchain</span>
                                            </div>
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
                            <a href="blog-single.html">
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
                                            <div className="author-name">
                                                <span>by Sandra Bernard</span>
                                                <span><small>in</small> Cryptomining</span>
                                            </div>
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


                        {/* <!-- CTA --> */}
                        <div className="cta-wrapper has-text-centered">
                            <a href="#" className="button k-button k-primary raised has-gradient is-bold">
                                <span className="text">Load More</span>
                                <span className="front-gradient"></span>
                            </a>
                        </div>

                    </div>
                    {/* <!-- /Content wrapper --> */}
                </div>

                <div className="column is-3">

                    <div className="search-widget">
                        <div className="control">
                            {/* <!-- Field --> */}
                            <div className="control-material is-primary">      
                                <input className="material-input " type="email" required/>
                                <span className="material-highlight"></span>
                                <span className="bar"></span>
                                <label>Search articles</label>
                                <i data-feather="search"></i>
                            </div>
                        </div>
                    </div>

                    <div className="categories-widget">
                        <div className="widget-title">
                            Categories
                        </div>

                        <ul className="categories-list">
                            <li>
                                <a className="is-active" href="#">
                                    <span>All Posts</span>
                                    <span className="tag">53</span>
                                </a>
                            </li>
                            <li><a href="#">Blockchain</a></li>
                            <li><a href="#">Crypto Market</a></li>
                            <li><a href="#">Cryptomining</a></li>
                            <li><a href="#">Featured</a></li>
                        </ul>
                    </div>

                    <div className="tags-widget">
                        <div className="widget-title">
                            Tags
                        </div>

                        <div className="tags">
                            <span className="tag">Bitcoin</span>
                            <span className="tag">Cryptocurrency</span>
                            <span className="tag">Blockchain</span>
                            <span className="tag">Ethereum</span>
                        </div>
                    </div>

                    <div className="archives-widget">
                        <div className="widget-title">
                            Archives
                        </div>
                        <div className="select" tabindex="1">
                            <input className="selectopt" name="test" type="radio" id="opt1" checked/>
                            <label for="opt1" className="option">Select Month</label>
                            <input className="selectopt" name="test" type="radio" id="opt2"/>
                            <label for="opt2" className="option">January</label>
                            <input className="selectopt" name="test" type="radio" id="opt3"/>
                            <label for="opt3" className="option">February</label>
                            <input className="selectopt" name="test" type="radio" id="opt4"/>
                            <label for="opt4" className="option">March</label>
                            <input className="selectopt" name="test" type="radio" id="opt5"/>
                            <label for="opt5" className="option">April</label>
                            <input className="selectopt" name="test" type="radio" id="opt6"/>
                            <label for="opt6" className="option">May</label>
                            <input className="selectopt" name="test" type="radio" id="opt7"/>
                            <label for="opt7" className="option">June</label>
                            <input className="selectopt" name="test" type="radio" id="opt8"/>
                            <label for="opt8" className="option">July</label>
                            <input className="selectopt" name="test" type="radio" id="opt9"/>
                            <label for="opt9" className="option">August</label>
                            <input className="selectopt" name="test" type="radio" id="opt10"/>
                            <label for="opt10" className="option">September</label>
                            <input className="selectopt" name="test" type="radio" id="opt11"/>
                            <label for="opt11" className="option">October</label>
                            <input className="selectopt" name="test" type="radio" id="opt12"/>
                            <label for="opt12" className="option">November</label>
                            <input className="selectopt" name="test" type="radio" id="opt13"/>
                            <label for="opt13" className="option">December</label>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>
      </div>
    );
  }
}

export default Blog;

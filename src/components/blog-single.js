import React, { Component } from 'react';
import './assets/css/bulma.css';
import './assets/css/core.css';
import './assets/fonts/cryptofont/css/cryptofont.min.css';
import './assets/js/modalvideo/modal-video.min.css';
import './assets/js/aos/aos.css'
import AOS from 'aos';
import Navbar from './navbar';

class BlogSingle extends Component {
    componentDidMount() {
        AOS.init();
        AOS.refresh();
    }
  render() {
    return (
      <div className="BlogSingle">
        

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
                    <div className="column is-5 is-offset-1 post-caption">
                        <div className="divider"></div>
                        <h1 className="title is-2 is-light is-semibold is-spacx`ed main-title">What is Cryptomining ?</h1>

                        <div className="author-block">
                            <div className="image is-32x32">
                                <img src={require("./assets/images/team/sandra.jpg")} alt=""/>
                            </div>
                            <div className="author-name">
                                <span>by Sandra Bernard</span>
                                <span><small>in</small> Cryptomining<small>, March 28th</small></span>
                            </div>
                        </div>

                    </div>
                    {/* <!-- Hero image --> */}
                    <div className="column is-5">
                        <figure className="image">
                            <img className="blog-featured" src={require("./assets/images/media/post3.svg")} alt=""/>

                            <a href="javascript:void(0);" className="like-button">
                                <i data-feather="heart"></i>
                                <span className="like-overlay"></span>
                            </a>

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
                    <div className="post-body">
                        <p className="intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <h2>A way to earn Crypto-money</h2>

                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                        <blockquote>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.</blockquote>

                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                        <h2>How it Works</h2>

                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                        <h2>Conclusion</h2>

                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>

                        <hr/>
                    </div>


                    {/* <!-- /Content wrapper --> */}

                    <div className="comments">
                        <div className="comments-heading">
                            3 Comments
                        </div>

                        <div className="comments-list">

                            <article className="media is-comment">
                                <figure className="media-left">
                                    <p className="image is-48x48">
                                        <img src="https://i.pinimg.com/originals/64/57/c2/6457c2ea29e1ede7e4d7b6de3f7181fb.jpg"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="user-meta">
                                        <span>Dave Wrapper</span>
                                        <small>4 days ago</small>
                                    </div> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor.</p>

                                    <div className="post-controls">
                                        <span><i data-feather="message-circle"></i></span>
                                        <span><i  data-feather="edit-2"></i></span>
                                        <span><i  data-feather="trash"></i></span>
                                    </div>
                                </div>
                            </article>

                            <article className="media is-comment">
                                <figure className="media-left">
                                    <p className="image is-48x48">
                                        <img src="https://bitcoin.org/img/icons/opengraph.png"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="user-meta">
                                        <span>Alina Novalsky</span>
                                        <small>a week ago</small>
                                    </div> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis. Lorem ipsum dolor sit amet.</p>

                                    <div className="post-controls">
                                        <span><i data-feather="message-circle"></i></span>
                                        <span><i  data-feather="edit-2"></i></span>
                                        <span><i  data-feather="trash"></i></span>
                                    </div>
                                </div>
                            </article>

                            <article className="media is-comment">
                                <figure className="media-left">
                                    <p className="image is-48x48">
                                        <img src="https://i.pinimg.com/originals/64/57/c2/6457c2ea29e1ede7e4d7b6de3f7181fb.jpg"/>
                                    </p>
                                </figure>
                                <div className="media-content">
                                    <div className="user-meta">
                                        <span>Dan Novak</span>
                                        <small>march 23 2018</small>
                                    </div> 
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem.</p>

                                    <div className="post-controls">
                                        <span><i data-feather="message-circle"></i></span>
                                        <span><i  data-feather="edit-2"></i></span>
                                        <span><i  data-feather="trash"></i></span>
                                    </div>
                                </div>
                            </article>

                            <div className="is-form">
                                <img src="https://assets.materialup.com/uploads/ee42f656-513d-4f92-806b-b0db02ac61a4/avatar.jpg"/>
                                <div className="control">
                                    <label>Join the discussion</label>
                                    <textarea className="textarea" rows="5"></textarea>
                                </div>
                            </div>
                            <div className="comment-controls has-text-right">
                                <a href="#" className="button k-button k-secondary raised has-gradient is-bold">
                                    <span className="text">Post Comment</span>
                                    <span className="front-gradient"></span>
                                </a>
                            </div>
                        </div>
                    </div>

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
                                <a href="#">
                                    <span>All Posts</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Blockchain</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Crypto Market</span>
                                </a>
                            </li>
                            <li>
                                <a className="is-active" href="#">
                                    <span>Cryptomining</span>
                                    <span className="tag">6</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>Featured</span>
                                </a>
                            </li>
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

                    <div className="posts-widget">
                        <div className="widget-title">
                            Recent posts
                        </div>
                        <div className="recent-posts">
                            <div className="recent-post">
                                <img src={require("./assets/images/team/glenn.jpg")}/>
                                <div className="meta">
                                    <a href="#">Featured on Coinative</a>
                                    <span>by Glenn Dunward</span>
                                </div>
                            </div>

                            <div className="recent-post">
                                <img src={require("./assets/images/team/john.jpg")}/>
                                <div className="meta">
                                    <a href="#">Blockchain for Dummies</a>
                                    <span>by John Cambell</span>
                                </div>
                            </div>

                            <div className="recent-post">
                                <img src={require("./assets/images/team/joshua.jpg")}/>
                                <div className="meta">
                                    <a href="#">The Krypton chain algorythm</a>
                                    <span>by Joshua Stevens</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="follow-us is-small">

                <div>
                    <a href="#">
                        <svg aria-labelledby="simpleicons-gitlab-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.919 1.263C4.783.84 4.185.84 4.05 1.26L1.386 9.449.044 13.587c-.121.375.014.789.331 1.023L12 23.054l11.625-8.443c.318-.235.453-.647.33-1.024"/>
                        </svg>
                    </a>
                </div>

                <div >
                    <a href="#">
                        <svg aria-labelledby="simpleicons-telegram-icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9.028 20.837c-.714 0-.593-.271-.839-.949l-2.103-6.92L22.263 3.37"/>
                            <path d="M9.028 20.837c.552 0 .795-.252 1.105-.553l2.941-2.857-3.671-2.214"/>
                            <path d="M9.403 15.213l8.89 6.568c1.015.56 1.748.271 2-.942l3.62-17.053c.372-1.487-.564-2.159-1.534-1.72L1.125 10.263c-1.45.582-1.443 1.392-.264 1.753l5.455 1.7L18.94 5.753c.595-.36 1.143-.167.694.232"/>
                        </svg>
                    </a>
                </div>

                <div >
                    <a href="#">
                        <svg aria-labelledby="simpleicons-messenger-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.11S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
                        </svg>
                    </a>
                </div>

                <div >
                    <a href="#">
                        <svg aria-labelledby="simpleicons-slack-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.879 10.995l1.035 3.085 3.205-1.074-1.035-3.074-3.205 1.08v-.017z"/>
                            <path d="M18.824 14.055l-1.555.521.54 1.61c.218.65-.135 1.355-.786 1.574-.15.045-.285.067-.435.063-.511-.015-.976-.338-1.155-.849l-.54-1.607-3.21 1.073.539 1.608c.211.652-.135 1.358-.794 1.575-.15.048-.285.067-.435.064-.51-.015-.976-.34-1.156-.85l-.539-1.619-1.561.524c-.15.045-.285.061-.435.061-.511-.016-.976-.345-1.155-.855-.225-.66.135-1.364.78-1.575l1.56-.525L7.5 11.76l-1.551.525c-.141.048-.285.066-.428.064-.495-.016-.975-.338-1.141-.848-.209-.65.135-1.354.796-1.574l1.56-.52-.54-1.605c-.21-.654.136-1.359.796-1.575.659-.22 1.363.136 1.574.783l.539 1.608L12.3 7.544l-.54-1.605c-.209-.645.135-1.35.789-1.574.652-.211 1.359.135 1.575.791l.54 1.621 1.555-.51c.651-.219 1.356.135 1.575.779.218.654-.135 1.359-.784 1.575l-1.557.524 1.035 3.086 1.551-.516c.652-.211 1.358.135 1.575.795.22.66-.135 1.365-.779 1.574l-.011-.029zm4.171-5.356C20.52.456 16.946-1.471 8.699 1.005.456 3.479-1.471 7.051 1.005 15.301c2.475 8.245 6.046 10.17 14.296 7.694 8.245-2.475 10.17-6.046 7.694-14.296z"/>
                        </svg>
                    </a>
                </div>

                <div >
                    <a href="#">
                        <svg aria-labelledby="simpleicons-linkedin-icon" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>


      </div>
    );
  }
}

export default BlogSingle;

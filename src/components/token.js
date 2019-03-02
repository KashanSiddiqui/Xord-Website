import React, { Component } from 'react';

class Token extends Component {
  render() {
    return (
      <div className="Token">
        

        
<div class="token-wrapper">
    {/* <!-- Landing page Hero --> */}
    <section class="hero is-medium">
        <div class="hero-head">
{/* 
            <!-- Cloned navbar -->
            {{> navbar-clone}}

            <!-- Static navbar -->
            {{> navbar}} */}

        </div>

        <div class="hero-body has-text-centered">
            <div class="columns">
                <div class="column is-6 is-offset-3">
                    <div class="token-image">
                        <img src={require("./assets/images/illustrations/krypton-token.svg")}/>
                    </div>
                    <h1 class="title is-2 is-light is-semibold is-spaced main-title">The K Token</h1>
                    <h2 class="subtitle is-5 is-light is-thin">
                        Cryptocurrency brought to the next level. Join our ICO for supercharged rates.
                    </h2>
                    {/* <!-- CTA --> */}
                    <p>
                        <a href="start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                            <span class="text">More details</span>
                            <span class="front-gradient"></span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section is-medium">
        <div class="container">

            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">

                <div class="columns is-vcentered">
                    {/* <!-- Feature content --> */}
                    <div class="column is-5 is-offset-1">
                        <div class="side-feature-content">

                            <h3 class="title is-4 is-light">Network Governance</h3>
                            <div class="divider"></div>
                            <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                        </div>
                    </div>

                    {/* <!-- Feature image --> */}
                    <div class="column is-7">
                        <img class="side-feature" src={require("./assets/images/illustrations/krypton-token-network.svg")} alt=""/>
                    </div>
                </div>

                <div class="columns is-vcentered">
                    {/* <!-- Feature image --> */}
                    <div class="column is-7">
                        <img class="side-feature" src={require("./assets/images/illustrations/token-stack.svg")} alt=""/>
                    </div>

                    {/* <!-- Feature content --> */}
                    <div class="column is-5">
                        <div class="side-feature-content">

                            <h3 class="title is-4 is-light">Value Stacking</h3>
                            <div class="divider"></div>
                            <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                        </div>
                    </div>
                </div>

                <div class="columns is-vcentered">
                    {/* <!-- Feature content --> */}
                    <div class="column is-5 is-offset-1">
                        <div class="side-feature-content">

                            <h3 class="title is-4 is-light">Increased Security</h3>
                            <div class="divider"></div>
                            <p class="is-light">Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit.</p>
                        </div>
                    </div>

                    {/* <!-- Feature image --> */}
                    <div class="column is-7">
                        <img class="side-feature" src={require("./assets/images/illustrations/token-lock.svg")} alt=""/>
                    </div>
                </div>
            </div>

            {/* <!-- Spaced divider --> */}
            <div class="token-documentation">
                <div class="documentation-title">
                    Documentation
                </div>
                <div class="columns is-vcentered">
                    <div class="column is-5">
                        <div class="columns">
                            <div class="column is-6">
                                <ul>
                                    <li class="is-active">English</li>
                                    <li>Español</li>
                                    <li>Français</li>
                                    <li>Deutch</li>
                                </ul>
                            </div>
                            <div class="column is-6">
                                <ul>
                                    <li>العربية</li>
                                    <li>русский</li>
                                    <li>Polski</li>
                                    <li>日本語</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div class="column is-7">
                        <div class="columns is-vcentered has-text-centered">
                            
                            <div class="column is-4">
                                <div class="document-block has-text-centered">
                                    <img src={require("./assets/images/icons/whitepaper.svg")}/>
                                    <a href="start" class="button k-button k-primary raised has-gradient is-bold">
                                        <span class="text">Whitepaper</span>
                                        <span class="front-gradient"></span>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="column is-4">
                                <div class="document-block has-text-centered">
                                    <img src={require("./assets/images/icons/techpaper.svg")}/>
                                    <a href="start" class="button k-button k-primary raised has-gradient is-bold">
                                        <span class="text">Techpaper</span>
                                        <span class="front-gradient"></span>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="column is-4">
                                <div class="document-block has-text-centered">
                                    <img src={require("./assets/images/icons/livechat.svg")}/>
                                    <a href="start" class="button k-button k-secondary raised has-gradient is-bold">
                                        <span class="text">Live Chat</span>
                                        <span class="front-gradient"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Spaced divider --> */}
            <div class="divider is-centered is-spacer"></div>
            {/* <!-- Title & subtitle --> */}
            <h2 class="title is-light is-semibold has-text-centered is-spaced">ICO Repartition</h2>

            {/* <!-- Content wrapper --> */}
            <div class="content-wrapper">

                <div class="columns is-ico-details">
                    <div class="column is-4">
                        <div class="details-title">ICO structure</div>
                        <ul>
                            <li>Maximum token amount: 24 000 000</li>
                            <li>Tokens for sale: 18 000 000</li>
                            <li>Token: KPT</li>
                            <li>Target amount: $25 000 000</li>
                            <li>Token price: from $0.5 to $1.2</li>
                            <li>Know Your Customer (KYC): No</li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <div class="details-title">Pre ICO</div>
                        <ul>
                            <li>Maximum token amount: 24 000 000</li>
                            <li>Tokens for sale: 18 000 000</li>
                            <li>Token: KPT</li>
                        </ul>
                        <div class="details-title">ICO</div>
                        <ul>
                            <li>Maximum token amount: 24 000 000</li>
                            <li>Tokens for sale: 18 000 000</li>
                            <li>Token: KPT</li>
                        </ul>
                    </div>
                    <div class="column is-4">
                        <div class="details-title">Token Utility</div>
                        <ul>
                            <li>Maximum token amount: 24 000 000</li>
                            <li>Tokens for sale: 18 000 000</li>
                            <li>Token: KPT</li>
                        </ul>
                    </div>
                </div>

                <div class="columns is-vcentered has-text-centered">
                    {/* <!-- ICO repartition --> */}
                    <div class="column is-6 is-offset-3">
                        {/* <!-- Diagram --> */}
                        <img class="ico-repartition" src={require("./assets/images/illustrations/ico-shares.svg")}/>
                        {/* <!-- Legend block --> */}
                        <div class="repartition-details">
                            {/* <!-- Legend item --> */}
                            <div class="repartition-block">
                                <div class="color-dot is-reward"></div>
                                <div class="share-title">Core</div>
                                <div class="percentage">10%</div>
                            </div>
                            {/* <!-- Legend item --> */}
                            <div class="repartition-block">
                                <div class="color-dot is-presale"></div>
                                <div class="share-title">Pre ICO</div>
                                <div class="percentage">25%</div>
                            </div>
                            {/* <!-- Legend item --> */}
                            <div class="repartition-block">
                                <div class="color-dot is-sale"></div>
                                <div class="share-title">ICO</div>
                                <div class="percentage">65%</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- CTA --> */}
                <div class="cta-wrapper has-text-centered">
                    <a href="start" class="button k-button k-primary raised has-gradient is-fat is-bold">
                        <span class="text">Join the ICO</span>
                        <span class="front-gradient"></span>
                    </a>
                </div>

                <div class="currencies">
                    <i class="cf cf-btc"></i>
                    <i class="cf cf-etc"></i>
                    <i class="cf cf-ltc"></i>
                </div>
            </div>
            
           
        </div>
    </section>
</div>
      </div>
    );
  }
}

export default Token;

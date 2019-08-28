import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Slide } from 'react-slideshow-image';
import Countdown from 'react-countdown-now';
import Iframe from 'react-iframe'
import { Helmet } from "react-helmet"

require('../../assets/css/bootstrap.min.css')
require('../../assets/fonts/line-icons.css')
// require('../../assets/scss/slicknav.scss')
require('../../assets/css/nivo-lightbox.css')
// require('../../assets/css/animate.css')

require('../../assets/scss/main.scss')
require('../../assets/scss/responsive.scss')
const slide1 = require('../../assets/img//slider/slide_1.jpg')
const slideImages = [
  slide1,
  // 'images/slide_3.jpg',
  // 'images/slide_4.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          <span>Slide 2</span>
        </div>
      </div>      
    </Slide>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Helmet>
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@GraphQLHongKong"/>
        <meta name="twitter:title" content="GraphQL Hong Kong 2019"/>
        <meta name="twitter:description" content="A one-day conference on Sept, 30th by & for the GraphQL community"/>
        <meta name="twitter:image" content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site" content="@GraphQLHongKong"/>
        <meta property="og:title" content="GraphQL Hong Kong 2019"/>
        <meta property="og:description" content="A one-day conference on Sept, 30th by & for the GraphQL community"/>
        <meta property="og:image" content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"/>
        <meta property="og:image:url" content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"/>
        <meta name="description" content="A one-day conference on Sept, 30th by & for the GraphQL community"/>
        <meta name="keywords" content="GraphQL,2019,conference,Asia,HongKong,GraphQLHongKong"/>
        <meta property="og:url" content="https://graphql-hongkong.org/"/>
      </Helmet>
    {/* <!-- Header Area wrapper Starts --> */}
    <header id="header-wrap">
      {/* <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
        <div className="container">
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
            <a href="#" className="navbar-brand">
            <img style={{          
              height: '40px',   
              width: '40px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }} src={require('../images/graphql-hongkong-logo.png')} alt="GraphQL Hong Kong Logo" />
            </a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item">
                <a className="nav-link" href="#header-wrap">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#speakers">
                  Speakers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#intro">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#agenda">
                  Agenda
                </a>
              </li>
              
              {/* <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="#faq">
                  Faq
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#sponsors">
                  Sponsors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  tickets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#venue">
                  venue
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#coc">
                  coc
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-map">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Mobile Menu Start --> */}
        {          
          <ul className="mobile-menu">          
          <li>
            <a className="page-scrool" href="#speakers">Speakers</a>
          </li>          
          <li>
            <a className="page-scroll" href="#agenda">Agenda</a>
          </li>
          <li>
            <a className="page-scroll" href="#pricing">Tickets</a>
          </li>          
        </ul>        
        }        
        {/* <!-- Mobile Menu End --> */}

      </nav>
      {/* <!-- Navbar End --> */}

      <div style={{
        paddingTop: '20vh',
        height: '85vh',
        backgroundImage: `
        linear-gradient(
          rgba(15,15,15, 0.25), 
          rgba(15,15,15, 0.25)
        ),
          url(${slide1})
        `,
        backgroundSize: 'cover',
        textAlign: 'center'
      }}>        
        <h1 className="mainTitle">GraphQL Hong Kong</h1>
        <div className="navbar-brand">
          <img style={{          
            height: '200px',   
            width: '200px',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto',
            marginBottom: '20px'
          }} src={require('../images/graphql-hongkong-logo.png')} alt="GraphQL Hong Kong Logo" />
        </div>
        <h2 class="title-date" style={{
          color: 'white',
          // color: '#e535ab',
          // background: 'white',
          fontSize: '2.5em',
          width: 'max-content',
          margin: '0 auto'
        }}>
        30<sup>th</sup> Sept, 2019
        </h2>
        <h2 class="title-date" style={{
          color: 'white',
          // color: '#e535ab',
          // background: 'white',
          fontSize: '2.5em',
          width: 'max-content',
          margin: '0 auto'
        }}>
        8/F The Wave, Kwun Tong
        </h2>
        <br/><br/>
        <div className="col-12 text-center">
          <a href="#buy-tickets" className="btn btn-common" style={{marginRight: 10}}>Get Tickets</a>
          <a href="https://drive.google.com/open?id=1JGb7sDK7ZOyrqJGgNGfRcXQy6ZIP9EVe" target="_blank" className="btn btn-common">Become a sponsor</a>
        </div>
      </div>
      {/* <!-- Main Carousel Section Start --> */}
      {/* <Slideshow /> */}
      {/* <div id="main-slide" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#main-slide" data-slide-to="0" className="active"></li>
          <li data-target="#main-slide" data-slide-to="1"></li>
          <li data-target="#main-slide" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="assets/img/slider/slide1.jpg" alt="First slide" />
            <div className="carousel-caption d-md-block">
              <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
              <h1 className="wow fadeInDown heading" data-wow-delay=".4s">Design Thinking Conference</h1>
              <a href="#" className="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">Get Ticket</a>
              <a href="#" className="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">Explore More</a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="assets/img/slider/slide2.jpg" alt="Second slide" />
            <div className="carousel-caption d-md-block">
              <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
              <h1 className="wow bounceIn heading" data-wow-delay=".7s">22 Amazing Speakers</h1>
              <a href="#" className="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">Learn More</a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="assets/img/slider/slide3.jpg" alt="Third slide" />
            <div className="carousel-caption d-md-block">
              <p className="fadeInUp wow" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
              <h1 className="wow fadeInUp heading" data-wow-delay=".6s">Book Your Seat Now!</h1>
              <a href="#" className="fadeInUp wow btn btn-common btn-lg" data-wow-delay=".8s">Explore</a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
          <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-left"></i></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
          <span className="carousel-control" aria-hidden="true"><i className="lni-chevron-right"></i></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}
      {/* <!-- Main Carousel Section End --> */}

    </header>
    {/* <!-- Header Area wrapper End --> */}

    {/* <!-- Coundown Section Start --> */}
    {/* <section className="countdown-timer section-padding">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="heading-count">
              <h2 className="wow fadeInDown" data-wow-delay="0.2s">Event Will Start In</h2>
              <Countdown
                date={'Sat, 29 Sep 2019 13:0:00'}
                intervalDelay={0}
                precision={3}
                renderer={props => <h2 style={{
                  fontSize: '2rem',
                  padding: '1em',
                  color: 'white',
                  backgroundColor: '#e535ab'
                }}>{props.days} days</h2>}
              />
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <div id="clock" className="time-count"></div>
            </div>
            <a href="pricing.html" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s">Add to My Calender</a>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!-- Coundown Section End --> */}

     {/* <!-- Team Section Start --> */}
     <div id="speakers" style={{ paddingBottom: 40 }}></div>
     <section id="speakers"  className="section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Who's Speaking?</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
            </div>
          </div>
        </div>
        <div className="row">



          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
              <a href="https://twitter.com/dabit3" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/nader-dabit.jpg')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/dabit3" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/dabit3" target="_blank">Nader Dabit</a></h3>
                  <p>Developer Advocate, AWS</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
              <a href="https://twitter.com/shrutikapoor08" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/shruti-kapoor.png')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/shrutikapoor08" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/shrutikapoor08" target="_blank">Shruti Kapoor</a></h3>
                  <p>Software Engineer, Paypal</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
              <a href="https://twitter.com/Tirumarai" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/tirumarai-selvan.png')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/Tirumarai" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/Tirumarai" target="_blank">Tirumarai Selvan</a></h3>
                  <p>Serverless Manager, Hasura</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
              <a href="https://twitter.com/UriGoldshtein" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/uri-goldshtein.jpg')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/UriGoldshtein" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/UriGoldshtein" target="_blank">Uri Goldshtein</a></h3>
                  <p>Founder, The Guild</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1s">
              <a href="https://twitter.com/thorwebdev" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/thor-schaeff.png')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/thorwebdev" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/thorwebdev" target="_blank">Thor Schaeff</a></h3>
                  <p>Developer Advocate, Stripe</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1s">
              <a href="https://twitter.com/VoodooLawz" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/laura-ambrose.jpg')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/VoodooLawz" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                <h3><a href="https://twitter.com/VoodooLawz" target="_blank">Laura Ambrose</a></h3>
                  <p>Front End Developer, KintoHub</p>
                </div>
              </a>  
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
              <a href="https://twitter.com/tanaypratap" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/tanay-pratap.png')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/tanaypratap" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/tanaypratap" target="_blank">Tanay Pratap</a></h3>
                  <p>Software Engineer, Microsoft</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1s">
              <a href="https://twitter.com/chatsidhartha" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/sidharta-chatterjee.jpg')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/chatsidhartha" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/chatsidhartha" target="_blank">Sidharta Chatterjee</a></h3>
                  <p>Software Engineer, Gatsby</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1s">
              <a href="https://twitter.com/lnmunhoz" target="_blank">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/lucas-munhoz.png')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/lnmunhoz" target="_blank"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/lnmunhoz" target="_blank">Lucas Munhoz</a></h3>
                  <p>Software Engineer, BrikL</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

        </div>

        <br/><br/>
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Masters of ceremonies</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
              <a href="https://twitter.com/bgever">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/bart-verkoeijen.png')} alt="Bart Verkoeijen" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/bgever"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/bgever">Bart Verkoeijen</a></h3>
                  <p>Developer Advocate, KintoHub</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Organizers</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
              <a href="https://twitter.com/codingcoop">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/joseph-cooper.png')} alt="Joseph Cooper" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/codingcoop"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/codingcoop">Joseph Cooper</a></h3>
                  <p>Founder & CEO, KintoHub</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
              <a href="https://twitter.com/swcarlosrj">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/carlos-rufo.jpg')} alt="Carlos Rufo" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/swcarlosrj"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/swcarlosrj">Carlos Rufo</a></h3>
                  <p>Organizer, GraphQL Hong Kong</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
              <a href="https://twitter.com/meixnertobias">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/tobias-meixner.jpg')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="https://twitter.com/meixnertobias"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="https://twitter.com/meixnertobias">Tobias Meixner</a></h3>
                  <p>Co-Founder & CTO, BrikL</p>
                </div>
              </a>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
        </div>
        {/* <a href="speakers.html" className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Speakers</a> */}
      </div>
    </section>
    {/* <!-- Team Section End --> */}

     {/* <!-- Services Section Start --> */}
    <div id="intro" style={{ paddingBottom: 40 }}></div>
    <section id="intro" className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Why GraphQL Hong Kong?</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">1<sup>st</sup> local GraphQL event in HK</p> */}
            </div>
          </div>
        </div>
        <div className="row services-wrapper">
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.2s">
              <div className="icon">
                <i className="lni-heart"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Get Inspired</a></h3>
                <p>With talks from community members and companies from the GraphQL ecosystem.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.4s">
              <div className="icon">
                <i className="lni-user"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Meet New Faces</a></h3>
                <p>At the first international GraphQL event in Hong Kong.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div className="icon">
                <i className="lni-mic"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Fresh Tech Insights</a></h3>
                <p>Expect new announcements and launches at the event.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.8s">
              <div className="icon">
                <i className="lni-users"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Networking Session</a></h3>
                <p>Connect with people at the event to learn more about the people behind and in the GraphQL community.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="1s">
              <div className="icon">
                <i className="lni-world"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Global Event</a></h3>
                <p>An event in the middle of Asia and an international city.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
              <div className="icon">
                <i className="lni-tshirt"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Free Swags</a></h3>
                <p>Get your stickers and swags from our sponsors and partners.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Services Section End --> */}
    

    {/* <!-- About Section Start --> */}
    {/* <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">About This Event</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="about-item">
              <img className="img-fluid" src="assets/img/about/img1.jpg" alt="" />
              <div className="about-text">
                <h3><a href="#">Wanna Know Our Mission?</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                <a className="btn btn-common btn-rm" href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="about-item">
              <img className="img-fluid" src="assets/img/about/img2.jpg" alt="" />
              <div className="about-text">
                <h3><a href="#">What you will learn?</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                <a className="btn btn-common btn-rm" href="#">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-4">
            <div className="about-item">
              <img className="img-fluid" src="assets/img/about/img3.jpg" alt="" />
              <div className="about-text">
                <h3><a href="#">What are the benifits?</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
                <a className="btn btn-common btn-rm" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section> */}
    {/* <!-- About Section End --> */}

    {/* <!-- Counter Area Start--> */}
    <section className="counter-section section-padding">
      <div className="container">
        <div className="row">
          {/* <!-- Counter Item --> */}
          <div className="col-md-6 col-lg-2 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.3s">
              {/* <div className="icon"><i className="lni-map"></i></div> */}
              {/* <p>Wst. Conference Center</p> */}
              {/* <span>San Francisco, CA</span> */}
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.6s">
              <div className="icon"><i className="lni-timer"></i></div>
              <p>September 30th, 2019</p>
              <span>10:00am – 18:00pm</span>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.9s">
              <div className="icon"><i className="lni-users"></i></div>
              <p>100 Available Seats</p>       
              <span>Hurry-up! few tickets are left</span>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon"><i className="lni-coffee-cup"></i></div>
              <p>Free Lunch &amp; Snacks</p>
              <span>Don’t miss it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Counter Area End--> */}

    {/* <!-- Schedule Section Start --> */}
    <div id="agenda" style={{ paddingBottom: 40 }}></div>
    <section id="agenda" className="schedule section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Agenda</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
        </div>
        <div className="schedule-area row wow fadeInDown" data-wow-delay="0.3s">
          <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
            <div className="table-responsive">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="monday-tab" data-toggle="tab" role="tab" aria-controls="monday" aria-expanded="true">
                    <div className="item-text">
                      <h4>Monday</h4>
                      <h5>30th September</h5>
                    </div>
                  </a>
                </li>                
              </ul>
            </div>
          </div>
          <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="monday" role="tabpanel" aria-labelledby="monday-tab">
                <div id="accordion">
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" width={60} style={{borderRadius: 0}} src={require('../images/graphql-hongkong-logo.png')} alt="" />
                        </div>                     
                        <span className="time">10:00am - 11:00am</span>
                        <h4>Registration</h4>
                        <h5 className="name">Get ready meeting new folks & enjoying coffee/tea</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">11:00am - 11:30am</span>
                        <h4>Welcome & Intro</h4>
                        <h5 className="name">Joseph Cooper, Carlos Rufo &amp; Tobias Meixner</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/nader-dabit.jpg')} alt="" />
                        </div>                     
                        <span className="time">11:30am - 12:00pm</span>
                        <h4>Infrastructure as Code - Building APIs with GraphQL Transform</h4>
                        <h5 className="name">Nader Dabit - Developer Advocate, AWS</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/shruti-kapoor.png')} alt="" />
                        </div>                     
                        <span className="time">12:00pm - 12:30pm</span>
                        <h4>GraphQL & State Management with React Hooks</h4>
                        <h5 className="name">Shruti Kapoor - Software Engineer, Paypal</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/tirumarai-selvan.png')} alt="" />
                        </div>                     
                        <span className="time">12:30pm - 1:00pm</span>
                        <h4>Cloud native GraphQL: Making GraphQL work in a Microservices Architecture</h4>
                        <h5 className="name">Tirumarai Selvan - Serverless Manager, Hasura</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">1:00pm - 2:00pm</span>
                        <h4>Lunch break</h4>
                        <h5 className="name">Time to recover energies with our delicatessen catering</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/uri-goldshtein.jpg')} alt="" />
                        </div>                     
                        <span className="time">2:00pm - 2:30pm</span>
                        <h4>GraphQL - From beginning to Full Stack Production environment</h4>
                        <h5 className="name">Uri Goldshtein - Founder, The Guild</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/thor-schaeff.png')} alt="" />
                        </div>                     
                        <span className="time">2:30pm - 3:00pm</span>
                        <h4>Making it all fit together with React and GraphQL at Stripe</h4>
                        <h5 className="name">Thor Schaeff - Developer Advocate, Stripe</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/laura-ambrose.jpg')} alt="" />
                        </div>                     
                        <span className="time">3:00pm - 3:30pm</span>
                        <h4>Converting your React HTTP over to React Apollo / GraphQL</h4>
                        <h5 className="name">Laura Ambrose - Front End Developer, KintoHub</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">3:30pm - 4:00pm</span>
                        <h4>Coffee break</h4>
                        <h5 className="name">Last break before ending, get a coffee/tea & connect</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/sidharta-chatterjee.jpg')} alt="" />
                        </div>                     
                        <span className="time">4:00pm - 4:30pm</span>
                        <h4>How Gatsby uses GraphQL </h4>
                        <h5 className="name">Sidharta Chatterjee - Software Engineer, Gatsby</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/lucas-munhoz.png')} alt="" />
                        </div>                     
                        <span className="time">4:30pm - 5:00pm</span>
                        <h4>GraphQL @ BrikL</h4>
                        <h5 className="name">Lucas Munhoz - Software Engineer, BrikL</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src={require('../images/tanay-pratap.png')} alt="" />
                        </div>                     
                        <span className="time">5:00pm - 5:30pm</span>
                        <h4>The Magic that is Middleware</h4>
                        <h5 className="name">Tanay Pratap - Software Engineer, Microsoft</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">5:30pm - 6:00pm</span>
                        <h4>Closing & Announcements</h4>
                        <h5 className="name">Joseph Cooper, Carlos Rufo &amp; Tobias Meixner</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">6:00pm - 9:00pm</span>
                        <h4>After-party</h4>
                        <h5 className="name">TBD</h5>
                      </div>
                    </div>                    
                  </div>
                </div>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Schedule Section End --> */}
    <div style={{ paddingBottom: 40 }}></div>


    {/* <!-- Gallary Section Start --> */}
    <section style={{
      display: 'none'
    }} id="gallery" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">our event gallery</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div> 
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-1.jpg" alt="" />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-1.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-2.jpg" alt="" />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-2.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-3.jpg" alt="" />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-3.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-4.jpg" alt="" />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-4.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-5.jpg" alt="" />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-5.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="ccol-md-6 col-sm-6 col-lg-4">
            <div className="gallery-box">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/gallery/img-6.jpg" alt="" />
              </div>
              <div className="overlay-box text-center">
                <a className="lightbox" href="assets/img/gallery/img-6.jpg">
                  <i className="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-xs-12">
            <a href="#" className="btn btn-common">Browse All</a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Gallary Section End --> */}

    {/* <!-- Ask Question Section Start --> */}
    {/* <section id="faq" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Ask Question?</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <div className="header-title" data-toggle="collapse" data-target="#questionOne" aria-expanded="true" aria-controls="collapseOne">
                    <i className="lni-pencil"></i> How to make a new event?
                  </div>
                </div>
                <div id="questionOne" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">
                      <i className="lni-pencil"></i>  Which payment methods do you accept? 
                    </div>
                </div>
                <div id="questionTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionThree" aria-expanded="false" aria-controls="questionThree">
                    <i className="lni-pencil"></i>  Which document can i bring to meeting?   
                  </div>
                </div>
                <div id="questionThree" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                   <i className="lni-pencil"></i> Who can join at the live event venue?
                  </div>
                </div>
                <div id="questionFour" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div className="accordion">
              <div className="card">
                <div className="card-header" id="headingOne2">
                  <div className="header-title" data-toggle="collapse" data-target="#questionOne2" aria-expanded="true" aria-controls="collapseOne">
                    <i className="lni-pencil"></i> How to make a new event?
                  </div>
                </div>
                <div id="questionOne2" className="collapse" aria-labelledby="headingOne" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo2">
                    <div className="header-title" data-toggle="collapse" data-target="#questionTwo2" aria-expanded="false" aria-controls="questionTwo">
                      <i className="lni-pencil"></i>  Which payment methods do you accept? 
                    </div>
                </div>
                <div id="questionTwo2" className="collapse" aria-labelledby="headingTwo" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                    <i className="lni-pencil"></i>How to set price? 
                  </div>
                </div>
                <div id="questionFive" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <div className="header-title" data-toggle="collapse" data-target="#questionSix" aria-expanded="false" aria-controls="questionSix">
                    <i className="lni-pencil"></i>  What our price list? 
                  </div>
                </div>
                <div id="questionSix" className="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!-- Ask Question Section End --> */}

    {/* <!-- Sponsors Section Start --> */}
    <div id="sponsors" style={{ paddingBottom: 40 }}></div>
    <section id="sponsors" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Sponsors</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
        </div>        
        <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2>Platinum</h2>
            <a href="https://aws.amazon.com/amplify">
              <div className="spnsors-logo">
                <img style={{
                  width: '200px',
                  height: '200px',
                  objectFit: 'contain'
                }} className="img-fluid" src={require('../images/aws-amplify.png')} alt="AWS Amplify"/>
              </div>
            </a>
          </div>                 
        </div>
        <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2>Gold</h2>
            <a href="https://hasura.io">
              <div className="spnsors-logo">
                <img style={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'contain'
                }} className="img-fluid" src={require('../images/hasura.svg')} alt="Hasura"/>
              </div>
            </a>
          </div>        
        </div>
        <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h3>We are looking for sponsors and partners</h3>
          </div>        
        </div>
        {/* <h2>Silver</h2> */}
        {/* <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s"> */}
          {/* <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-01.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-02.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-03.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-04.png" alt=""/></a>
            </div>
          </div>           */}
        {/* </div> */}
        {/* <h2>Bronze</h2> */}
        {/* <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s"> */}
          {/* <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-01.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-02.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-03.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-3 col-sm-3 col-xs-12">
            <div className="spnsors-logo">
              <a href="#"><img className="img-fluid" src="assets/img/sponsors/logo-04.png" alt=""/></a>
            </div>
          </div>           */}
        {/* </div> */}
      </div>
      <div className="col-12 text-center">
        <a href="https://drive.google.com/open?id=142I7_ANRwxX40PG7ryLwJ5e30Ey_i0p5" target="_blank" className="btn btn-common">Become a sponsor</a>
      </div>

      <div style={{
        marginTop: '5em'
      }} className="col-12 text-center">
        <h3>Partners</h3>
        <a href="https://www.graphql-asia.org/" target="_blank"><img style={{
              width: '150px',
              height: '150px',
              objectFit: 'contain',
              margin: "0 10px"
        }} className="img-fluid" src={require('../images/GraphQL-Asia-Logo.png')} alt="GraphQL Asia"/></a>
        <a href="https://2019.jsdc.tw" target="_blank"><img style={{
              width: '300px',
              height: '300px',
              objectFit: 'contain',
              margin: "0 10px"
        }} className="img-fluid" src={require('../images/JSDC-2019.png')} alt="JSDC 2019"/></a>
      </div>

      
      <div style={{
        marginTop: '5em'
      }} className="col-12 text-center">
        <h3>Organised by</h3>
        <div className="org-logo">
            <a href="https://kintohub.com/" target="_blank"><img style={{
              width: '300px',
              height: '200px',
              objectFit: 'contain',
              margin: '0 10px'
            }} className="img-fluid" src={require('../images/kintohub.png')} alt="KintoHub"/></a>
            <a href="https://www.brikl.io/" target="_blank"><img style={{
              width: '300px',
              height: '200px',
              objectFit: 'contain',
              margin: '0 10px'
            }} className="img-fluid" src={require('../images/BrikL.svg')} alt="BrikL"/></a>
        </div>                    
      </div>

    </section>
    {/* <!-- Sponsors Section End --> */}

    {/* <!-- Ticket Pricing Area Start --> */}
    <div id="pricing" style={{ paddingBottom: 40 }}></div>
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Tickets</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
           
          </div>
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            <div className="price-block-wrapper wow fadeInUp" data-wow-delay="0.3s">
              <div className="icon">
                <i className="lni-layers"></i>
              </div>
              <div className="colmun-title">
                <h5>Standard Ticket</h5>
              </div>
              <div className="price">
                <h2>HK$245</h2>
                <p>100 Tickets Available</p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Access to all talks</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Coffee Breaks</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Dinner</span></li>
                  {/* <li><i className="lni-close"></i><span className="text">Access to all areas</span></li> */}
                  {/* <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li> */}
                  {/* <li><i className="lni-close"></i><span className="text">Workshop</span></li> */}
                </ul>
              </div>
              <a href="#buy-tickets" className="btn btn-common">Get them now!</a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Ticket Pricing Area End --> */}
    <div id="buy-tickets" style={{ paddingBottom: 40 }}></div>
    <section id="buy-tickets" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Tickets</h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              <Iframe styles={{
                border:'none'
              }} url="https://l.oveit.com/events/embed?id=832f785449"
                width="100%"
                height="350px"  
                className="ticketFrame"                
              />
            </div>
          </div>
        </div>
      </div>
    </section>
         {/* <!-- Map Section Start --> */}    
    <div id="venue" style={{ paddingBottom: 100 }}></div>
    <section id="venue-map">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Venue</h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12" style={{
            textAlign: 'center',
            paddingBottom: 40
          }}>
            <h3 style={{marginBottom: 40}}>GraphQL Hong Kong 2019 will be held in</h3>
            <a href="https://thewave.com.hk/events-space/kwun-tong/" target="_blank"><img width={400} src={require('../images/the-wave.png')}/></a>
            <h3 style={{marginBottom: 20}}>8th Floor, 4 Hing Yip St, Kwun Tong</h3>
            {/* <div className="gallery-box">
              <div className="img-thumb">
              <svg style={{
                  marginTop: '2em',
                  width: '200px'
                }} id="Ic_Legacy_Logo" viewBox="0 0 190 43"><g fill-rule="nonzero"><path d="M84.904 26H72v2.822l.4-.04.01-.047c.087-.417.863-1.215 1.818-1.215h2.882L77.112 42h2.815l-.016-14.47h2.948c.973 0 1.612.514 1.72.998l.013.053.408-.012L84.972 26h-.068zM2.871 25.359A10.524 10.524 0 0 0 0 32.559c0 2.963 1.185 5.657 3.337 7.585C5.393 41.986 8.142 43 11.077 43c1.539 0 4.554-.264 7.464-2.032l.113-.068.346-4.173-.544-.07-.08.17c-2.136 4.507-5.5 4.507-6.766 4.507-5.672 0-8.256-4.746-8.256-9.156 0-4.265 2.559-8.57 8.276-8.57 1.753 0 4.941.579 6.6 4.447l.092.214.533-.164-.348-4.35-.142-.06C15.701 22.521 13.552 22 11.398 22c-3.481 0-6.43 1.162-8.527 3.359zM22.07 26H22l.005.368.035.017c.238.12.503.733.503 1.418v14.093h2.782l-.011-7.242 1.217.03c1.094.058 1.525.746 2.072 1.617l.068.108.35.561c.595.954 1.41 2.262 2.257 3.457.61.86 1.37 1.353 2.324 1.51.68.112 2.04.068 2.553-.08l.613-.152.232-.056-.845-.248c-.341-.1-.878-.324-1.6-1.116-.447-.49-1.17-1.587-2.266-3.247a2882.216 2882.216 0 0 0-1.106-1.67c-.29-.403-.776-1.056-1.592-1.471 1.568-.487 3.106-1.844 3.106-3.865 0-.574-.155-1.675-1.19-2.607C30.457 26.479 28.82 26 26.643 26H22.07zm4.761 1.433c2.855.115 2.937 2.408 2.937 2.668 0 2.308-1.794 3.127-3.33 3.127l-1.116-.022v-5.748c.291-.023.825-.052 1.51-.025zM49.076 26H49l.052.396.032.016c.24.116.466.688.466 1.18L49.534 42h4.715c3.113 0 5.689-.937 7.45-2.71A7.929 7.929 0 0 0 64 33.75c0-1.239-.432-3.11-1.644-4.644-1.625-2.06-4.202-3.105-7.66-3.105h-5.62zm3.26 1.535l1.476.004c.393.005 1.384.028 2.08.13 4.633.68 5.133 4.479 5.133 6.08 0 1.313-.242 3.181-1.394 4.626-1.13 1.418-2.9 2.136-5.265 2.136-.564 0-1.265-.001-2.03-.035v-12.94zM68.938 26H66l.01.388.033.018c.27.143.446.663.446 1.325V42h2.507L69 26h-.062zM122.94 26H120l.03.36.03.017c.264.142.443.685.443 1.354V42h2.493L123 26h-.06zM45.805 26.001H37l.05.376.03.015c.24.12.49.686.49 1.423L37.567 42h8.793L47 39.165l-.354-.13-.1.159c-.727 1.162-1.466 1.316-4.017 1.316-.91.02-1.796-.061-2.351-.114v-6.529h4.448v-1.442h-4.448v-4.978l3.606.042c.813 0 1.706.79 1.785 1.268l.01.055.36-.008L45.868 26h-.063v.001zM159.8 26H151l.018.41.035.016c.237.12.49.648.49 1.388L151.54 42h8.817l.642-2.838-.399-.125-.098.156c-.73 1.163-1.462 1.317-3.986 1.317-.912.02-1.8-.061-2.357-.114v-6.529h4.46v-1.442h-4.46v-4.978l3.617.042c.998 0 1.748.77 1.748 1.27v.07l.41-.028-.07-2.801h-.065zM92.306 23.285c-.914.693-2.008 1.968-2.029 4.107v.062c0 2.63 1.588 4.013 4.147 5.382l-.01-.027c.067.057.29.179.984.552 2.137 1.132 3.68 1.95 3.68 4.252 0 .79-.283 1.929-1.074 2.756-.66.69-1.546 1.033-2.635 1.02-3.262-.035-4.416-3.053-4.761-4.35l-.06-.225-.548.096.152 4.284.118.071c1.041.64 2.783 1.708 5.278 1.735 1.768.018 3.56-.741 4.795-2.032C101.428 39.835 102 38.4 102 36.817c0-3.475-2.359-4.779-4.86-6.16l-.47-.261c-2.56-1.357-3.765-2.183-3.748-3.887.011-1.157.837-2.986 3.006-2.963 2.521.027 3.914 2.029 4.198 3.284l.052.227.543-.073-.186-3.71-.1-.071C98.94 22.14 97.068 22.008 96.33 22c-1.46-.015-2.929.453-4.025 1.285zM127.23 30.133c-.022 2.182 1.33 3.288 3.52 4.365l.826.408c1.724.84 2.864 1.394 2.864 2.963 0 .274-.058 1.224-.81 1.946-.521.5-1.245.75-2.148.74-2.586-.025-3.535-1.974-3.87-3.134l-.064-.216-.548.088.128 3.319.124.068c.862.486 2.303 1.299 4.376 1.32 1.47.015 2.962-.566 3.99-1.554.904-.867 1.382-1.966 1.382-3.18 0-2.759-1.97-3.758-4.054-4.817l-.368-.187c-2.239-1.09-3.02-1.58-3.008-2.796.008-.854.67-2.117 2.45-2.1 2.178.022 3.13 1.55 3.329 2.355l.053.219.548-.069-.157-2.883-.107-.069c-1.243-.813-2.798-.913-3.41-.919-2.425-.024-5.016 1.417-5.046 4.133zM139.23 30.133c-.022 2.182 1.33 3.288 3.52 4.366l.826.407c1.725.84 2.864 1.394 2.864 2.963 0 .274-.06 1.224-.81 1.946-.521.5-1.245.75-2.148.74-2.584-.025-3.535-1.974-3.87-3.134l-.064-.216-.548.088.128 3.318.124.07c.862.485 2.305 1.298 4.376 1.319 1.47.015 2.962-.566 3.99-1.554.904-.867 1.382-1.966 1.382-3.18 0-2.759-1.968-3.758-4.054-4.817l-.368-.187c-2.239-1.09-3.02-1.58-3.008-2.796.006-.538.25-1.089.655-1.473.438-.417 1.06-.634 1.796-.627 2.178.022 3.129 1.55 3.327 2.355l.055.219.547-.069-.157-2.883-.107-.069c-1.243-.813-2.8-.913-3.41-.919-2.424-.024-5.016 1.417-5.046 4.133zM115.935 26.001l-2.07.014.034.355.032.016c.103.052.444.3.444 1.297l.012 8.971c0 1.738-.636 3.81-3.666 3.81-2.862 0-3.45-1.715-3.45-4.291l.003-10.159H104l.024.352.031.017c.21.11.562.527.562 1.38v8.409c0 5.224 3.426 5.828 6.005 5.828 1.259 0 5.366-.383 5.366-5.308L116 26l-.065.001zM183.603 22.021c1.902.62 3.92 1.49 6.035 2.69-5.194-8.713-14.487-18.205-23.604-24.356 2.35 2.363 6.165 7.565 7.154 13.143 3.735 2.703 7.26 5.58 10.415 8.523zM183.597 22.018c-4.456-1.456-8.254-1.529-11.072-1.234.991-2.361 1.092-4.852.665-7.274-6.9-4.993-14.505-9.404-21.817-12.554 5.365 3.69 11.28 14.334 13.763 25.752 5.289-1.59 13.434-2.687 23.934.9a80.163 80.163 0 0 0-5.473-5.59z"></path></g></svg>
              </div>              
            </div> */}
          </div>
          <div className="col-12" style={{padding: 0}}>
            <div  id="conatiner-map">
            <iframe style={{
              width: '100%',
              height: '500px'
            }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.655635042041!2d114.2244856!3d22.30964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7da079e4466780b8!2sThe+Wave!5e0!3m2!1sen!2s!4v1566558034090!5m2!1sen!2s" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingBottom: 40 }}></div>
    </section>
    {/* <!-- Map Section End --> */}
    {/* <!-- Code of Conduct Section Start --> */}
    <div id="coc" style={{ paddingBottom: 40 }}></div>
    <section id="coc" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Code of Conduct</h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
            <div className="video">
            <img style={{          
              height: '200px',   
              width: '200px',
              objectFit: 'contain',
              display: 'block',
              margin: '0 auto'
            }} src={require('../images/graphql-hongkong-logo.png')} alt="GraphQL Hong Kong Logo" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
          <p className="intro-desc">GraphQL Hong Kong is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of conference participants in any form. Sexual language and imagery is not appropriate for any conference venue, including talks, workshops, parties, Twitter and other online media. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organisers.</p>
            <br/>
            <h2 className="intro-title">Check List</h2>
            <ul className="list-specification">
              <li><i className="lni-check-mark-circle"></i> By & for the community!</li>
              <li><i className="lni-check-mark-circle"></i> Harassment-free</li>
              <li><i className="lni-check-mark-circle"></i> Open to everyone</li>
              <br/>
            </ul>
            <span>Check the less quick version <a href="https://confcodeofconduct.com/">here</a>!</span>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Code of Conduct Section End --> */}

    {/* <!-- Blog Section Start --> */}
    <section style={{
      display: 'none'
    }} id="blog" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Our Latest News & Articles</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img className="img-fluid" src="assets/img/blog/img-1.jpg" alt="" />
                </a>
              </div>
              <div className="descr">
                <div className="tag">Design</div>
                <h3 className="title">
                  <a href="single-blog.html">
                    The 9 Design Trends You Need to Know
                  </a>
                </h3>
                <div className="meta-tags">
                  <span className="date">Jan 20, 2018</span>
                  <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img className="img-fluid" src="assets/img/blog/img-2.jpg" alt="" />
                </a>
              </div>
              <div className="descr">
                <div className="tag">Design</div>
                <h3 className="title">
                  <a href="single-blog.html">
                    The 9 Design Trends You Need to Know
                  </a>
                </h3>
                <div className="meta-tags">
                  <span className="date">Jan 20, 2018 </span>
                  <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="blog-item">
              <div className="blog-image">
                <a href="#">
                  <img className="img-fluid" src="assets/img/blog/img-3.jpg" alt="" />
                </a>
              </div>
              <div className="descr">
                <div className="tag">Design</div>
                <h3 className="title">
                  <a href="single-blog.html">
                    The 9 Design Trends You Need to Know
                  </a>
                </h3>
                <div className="meta-tags">
                  <span className="date">Jan 20, 2018</span> 
                  <span className="comments">| <a href="#"> by Cindy Jefferson</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center">
            <a href="#" className="btn btn-common">Read More News</a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Blog Section End --> */}

    {/* <!-- Subscribe Area Start --> */}
    {/* <div id="subscribe" className="section-padding">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-10 col-lg-7">
            <div className="subscribe-inner wow fadeInDown" data-wow-delay="0.3s">
              <h2 className="subscribe-title">Sign Up For Our Newsletter</h2>
              <form className="text-center form-inline">
                <input className="mb-20 form-control" name="email" placeholder="Enter Your Email Here" />
                <button type="submit" className="btn btn-common sub-btn" data-style="zoom-in" data-spinner-size="30" name="submit" id="submit">
                <span className="ladda-label"><i className="lni-check-box"></i> Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    {/* <!-- Subscribe Area End --> */}

    {/* <!-- Map Section Start --> */}
    {/* TODO PUT MAP HERE FOR VENUE */}
    {/* <section id="google-map-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div id="conatiner-map"></div>
          </div>
        </div>
      </div>
    </section> */}
    {/* <!-- Map Section End --> */}

    {/* <!-- Contact Us Section --> */}
    <div id="contact-map" style={{ paddingBottom: 40 }}></div>
    <section id="contact-map" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Drop A Message</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-xs-12">
            <div className="container-form wow fadeInLeft" data-wow-delay="0.2s">
              <div className="form-wrapper">
                <form action="thank-you" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" role="form" id="contactForm" data-toggle="validator">
                <input name="bot-field" style={{
                  display: "none"
                }} />
                  <div className="row">
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required data-error="Please enter your name" />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6 form-line">
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" required data-error="Please enter your Email" />
                        <div className="help-block with-errors"></div>
                      </div> 
                    </div>                    
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea placeholder="Your message" className="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="btn btn-common" id="form-submit"><i className="fa fa-paper-plane" aria-hidden="true"></i>  Send Us Now</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <footer className="footer-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
            <h3><img src="assets/img/logo.png" alt="" /></h3>
            <p>
              {/* Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt. */}
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#speakers">Our Speakers</a></li>
              <li><a href="#intro">About Conference</a></li>              
              <li><a href="#agenda">Event Schedule</a></li>
              <li><a href="#sponsors">Our sponsors</a></li>
              <li><a href="#pricing">Get tickets</a></li>
              {/* <li><a href="#">Latest News</a></li> */}
              {/* <li><a href="#">Event Photo Gallery</a></li> */}
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
            {/* <h3>RECENT POSTS</h3>
            <ul className="image-list">
              <li>
                <figure className="overlay">
                  <img className="img-fluid" src="assets/img/art/a1.jpg" alt="" />
                </figure>
                <div className="post-content">
                  <h6 className="post-title"> <a href="blog-single.html">Lorem ipsm dolor sumit.</a> </h6>
                  <div className="meta"><span className="date">October 12, 2018</span></div>
                </div>
              </li>
              <li>
                <figure className="overlay">
                  <img className="img-fluid" src="assets/img/art/a2.jpg" alt="" />
                </figure>
                <div className="post-content">
                  <h6 className="post-title"><a href="blog-single.html">Lorem ipsm dolor sumit.</a></h6>
                  <div className="meta"><span className="date">October 12, 2018</span></div>
                </div>
              </li>
            </ul> */}
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
            {/* <h3>SUBSCRIBE US</h3>
            <div className="widget">
              <div className="newsletter-wrapper">
                <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                  <div className="form-group is-empty">
                    <input type="email" value="" name="Email" className="form-control" id="EMAIL" placeholder="Your email" required="" />
                    <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-pointer"></i></button>
                    <div className="clearfix"></div>
                  </div>
                </form>
              </div>
            </div> */}
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h5 className="widget-title">FOLLOW US ON</h5>
              <ul className="footer-social">
                {/* <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li> */}
                <li><a className="twitter" href="https://twitter.com/GraphQLHongKong"><i className="lni-twitter-filled"></i></a></li>
                {/* <li><a className="linkedin" href="#"><i className="lni-linkedin-filled"></i></a></li> */}
                {/* <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    

    

    {/* <!-- Go to Top Link --> */}
    <a href="#" className="back-to-top">
    	<i className="lni-chevron-up"></i>
    </a>

    <a style={{
      height: 0,
      display: 'grid'
    }} href="/thank-you">&nbsp;</a>

  
  </Layout>
)

export default IndexPage

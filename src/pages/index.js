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
        <meta name="twitter:description" content="A one-day conference on Sept, 29th by & for the GraphQL community"/>
        <meta name="twitter:image" content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site" content="@GraphQLHongKong"/>
        <meta property="og:title" content="GraphQL Hong Kong 2019"/>
        <meta property="og:description" content="A one-day conference on Sept, 29th by & for the GraphQL community"/>
        <meta property="og:image" content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"/>
        <meta property="og:image:url" content="https://graphql-hongkong.org/graphql-hongkong-logo-card.png"/>
        <meta name="description" content="A one-day conference on Sept, 29th by & for the GraphQL community"/>
        <meta name="keywords" content="GraphQL,2019,conference,Asia,HongKong"/>
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
              {/* <li className="nav-item">
                <a className="nav-link" href="#agenda">
                  Agenda
                </a>
              </li> */}
              
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
            <a className="page-scroll" href="#sponsors">Sponsors</a>
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
        paddingTop: '32vh',
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
            height: '100px',   
            width: '100px',
            objectFit: 'contain',
            display: 'block',
            margin: '0 auto'
          }} src={require('../images/graphql-hongkong-logo.png')} alt="GraphQL Hong Kong Logo" />
        </div>
        <p style={{
          color: 'white',
          // color: '#e535ab',
          // background: 'white',
          fontSize: '1.5em',
          width: 'max-content',
          padding: '.5em',
          margin: '0 auto'
        }}>
        29-30<sup>th</sup> September, 2019 in Hong Kong
        </p>
        <br/><br/>
        <div className="col-12 text-center">
          {/* <button disabled href="#buy-tickets" className="btn btn-common" style={{marginRight: 10}}>Buy Tickets</button> */}
          <a href="https://drive.google.com/open?id=142I7_ANRwxX40PG7ryLwJ5e30Ey_i0p5" target="_blank" className="btn btn-common">Become a sponsor</a>
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
              <a href="mailto:info@graphql-hongkong.org">
                <div className="team-img">
                  <img className="img-fluid" src={require('../images/profile-picture.png')} alt="" />
                  <div className="team-overlay">
                    <div className="overlay-social-icon text-center">
                      <ul className="social-icons">
                        <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="info-text">
                  <h3><a href="#">Join us!</a></h3>
                  <p>First time speaker, Community</p>
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
                  <p>Software Engineer, Brikl</p>
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
              <p>September 29-30th, 2019</p>
              <span>10:00am – 18:00pm</span>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="0.9s">
              <div className="icon"><i className="lni-users"></i></div>
              <p>100 Available Seats</p>       
              <span>Hurryup! few tickets are left</span>
            </div>
          </div>
          {/* <!-- Counter Item --> */}
          <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div className="counter wow fadeInRight" data-wow-delay="1.2s">
              <div className="icon"><i className="lni-coffee-cup"></i></div>
              <p>Free Dinner &amp; Snacks</p>
              <span>Don’t miss it</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Counter Area End--> */}

    {/* <!-- Schedule Section Start -->
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
                  <a className="nav-link active" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-expanded="true">
                    <div className="item-text">
                      <h4>Sunday</h4>
                      <h5>29th September</h5>
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
                    <div id="headingOne">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                        </div>                     
                        <span className="time">12:00pm - 13:00pm</span>
                        <h4>Registration</h4>                        
                      </div>
                    </div>
                    
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">13:00pm - 13:30pm</span>
                        <h4>Welcome</h4>
                        <h5 className="name">Joseph Cooper, Carlos Rufo &amp; Tobias Meixner</h5>
                      </div>
                    </div>                    
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">13:30pm - 19:00pm</span>
                        <h4>Talks to be announced soon!</h4>
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
        <h3 style={{paddingBottom: 30}}>Partners</h3>
        <a href="https://www.graphql-asia.org/"><img style={{
              width: '100px',
              height: '100px',
              objectFit: 'contain'
        }} className="img-fluid" src={require('../images/GraphQL-Asia-Logo.png')} alt="GraphQL Asia"/></a>
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
              <button disabled href="#buy-tickets" className="btn btn-common">Available soon!</button>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Ticket Pricing Area End --> 
    <div id="buy-tickets" style={{ paddingBottom: 40 }}></div>
    <section id="buy-tickets" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">Buy tickets</h2>
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

import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Slide } from "react-slideshow-image";
import Countdown from "react-countdown-now";
import Iframe from "react-iframe";
import { Helmet } from "react-helmet";

require("../../assets/css/bootstrap.min.css");
require("../../assets/fonts/line-icons.css");
// require('../../assets/scss/slicknav.scss')
require("../../assets/css/nivo-lightbox.css");
// require('../../assets/css/animate.css')

require("../../assets/scss/main.scss");
require("../../assets/scss/responsive.scss");
const slide1 = require("../images/sz.jpeg");
const slideImages = [
  slide1
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
};

const Tickets = () => {
  return (
    <section id="buy-tickets" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Tickets
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Slideshow = () => {
  return (
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide">
        <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
    </Slide>
  );
};

const IndexPage = () => {
  const [showTickets, setShowTickets] = useState(false);

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@GraphQLShenzhen" />
        <meta name="twitter:title" content="GraphQL Shenzhen Meetup" />
        <meta
          name="twitter:description"
          content="A meetup by & for the GraphQL community"
        />
        <meta
          name="twitter:image"
          content="https://graphql-shenzhen.org/graphql-shenzhen-logo-card.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site" content="@GraphQLShenzhen" />
        <meta property="og:title" content="GraphQL Shenzhen Meetup" />
        <meta
          property="og:description"
          content="A meetup by & for the GraphQL community"
        />
        <meta
          property="og:image"
          content="https://graphql-shenzhen.org/graphql-shenzhen-logo-card.png"
        />
        <meta
          property="og:image:url"
          content="https://graphql-shenzhen.org/graphql-shenzhen-logo-card.png"
        />
        <meta
          name="description"
          content="A meetup by & for the GraphQL community"
        />
        <meta name="keywords" content="GraphQL,meetup,Asia,GraphQLShenzhen" />
        <meta property="og:url" content="https://graphql-shenzhen.org/" />
      </Helmet>
      {/* <!-- Header Area wrapper Starts --> */}
      <header id="header-wrap">
        {/* <!-- Navbar Start --> */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div className="container">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#main-navbar"
                aria-controls="main-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="icon-menu"></span>
                <span className="icon-menu"></span>
                <span className="icon-menu"></span>
              </button>
              <a href="#" className="navbar-brand">
                <img
                  style={{
                    height: "40px",
                    width: "40px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                  src={require("../images/graphql-shenzhen-logo.png")}
                  alt="GraphQL Shenzhen Logo"
                />
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
                    rspv
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
                  <a className="nav-link" href="#contact">
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
                <a className="page-scrool" href="#speakers">
                  Speakers
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#agenda">
                  Agenda
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#venue">
                  Venue
                </a>
              </li>
            </ul>
          }
          {/* <!-- Mobile Menu End --> */}
        </nav>
        {/* <!-- Navbar End --> */}

        <div
          style={{
            paddingTop: "20vh",
            height: "100vh",
            backgroundImage: `
        linear-gradient(
          rgba(15,15,15, 0.25), 
          rgba(15,15,15, 0.25)
        ),
          url(${slide1})
        `,
            backgroundSize: "cover",
            textAlign: "center"
          }}
        >
          <h1 className="mainTitle">
            GraphQL Shenzhen <br />
            Meetup #1
          </h1>
          <div className="navbar-brand">
            <img
              style={{
                height: "200px",
                width: "200px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                marginBottom: "20px"
              }}
              src={require("../images/graphql-shenzhen-logo.png")}
              alt="GraphQL Shenzhen Logo"
            />
          </div>
          <h2
            class="title-date"
            style={{
              color: "white",
              // color: '#e535ab',
              // background: 'white',
              fontSize: "2.5em",
              width: "max-content",
              margin: "0 auto"
            }}
          >
            03<sup>rd</sup> Dec, 2019
          </h2>
          <h2
            class="title-date"
            style={{
              color: "white",
              // color: '#e535ab',
              // background: 'white',
              fontSize: "2.5em",
              width: "max-content",
              margin: "0 auto"
            }}
          >
            WeWork, TCL大厦B座9层
            {/* TBD, Shenzhen */}
          </h2>
          <br />
          <br />
          <div className="col-12 text-center">
            <a
              href="mailto:info@graphql-shenzhen.org"
              className="btn btn-common"
              style={{ marginRight: 10 }}
            >
              Submit a talk
            </a>
            <a
              href="#pricing"
              className="btn btn-common"
              style={{ marginRight: 10 }}
            >
              RSPV NOW!
            </a>
            <a
              href="mailto:info@graphql-shenzhen.org"
              className="btn btn-common"
            >
              Become a sponsor
            </a>
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
            <a href="rsvp.html" className="btn btn-common wow fadeInUp" data-wow-delay="0.3s">Add to My Calender</a>
          </div>
        </div>
      </div>
    </section> */}
      {/* <!-- Coundown Section End --> */}

      {/* <!-- Team Section Start --> */}
      <div id="speakers" style={{ paddingBottom: 40 }}></div>
      <section id="speakers" className="section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Who's Speaking?
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                <a href="https://twitter.com/tanmaigo" target="_blank">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../images/tanmai-gopal.jpg")}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://twitter.com/tanmaigo"
                              target="_blank"
                            >
                              <i
                                className="lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="https://twitter.com/tanmaigo" target="_blank">
                        Tanmai Gopal
                      </a>
                    </h3>
                    <p>Co-Founder & CEO, Hasura</p>
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
                    <img
                      className="img-fluid"
                      src={require("../images/uri-goldshtein.jpg")}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a
                              href="https://twitter.com/UriGoldshtein"
                              target="_blank"
                            >
                              <i
                                className="lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a
                        href="https://twitter.com/UriGoldshtein"
                        target="_blank"
                      >
                        Uri Goldshtein
                      </a>
                    </h3>
                    <p>Founder & CEO, The Guild</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <a href="mailto:info@graphql-shenzhen.org">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../images/profile-picture.png")}
                      alt="Profile picture"
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        {/* <ul className="social-icons">
                          <li>
                            <a href="https://twitter.com/swcarlosrj">
                              <i
                                className="lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="mailto:info@graphql-shenzhen.org">Join us!</a>
                    </h3>
                    <p>Local speaker, Shenzhen</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Masters of ceremonies
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              {/* <!-- Team Item Starts --> */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                <a href="https://twitter.com/meixnertobias">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../images/tobias-meixner.jpg")}
                      alt=""
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a href="https://twitter.com/meixnertobias">
                              <i
                                className="lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="https://twitter.com/meixnertobias">
                        Tobias Meixner
                      </a>
                    </h3>
                    <p>Organizer, GraphQL Shenzhen</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> */}
            </div>
          </div>
          {/* <a href="speakers.html" className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Speakers</a> */}

          {/* <br />
          <br />
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Past Speakers
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> 
              </div>
            </div>
          </div>
          */}
          {/*
          <div className="row">
            <div
              className="col-sm-6 col-md-6 col-lg-4"
              style={{ maxWidth: 300 }}
            >
              {/* <!-- Team Item Starts --> 
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                <a href="mailto:info@graphql-shenzhen.org">
                  <div className="team-img">
                    <img
                      className="img-fluid"
                      src={require("../images/profile-picture.png")}
                      alt="Profile picture"
                    />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        {/* <ul className="social-icons">
                          <li>
                            <a href="https://twitter.com/swcarlosrj">
                              <i
                                className="lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul> 
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="mailto:info@graphql-shenzhen.org">Join us!</a>
                    </h3>
                    <p>Local | International Speaker</p>
                  </div>
                </a>
              </div>
              {/* <!-- Team Item Ends --> 
            </div>
          </div>
        */}
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
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Why GraphQL Shenzhen?
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">1<sup>st</sup> local GraphQL event in HK</p> */}
              </div>
            </div>
          </div>
          <div className="row services-wrapper">
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.2s"
              >
                <div className="icon">
                  <i className="lni-heart"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Get Inspired</a>
                  </h3>
                  <p>
                    With talks from community members and companies from the
                    GraphQL ecosystem.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.4s"
              >
                <div className="icon">
                  <i className="lni-user"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Meet New Faces</a>
                  </h3>
                  <p>At the first GraphQL meetup in Shenzhen.</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.6s"
              >
                <div className="icon">
                  <i className="lni-mic"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Fresh Tech Insights</a>
                  </h3>
                  <p>Expect new announcements and launches at the event.</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="0.8s"
              >
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Networking Session</a>
                  </h3>
                  <p>
                    Connect with people at the event to learn more about the
                    people behind and in the GraphQL community.
                  </p>
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
                  <h3>
                    <a href="#">Local Event</a>
                  </h3>
                  <p>An event with international speakers.</p>
                </div>
              </div>
            </div>
            {/* <!-- Services item --> */}
            <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
              <div
                className="services-item wow fadeInDown"
                data-wow-delay="1.2s"
              >
                <div className="icon">
                  <i className="lni-tshirt"></i>
                </div>
                <div className="services-content">
                  <h3>
                    <a href="#">Free Swags</a>
                  </h3>
                  <p>
                    Get your stickers and swags from our sponsors and partners.
                  </p>
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
                <div className="icon">
                  <i className="lni-timer"></i>
                </div>
                <p>December 03rd, 2019</p>
                <span>18:30 – 21:00</span>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
              <div className="counter wow fadeInRight" data-wow-delay="0.9s">
                <div className="icon">
                  <i className="lni-users"></i>
                </div>
                <p>~50 Available Seats</p>
                <span>WE'RE LOOKING FOR VENUE SPONSORS!</span>
              </div>
            </div>
            {/* <!-- Counter Item --> */}
            <div className="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
              <div className="counter wow fadeInRight" data-wow-delay="1.2s">
                <div className="icon">
                  <i className="lni-dinner"></i>
                </div>
                <p>Free Dinner &amp; Drinks</p>
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
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Agenda
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div
            className="schedule-area row wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="schedule-tab-title col-md-3 col-lg-3 col-xs-12">
              <div className="table-responsive">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="monday-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="monday"
                      aria-expanded="true"
                    >
                      <div className="item-text">
                        <h4>Tuesday</h4>
                        <h5>3rd December</h5>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="schedule-tab-content col-md-9 col-lg-9 col-xs-12 clearfix">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="monday"
                  role="tabpanel"
                  aria-labelledby="monday-tab"
                >
                  <div id="accordion">
                    <div className="card">
                      <div id="headingTwo">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              width={60}
                              style={{ borderRadius: 0 }}
                              src={require("../images/graphql-shenzhen-logo.png")}
                              alt=""
                            />
                          </div>
                          <span className="time">18:30 - 19:00</span>
                          <h4>Registration</h4>
                          <h5 className="name">
                            Get ready meeting new folks & enjoying pizza/drinks
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingTwo">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../images/tobias-meixner.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">19:00 - 19:15</span>
                          <h4>Welcome & Intro</h4>
                          <h5 className="name">
                            Tobias Meixner - Organizer, GraphQL Shenzhen
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingThree">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../images/tanmai-gopal.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">19:15 - 19:45</span>
                          <h4>TBD</h4>
                          <h5 className="name">
                            Tanmai Gopal - Co-Founder & CEO, Hasura
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingThree">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../images/uri-goldshtein.jpg")}
                              alt=""
                            />
                          </div>
                          <span className="time">19:45 - 20:15</span>
                          <h4>TBD</h4>
                          <h5 className="name">
                            Uri Goldshtein - Founder & CEO, The Guild
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingThree">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../images/profile-picture.png")}
                              alt=""
                            />
                          </div>
                          <span className="time">20:15 - 20:45</span>
                          <h4>TBD</h4>
                          <h5 className="name">
                            Join us! - Local speaker, Shenzhen
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div id="headingTwo">
                        <div
                          className="collapsed card-header"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <div className="images-box">
                            <img
                              className="img-fluid"
                              src={require("../images/after-party.png")}
                              alt=""
                            />
                          </div>
                          <span className="time">20:45 - 21:30</span>
                          <h4>After-party</h4>
                          <h5 className="name">
                            To be announced at the meetup
                          </h5>
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

      {/*  <!-- Gallary Section Start --> */}
      <section
        style={{
          display: "none"
        }}
        id="gallery"
        className="section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  our event gallery
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Global Grand Event on Digital Design
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-4">
              <div className="gallery-box">
                <div className="img-thumb">
                  <img
                    className="img-fluid"
                    src="assets/img/gallery/img-1.jpg"
                    alt=""
                  />
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
                  <img
                    className="img-fluid"
                    src="assets/img/gallery/img-2.jpg"
                    alt=""
                  />
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
                  <img
                    className="img-fluid"
                    src="assets/img/gallery/img-3.jpg"
                    alt=""
                  />
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
                  <img
                    className="img-fluid"
                    src="assets/img/gallery/img-4.jpg"
                    alt=""
                  />
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
                  <img
                    className="img-fluid"
                    src="assets/img/gallery/img-5.jpg"
                    alt=""
                  />
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
                  <img
                    className="img-fluid"
                    src="assets/img/gallery/img-6.jpg"
                    alt=""
                  />
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
              <a href="#" className="btn btn-common">
                Browse All
              </a>
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
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Sponsors
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-md-6 col-sm-6 col-xs-6">
              <h2>Venue</h2>
              <a href="https://www.wework.com" target="_blank">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/wework.png")}
                    alt="WeWork"
                  />
                </div>
              </a>

              {/* <a target="_blank" href="mailto:info@graphql-shenzhen.org">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/become-sponsor.jpg")}
                    alt="Sponsor"
                  />
                </div>
              </a> */}
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <h2>Food & Drinks</h2>
              {/* <a href="https://aws.amazon.com/amplify">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/aws-amplify.png")}
                    alt="AWS Amplify"
                  />
                </div>
              </a> */}
              <a target="_blank" href="https://hasura.io">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/hasura.svg")}
                    alt="Hasura"
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    marginTop: 60
                  }}
                >
                  Past Sponsors
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-md-12 col-sm-12 col-xs-12">
              <a href="https://aws.amazon.com/amplify">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/aws-amplify.png")}
                    alt="AWS Amplify"
                  />
                </div>
              </a>
            </div>
            {/* <div className="col-md-6 col-sm-6 col-xs-6">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdkgoUclUI5KOcdYvunKbtAU13bsoHMCSMxdPphpJ8r6DXh6w/viewform"
              >
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/become-sponsor.jpg")}
                    alt="Hasura"
                  />
                </div>
              </a>
            </div> */}
          </div>

          {/* <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-md-6 col-sm-6 col-xs-6">
              <h2>Gold</h2>
              <a href="https://hasura.io">
                <div className="spnsors-logo">
                  <img
                    style={{
                      width: "160px",
                      height: "160px",
                      objectFit: "contain"
                    }}
                    className="img-fluid"
                    src={require("../images/hasura.svg")}
                    alt="Hasura"
                  />
                </div>
              </a>
            </div>
          </div> */}
          {/* <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h3>We are looking for sponsors and partners</h3>
            </div>
          </div> */}
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
        {/* <div className="col-12 text-center">
          <a
            href="https://drive.google.com/open?id=142I7_ANRwxX40PG7ryLwJ5e30Ey_i0p5"
            target="_blank"
            className="btn btn-common"
          >
            Become a sponsor
          </a>
        </div> */}

        {/* <div
          style={{
            marginTop: "5em"
          }}
          className="col-12 text-center"
        >
          <h3 style={{ marginBottom: "1em" }}>Partners</h3>
          <a href="https://2019.webconf.asia" target="_blank">
            <img
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                margin: "0 30px"
              }}
              className="img-fluid"
              src={require("../images/webconf-asia.svg")}
              alt="Webconf Asia"
            />
          </a>
          <a href="https://www.graphql-asia.org/" target="_blank">
            <img
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                margin: "0 30px"
              }}
              className="img-fluid"
              src={require("../images/GraphQL-Asia-Logo.png")}
              alt="GraphQL Asia"
            />
          </a>
          <a href="https://2019.jsdc.tw" target="_blank">
            <img
              style={{
                width: "150px",
                height: "150px",
                objectFit: "contain",
                margin: "0 30px"
              }}
              className="img-fluid"
              src={require("../images/JSDC-2019.png")}
              alt="JSDC 2019"
            />
          </a>
        </div>

        <div
          style={{
            marginTop: "5em"
          }}
          className="col-12 text-center"
        >
          <h3>Organised by</h3>
          <div className="org-logo">
            <a href="https://kintohub.com/" target="_blank">
              <img
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "contain",
                  margin: "0 10px"
                }}
                className="img-fluid"
                src={require("../images/kintohub.png")}
                alt="KintoHub"
              />
            </a>
            <a href="https://www.brikl.io/" target="_blank">
              <img
                style={{
                  width: "300px",
                  height: "200px",
                  objectFit: "contain",
                  margin: "0 10px"
                }}
                className="img-fluid"
                src={require("../images/BrikL.svg")}
                alt="BrikL"
              />
            </a>
          </div> 
        </div>*/}
      </section>
      {/* <!-- Sponsors Section End --> */}

      {/* <!-- Ticket pricing Area Start -->  */}
      <div id="pricing" style={{ paddingBottom: 40 }}></div>
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  RSPV
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xa-12 mb-3"></div>
            <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="icon">
                  <i className="lni-layers"></i>
                </div>
                <div className="colmun-title">
                  <h5>Free</h5>
                </div>
                <div className="price">
                  <h2>Passes</h2>
                  <p>50 Seats Available</p>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Access to all talks</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Dinner & Drinks</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Swag</span>
                    </li>
                  </ul>
                </div>
                <button disabled className="btn btn-common">
                  RSPV opening soon!
                </button>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-xa-12 mb-3"></div>
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
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Venue
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-sm-12 col-lg-12"
              style={{
                textAlign: "center",
                paddingBottom: 40
              }}
            >
              <h3 style={{ marginBottom: 40 }}>
                GraphQL Shenzhen Meetup #1 will be held in
              </h3>
              {/* <a href="mailto:info@graphql-shenzhen.org">
                <img
                  width={300}
                  src={require("../images/become-sponsor.jpg")}
                />
              </a> */}
              <a href="mailto:info@graphql-shenzhen.org">
                <img width={300} src={require("../images/wework.png")} />
              </a>
              <h3 style={{ marginTop: 40, marginBottom: 20 }}>
                南山区高新南一道6号TCL大厦B座9层
              </h3>
            </div>
            <div className="col-12" style={{ padding: 0 }}>
              <div id="conatiner-map">
                <iframe
                  style={{
                    width: "100%",
                    height: "500px"
                  }}
                  frameBorder="0"
                  allowFullScreen
                  src="https://j.map.baidu.com/69/JNl"
                ></iframe>
                {/* <iframe
                  style={{
                    width: "100%",
                    height: "500px"
                  }}
                  frameBorder="0"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.655635042041!2d114.2244856!3d22.30964!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7da079e4466780b8!2sThe+Wave!5e0!3m2!1sen!2s!4v1566558034090!5m2!1sen!2s"
                ></iframe>*/}
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
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Code of Conduct
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s"></p>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight"
              data-wow-delay="0.3s"
            >
              <div className="video">
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    objectFit: "contain",
                    display: "block",
                    margin: "0 auto"
                  }}
                  src={require("../images/graphql-shenzhen-logo.png")}
                  alt="GraphQL Shenzhen Logo"
                />
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <p className="intro-desc">
                GraphQL Shenzhen is dedicated to providing a harassment-free
                conference experience for everyone, regardless of gender, gender
                identity and expression, age, sexual orientation, disability,
                physical appearance, body size, race, ethnicity, religion (or
                lack thereof), or technology choices. We do not tolerate
                harassment of conference participants in any form. Sexual
                language and imagery is not appropriate for any conference
                venue, including talks, workshops, parties, Twitter and other
                online media. Conference participants violating these rules may
                be sanctioned or expelled from the conference without a refund
                at the discretion of the conference organisers.
              </p>
              <br />
              <h2 className="intro-title">Check List</h2>
              <ul className="list-specification">
                <li>
                  <i className="lni-check-mark-circle"></i> By & for the
                  community!
                </li>
                <li>
                  <i className="lni-check-mark-circle"></i> Harassment-free
                </li>
                <li>
                  <i className="lni-check-mark-circle"></i> Open to everyone
                </li>
                <br />
              </ul>
              <span>
                Check the less quick version{" "}
                <a href="https://confcodeofconduct.com/">here</a>!
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Code of Conduct Section End --> */}

      {/* <!-- Blog Section Start --> */}
      <section
        style={{
          display: "none"
        }}
        id="blog"
        className="section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Our Latest News & Articles
                </h1>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Global Grand Event on Digital Design
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/img-1.jpg"
                      alt=""
                    />
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
                    <span className="comments">
                      | <a href="#"> by Cindy Jefferson</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/img-2.jpg"
                      alt=""
                    />
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
                    <span className="comments">
                      | <a href="#"> by Cindy Jefferson</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/img-3.jpg"
                      alt=""
                    />
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
                    <span className="comments">
                      | <a href="#"> by Cindy Jefferson</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a href="#" className="btn btn-common">
                Read More News
              </a>
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
      <div id="contact" style={{ paddingBottom: 40 }}></div>
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h1
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Drop A Message
                </h1>
                {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-xs-12">
              <div
                className="container-form wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="form-wrapper">
                  <form
                    action="thank-you"
                    name="contact"
                    method="POST"
                    netlify-honeypot="bot-field"
                    data-netlify="true"
                    role="form"
                    id="contactForm"
                    data-toggle="validator"
                  >
                    <input
                      name="bot-field"
                      style={{
                        display: "none"
                      }}
                    />
                    <div className="row">
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            data-error="Please enter your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            placeholder="Your message"
                            className="form-control"
                            rows="4"
                            id="message"
                            name="message"
                            required
                            data-error="Write your message"
                          ></textarea>
                        </div>
                        <div className="form-submit">
                          <button
                            type="submit"
                            className="btn btn-common"
                            id="form-submit"
                          >
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>{" "}
                            Send Us Now
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
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
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3>
                <img src="assets/img/logo.png" alt="" />
              </h3>
              <p>
                {/* Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt. */}
              </p>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h3>QUICK LINKS</h3>
              <ul>
                <li>
                  <a href="#speakers">Our Speakers</a>
                </li>
                <li>
                  <a href="#intro">About Conference</a>
                </li>
                <li>
                  <a href="#agenda">Event Schedule</a>
                </li>
                <li>
                  <a href="#sponsors">Our sponsors</a>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.6s"
            >
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
            <div
              className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp"
              data-wow-delay="0.8s"
            >
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
                  <li>
                    <a
                      className="twitter"
                      href="https://twitter.com/GraphQLShenzhen"
                    >
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
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

      <a
        style={{
          height: 0,
          display: "grid"
        }}
        href="/thank-you"
      >
        &nbsp;
      </a>
    </Layout>
  );
};

export default IndexPage;

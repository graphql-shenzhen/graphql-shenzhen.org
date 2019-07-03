import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Slide } from 'react-slideshow-image';
import Countdown from 'react-countdown-now';

require('../../assets/css/bootstrap.min.css')
require('../../assets/fonts/line-icons.css')
// require('../../assets/scss/slicknav.scss')
require('../../assets/css/nivo-lightbox.css')
require('../../assets/css/animate.css')

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
            <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt="" /></a>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#header-wrap">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#schedules">
                  schedules
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Speakers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  Faq
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sponsors">
                  Sponsors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#google-map-area">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Mobile Menu Start --> */}
        <ul className="mobile-menu">
          <li>
            <a className="page-scrool" href="#header-wrap">Home</a>
          </li>
          <li>
            <a className="page-scrool" href="#about">About</a>
          </li>
          <li>
             <a className="page-scroll" href="#schedules">schedules</a>
          </li>
          <li>
            <a className="page-scroll" href="#team">Speakers</a>
          </li>
          <li>
            <a className="page-scroll" href="#gallery">Gallery</a>
          </li>
          <li>
            <a className="page-scroll" href="#faq">Faq</a>
          </li>
          <li>
            <a className="page-scroll" href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a className="page-scroll" href="#pricing">pricing</a>
          </li>
          <li>
            <a className="page-scroll" href="#google-map-area">Contact</a>
          </li>
        </ul>
        {/* <!-- Mobile Menu End --> */}

      </nav>
      {/* <!-- Navbar End --> */}

      <div style={{
        height: '85vh',
        backgroundImage: `url(${slide1})`,
        backgroundSize: 'cover',
        textAlign: 'center'
      }}>
        <h1 style={{
          paddingTop: '30vh',
          fontSize: '5rem',
          color: 'white'
        }}>GraphQL Hong Kong</h1>
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
    <section className="countdown-timer section-padding">
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
                  backgroundColor: '#E91E63'
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
    </section>
    {/* <!-- Coundown Section End --> */}

     {/* <!-- Services Section Start --> */}
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Why You Choose Us?</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
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
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.4s">
              <div className="icon">
                <i className="lni-gallery"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Meet New Faces</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div className="icon">
                <i className="lni-envelope"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Fresh Tech Insights</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
          {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="0.8s">
              <div className="icon">
                <i className="lni-cup"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Networking Session</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="1s">
              <div className="icon">
                <i className="lni-user"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Global Event</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
           {/* <!-- Services item --> */}
          <div className="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div className="services-item wow fadeInDown" data-wow-delay="1.2s">
              <div className="icon">
                <i className="lni-bubble"></i>
              </div>
              <div className="services-content">
                <h3><a href="#">Free Swags</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Services Section End --> */}
    

    {/* <!-- About Section Start --> */}
    <section id="about" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">About This Events</h1>
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
    </section>
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
              <p>September 29, 2019</p>
              <span>01:00 PM – 06:00 PM</span>
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

    {/* <!-- Schedule Section Start --> */}
    <section id="schedules" className="schedule section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Event Schedule</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit, sed do eiusmod tempor</p>
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
                      <h5>29 September</h5>
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
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>15 Free Productive Design Tools</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Getting Started With SketchApp</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tuesday" role="tabpanel" aria-labelledby="tuesday-tab">
                <div id="accordion2">
                  <div className="card">
                    <div id="headingOne1">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="false" aria-controls="collapseOne1">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne1" className="collapse show" aria-labelledby="headingOne1" data-parent="#accordion2">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo2">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordion2">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="wednesday" role="tabpanel" aria-labelledby="wednesday-tab">
                <div id="accordion3">
                  <div className="card">
                    <div id="headingOne3">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne3">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne3" className="collapse show" aria-labelledby="headingOne3" data-parent="#accordion3">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo3">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo3" aria-expanded="false" aria-controls="collapseTwo3">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo3" className="collapse" aria-labelledby="headingTwo3" data-parent="#accordion3">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree3">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3" data-parent="#accordion3">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="thursday" role="tabpanel" aria-labelledby="thursday-tab">
                <div id="accordion4">
                  <div className="card">
                    <div id="headingOne">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne4" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion4">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo4" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion4">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree4">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree4" aria-expanded="false" aria-controls="collapseThree4">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree4" className="collapse" aria-labelledby="headingThree" data-parent="#accordion4">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="friday" role="tabpanel" aria-labelledby="friday-tab">
                <div id="accordion">
                  <div className="card">
                    <div id="headingOne">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-1.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingTwo">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-2.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div id="headingThree">
                      <div className="collapsed card-header" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <div className="images-box">
                          <img className="img-fluid" src="assets/img/speaker/speakers-3.jpg" alt="" />
                        </div>                     
                        <span className="time">10am - 12:30pm</span>
                        <h4>Web Design Principles and Best Practices</h4>
                        <h5 className="name">David Warner</h5>
                      </div>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        <p>Consectetur adipisicing elit. Quod distinctio impedit sint accusantium ducimus lites consequuntur innobisl dolores saepe.Proin sit amet turpis lobortis.</p>
                        <div className="location">
                          <span>Location:</span> Hall 1 , Building A, Golden Street, Southafrica
                        </div>
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

    {/* <!-- Team Section Start --> */}
    <section style={{
      display: 'none'
    }} id="team" className="section-padding text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Who's Speaking?</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-img">
                <img className="img-fluid" src="assets/img/team/team-01.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">JONATHON DOE</a></h3>
                <p>Product Designer, Tesla</p>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-img">
                <img className="img-fluid" src="assets/img/team/team-02.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">Patric Green</a></h3>
                <p>Front-end Developer, Dropbox</p>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
              <div className="team-img">
                <img className="img-fluid" src="assets/img/team/team-03.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">Paul Kowalsy</a></h3>
                <p>Lead Designer, TNW</p>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>

          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
              <div className="team-img">
                <img className="img-fluid" src="assets/img/team/team-04.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">Jhon Doe</a></h3>
                <p>Back-end Developer, ASUS</p>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1s">
              <div className="team-img">
                <img className="img-fluid" src="assets/img/team/team-05.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">Daryl Dixon</a></h3>
                <p>Full-stack Developer, Google</p>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
          <div className="col-sm-6 col-md-6 col-lg-4">
            {/* <!-- Team Item Starts --> */}
            <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
              <div className="team-img">
                <img className="img-fluid" src="assets/img/team/team-06.jpg" alt="" />
                <div className="team-overlay">
                  <div className="overlay-social-icon text-center">
                    <ul className="social-icons">
                      <li><a href="#"><i className="lni-facebook-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-twitter-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-linkedin-filled" aria-hidden="true"></i></a></li>
                      <li><a href="#"><i className="lni-behance" aria-hidden="true"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="info-text">
                <h3><a href="#">Chris Adams</a></h3>
                <p>UI Designer, Apple</p>
              </div>
            </div>
            {/* <!-- Team Item Ends --> */}
          </div>
        </div>
        <a href="speakers.html" className="btn btn-common mt-30 wow fadeInUp" data-wow-delay="1.9s">All Speakers</a>
      </div>
    </section>
    {/* <!-- Team Section End --> */}

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
    <section style={{
      display: 'none'
    }} id="sponsors" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Sponsores</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
            </div>
          </div>
        </div>
        <div className="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div className="col-md-3 col-sm-3 col-xs-12">
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
          </div>
          <div className="col-12 text-center">
            <a href="#" className="btn btn-common">become a sponsor</a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Sponsors Section End --> */}

    {/* <!-- Ticket Pricing Area Start --> */}
    <section id="pricing" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Tickets</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
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
                <h5>Standard Pass</h5>
              </div>
              <div className="price">
                <h2>$40</h2>
                <p>452 Tickets Available</p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Coffee Breaks</span></li>
                  <li><i className="lni-check-mark-circle"></i><span className="text">Dinner</span></li>
                  {/* <li><i className="lni-close"></i><span className="text">Access to all areas</span></li> */}
                  {/* <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li> */}
                  {/* <li><i className="lni-close"></i><span className="text">Workshop</span></li> */}
                </ul>
              </div>
              <a href="#" className="btn btn-common">Buy Ticket @ Eventbrite</a>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xa-12 mb-3">
            
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Ticket Pricing Area End --> */}

    {/* <!-- Event Slides Section Start --> */}
    <section id="event-slides" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Code of Conduct</h1>
              {/* <p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p> */}
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
            <div className="video">
              <img className="img-fluid" src="assets/img/about/about.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
            <p className="intro-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <h2 className="intro-title">Check List</h2>
            <ul className="list-specification">
              <li><i className="lni-check-mark-circle"></i> Lorem Ipsum is simply dummy</li>
              <li><i className="lni-check-mark-circle"></i> Ipsum passages, and more recently</li>
              <li><i className="lni-check-mark-circle"></i> PageMaker including versions</li>
              <li><i className="lni-check-mark-circle"></i> Lorem Ipsum is simply dummy</li> 
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Event Slides Section End --> */}

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
                <form name="contact" method="POST" data-netlify="true" role="form" id="contactForm" data-toggle="validator">
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
                        <textarea className="form-control" rows="4" id="message" name="message" required data-error="Write your message"></textarea>
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
              Aorem ipsum dolor sit amet elit sed lum tempor incididunt ut labore el dolore alg minim veniam quis nostrud ncididunt.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#">About Conference</a></li>
              <li><a href="#">Our Speakers</a></li>
              <li><a href="#">Event Shedule</a></li>
              <li><a href="#">Latest News</a></li>
              <li><a href="#">Event Photo Gallery</a></li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
            <h3>RECENT POSTS</h3>
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
            </ul>
          </div>
          <div className="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
            <h3>SUBSCRIBE US</h3>
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
            </div>
            {/* <!-- /.widget --> */}
            <div className="widget">
              <h5 className="widget-title">FOLLOW US ON</h5>
              <ul className="footer-social">
                <li><a className="facebook" href="#"><i className="lni-facebook-filled"></i></a></li>
                <li><a className="twitter" href="#"><i className="lni-twitter-filled"></i></a></li>
                <li><a className="linkedin" href="#"><i className="lni-linkedin-filled"></i></a></li>
                <li><a className="google-plus" href="#"><i className="lni-google-plus"></i></a></li>
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

  
  </Layout>
)

export default IndexPage

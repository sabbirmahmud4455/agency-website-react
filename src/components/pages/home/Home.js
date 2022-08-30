import React from 'react';

const Home = () => {
  return (
	<>

  
      {/* Navbar Start */}
      <div class="container-fluid bg-white position-relative">
          <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
              <a href="index.html" class="navbar-brand text-secondary">
                  <h1 class="display-4 text-uppercase">DOT.NET</h1>
              </a>
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <div class="navbar-nav ml-auto py-0 pr-3 border-right">
                      <a href="index.html" class="nav-item nav-link active">Home</a>
                      <a href="about.html" class="nav-item nav-link">About</a>
                      <a href="service.html" class="nav-item nav-link">Services</a>
                      <a href="price.html" class="nav-item nav-link">Prices</a>
                      <a href="project.html" class="nav-item nav-link">Projects</a>
                      <div class="nav-item dropdown">
                          <a href="#a" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                          <div class="dropdown-menu rounded-0 m-0">
                              <a href="team.html" class="dropdown-item">Meat The Team</a>
                              <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                          </div>
                      </div>
                      <a href="contact.html" class="nav-item nav-link">Contact</a>
                  </div>
                  <div class="d-none d-lg-flex align-items-center pl-4">
                      <i class="fa fa-2x fa-mobile-alt text-primary mr-3"></i>
                      <div>
                          <h6 class="text-body text-uppercase mb-1"><small>Call Anytime</small></h6>
                          <h6 class="m-0">+012 345 6789</h6>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
      {/* Navbar End */}


      {/* Header Start */}
      <div class="container-fluid bg-primary py-5 px-0" style={{marginBottom: 90}}>
          <div class="row mx-0 align-items-center">
              <div class="col-lg-6 px-md-5 text-center text-lg-left">
                  <h1 class="display-2 text-uppercase mb-3">Best Digital Marketing Agency</h1>
                  <p class="text-dark mb-4">Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed sit.
                      Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed ipsum at ipsum nonumy amet. Clita
                      lorem dolore sed stet et est justo dolore.</p>
                  <a href="" class="btn btn-dark text-uppercase mt-1 py-3 px-5">Learn More</a>
              </div>
              <div class="col-lg-6 px-0 text-right">
                  <img class="img-fluid mt-5 mt-lg-0" src="img/header.png" alt=""/>
              </div>
          </div>
      </div>
      {/* Header End */}


      {/* About Start */}
      <div class="container-fluid py-5">
          <div class="container py-5">
              <div class="row align-items-center">
                  <div class="col-lg-6">
                      <img class="img-fluid mb-4 mb-lg-0" src="img/about.jpg" alt=""/>
                  </div>
                  <div class="col-lg-6">
                      <h1 class="display-4 text-uppercase mb-4">Best digital agency in downtown</h1>
                      <h5 class="text-uppercase text-primary mb-3">Clita elitr et amet et ipsum sea. Ipsum stet kasd ea et no est duo diam. Lorem dolores eos ut nonumy ipsum sit clita lorem no amet dolor dolore, stet sit dolor justo</h5>
                      <p class="mb-4">Eirmod est dolor nonumy sea amet dolore erat sit dolor et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</p>
                      <a href="" class="btn btn-primary text-uppercase py-3 px-5">Read More</a>
                  </div>
              </div>
          </div>
      </div>
      {/* About End */}
      

      {/* Services Start */}
      <div class="container-fluid py-5">
          <div class="container pt-5 pb-3">
              <h1 class="display-4 text-uppercase text-center mb-5">Our Creative Services</h1>
              <div class="row">
                  <div class="col-lg-3 mb-2">
                      <div class="service-item rounded p-5 mb-4">
                          <i class="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                          <h4 class="text-uppercase mb-4">Web <span class="d-block text-body">Design</span></h4>
                          <p class="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-2">
                      <div class="service-item rounded p-5 mb-4">
                          <i class="fa fa-3x fa-code text-primary mb-4"></i>
                          <h4 class="text-uppercase mb-4">Web <span class="d-block text-body">Development</span></h4>
                          <p class="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-2">
                      <div class="service-item rounded p-5 mb-4">
                          <i class="fa fa-3x fa-envelope-open-text text-primary mb-4"></i>
                          <h4 class="text-uppercase mb-4">Digital <span class="d-block text-body">Marketing</span></h4>
                          <p class="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
                  <div class="col-lg-3 mb-2">
                      <div class="service-item rounded p-5 mb-4">
                          <i class="fa fa-3x fa-edit text-primary mb-4"></i>
                          <h4 class="text-uppercase mb-4">Content <span class="d-block text-body">Writing</span></h4>
                          <p class="m-0">Vero amet vero eos kasd justo ipsum diam sed elitr</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Services End */}


      {/* Portfolio Start */}
      <div class="container-fluid py-5">
          <div class="container pt-5 pb-3">
              <h1 class="display-4 text-uppercase text-center mb-5">Visit Our Projects</h1>
              <div class="row">
                  <div class="col-12 text-center mb-2">
                      <ul class="list-inline mb-4" id="portfolio-flters">
                          <li class="btn btn-outline-dark text-uppercase py-2 px-4 active" data-filter="*">
                              <i class="fa fa-star text-primary mr-2"></i>All
                          </li>
                          <li class="btn btn-outline-dark text-uppercase py-2 px-4" data-filter=".first">
                              <i class="fa fa-laptop-code text-primary mr-2"></i>Design
                          </li>
                          <li class="btn btn-outline-dark text-uppercase py-2 px-4" data-filter=".second">
                              <i class="fa fa-mobile-alt text-primary mr-2"></i>Development
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="row portfolio-container">
                  <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
                      <div class="position-relative rounded overflow-hidden mb-2">
                          <img class="img-fluid w-100" src="img/portfolio-1.jpg" alt=""/>
                          <div class="portfolio-btn d-flex align-items-center justify-content-center">
                              <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                  <i class="fa fa-4x fa-plus text-primary"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
                      <div class="position-relative rounded overflow-hidden mb-2">
                          <img class="img-fluid w-100" src="img/portfolio-2.jpg" alt=""/>
                          <div class="portfolio-btn d-flex align-items-center justify-content-center">
                              <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                  <i class="fa fa-4x fa-plus text-primary"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
                      <div class="position-relative rounded overflow-hidden mb-2">
                          <img class="img-fluid w-100" src="img/portfolio-3.jpg" alt=""/>
                          <div class="portfolio-btn d-flex align-items-center justify-content-center">
                              <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                  <i class="fa fa-4x fa-plus text-primary"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
                      <div class="position-relative rounded overflow-hidden mb-2">
                          <img class="img-fluid w-100" src="img/portfolio-4.jpg" alt=""/>
                          <div class="portfolio-btn d-flex align-items-center justify-content-center">
                              <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                  <i class="fa fa-4x fa-plus text-primary"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 portfolio-item first">
                      <div class="position-relative rounded overflow-hidden mb-2">
                          <img class="img-fluid w-100" src="img/portfolio-5.jpg" alt=""/>
                          <div class="portfolio-btn d-flex align-items-center justify-content-center">
                              <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                  <i class="fa fa-4x fa-plus text-primary"></i>
                              </a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-4 portfolio-item second">
                      <div class="position-relative rounded overflow-hidden mb-2">
                          <img class="img-fluid w-100" src="img/portfolio-6.jpg" alt=""/>
                          <div class="portfolio-btn d-flex align-items-center justify-content-center">
                              <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                  <i class="fa fa-4x fa-plus text-primary"></i>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Portfolio End */}


      {/* Pricing Plan Start */}
      <div class="container-fluid py-5">
          <div class="container pt-5 pb-3">
              <h1 class="display-4 text-uppercase text-center mb-5">Competitive Pricing</h1>
              <div class="row">
                  <div class="col-lg-4 mb-2">
                      <div class="bg-light rounded text-center pt-5 mt-lg-5 mb-4">
                          <h2 class="text-uppercase">Basic</h2>
                          <h6 class="text-uppercase text-body mb-5">The Best Choice</h6>
                          <div class="text-center bg-dark rounded-circle p-4 mb-2">
                              <h1 class="display-4 text-white mb-0">
                                  <small class="align-top"
                                      style={{fontSize: 22, lineHeight: 45}}>$</small>49<small
                                      class="align-bottom" style={{fontSize: 16, lineHeight: 40}}>/
                                      Mo</small>
                              </h1>
                          </div>
                          <div class="text-center py-4">
                              <p>HTML5 & CSS3</p>
                              <p>Bootstrap v4</p>
                              <p>Responsive Layout</p>
                              <p>Compatible With All Browsers</p>
                              <a href="#ads" class="btn btn-dark text-uppercase py-2 px-4 my-3">Order Now</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 mb-2">
                      <div class="bg-dark rounded text-center pt-5 mb-4">
                          <h2 class="text-uppercase text-white">Standard</h2>
                          <h6 class="text-uppercase text-secondary mb-5">The Best Choice</h6>
                          <div class="text-center bg-primary rounded-circle p-4 mb-2">
                              <h1 class="display-4 mb-0">
                                  <small class="align-top"
                                      style={{fontSize: 22, lineHeight: 45}}>$</small>99<small
                                      class="align-bottom" style={{fontSize: 16, lineHeight: 40}}>/
                                      Mo</small>
                              </h1>
                          </div>
                          <div class="text-center text-secondary py-4">
                              <p>HTML5 & CSS3</p>
                              <p>Bootstrap v4</p>
                              <p>Responsive Layout</p>
                              <p>Compatible With All Browsers</p>
                              <a href="#aa" class="btn btn-primary text-uppercase py-2 px-4 my-3">Order Now</a>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 mb-2">
                      <div class="bg-light rounded text-center pt-5 mt-lg-5 mb-4">
                          <h2 class=" text-uppercase">Extended</h2>
                          <h6 class="text-uppercase text-body mb-5">The Best Choice</h6>
                          <div class="text-center bg-dark rounded-circle p-4 mb-2">
                              <h1 class="display-4 text-white mb-0">
                                  <small class="align-top"
                                      style={{fontSize: 22, lineHeight: 45}}>$</small>149<small
                                      class="align-bottom" style={{fontSize: 16, lineHeight: 40}}>/
                                      Mo</small>
                              </h1>
                          </div>
                          <div class="text-center py-4">
                              <p>HTML5 & CSS3</p>
                              <p>Bootstrap v4</p>
                              <p>Responsive Layout</p>
                              <p>Compatible With All Browsers</p>
                              <a href="#asdf" class="btn btn-dark text-uppercase py-2 px-4 my-3">Order Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Pricing Plan End */}


      {/* Team Start */}
      <div class="container-fluid py-5">
          <div class="container py-5">
              <h1 class="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
              <div class="owl-carousel team-carousel position-relative" style={{paddingLeft: 30}}>
                  <div class="team-item rounded overflow-hidden">
                      <div class="position-relative">
                          <img class="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                          <div class="team-overlay">
                              <div class="d-flex align-items-center justify-content-start">
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#asdf"><i class="fab fa-twitter"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#asdf"><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#asdf"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div class="bg-light text-center p-4">
                          <h4 class="text-uppercase">John Doe</h4>
                          <p class="m-0">CEO, Founder</p>
                      </div>
                  </div>
                  <div class="team-item rounded overflow-hidden">
                      <div class="position-relative">
                          <img class="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                          <div class="team-overlay">
                              <div class="d-flex align-items-center justify-content-start">
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-twitter"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div class="bg-light text-center p-4">
                          <h4 class="text-uppercase">Kate Wilson</h4>
                          <p class="m-0">Designer</p>
                      </div>
                  </div>
                  <div class="team-item rounded overflow-hidden">
                      <div class="position-relative">
                          <img class="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                          <div class="team-overlay">
                              <div class="d-flex align-items-center justify-content-start">
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-twitter"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div class="bg-light text-center p-4">
                          <h4 class="text-uppercase">John Brown</h4>
                          <p class="m-0">Developer</p>
                      </div>
                  </div>
                  <div class="team-item rounded overflow-hidden">
                      <div class="position-relative">
                          <img class="img-fluid w-100" src="img/team-4.jpg" alt=""/>
                          <div class="team-overlay">
                              <div class="d-flex align-items-center justify-content-start">
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-twitter"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn btn-lg btn-primary btn-lg-square mx-1" href="#aa"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                      </div>
                      <div class="bg-light text-center p-4">
                          <h4 class="text-uppercase">Paul Watson</h4>
                          <p class="m-0">Marketer</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Team End */}


      {/* Testimonial Start */}
      <div class="container-fluid py-5">
          <div class="container py-5">
              <h1 class="display-4 text-uppercase text-center mb-5">Our Client's Say</h1>
              <div class="owl-carousel testimonial-carousel">
                  <div class="testimonial-item position-relative text-center rounded p-4">
                      <img class="img-fluid rounded mx-auto my-4" src="img/testimonial-1.jpg" alt=""/>
                      <h5 class="text-uppercase">Client Name</h5>
                      <p class="text-uppercase">Profession</p>
                      <p class="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                  </div>
                  <div class="testimonial-item position-relative text-center rounded p-4">
                      <img class="img-fluid rounded mx-auto my-4" src="img/testimonial-2.jpg" alt=""/>
                      <h5 class="text-uppercase">Client Name</h5>
                      <p class="text-uppercase">Profession</p>
                      <p class="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                  </div>
                  <div class="testimonial-item position-relative text-center rounded p-4">
                      <img class="img-fluid rounded mx-auto my-4" src="img/testimonial-3.jpg" alt=""/>
                      <h5 class="text-uppercase">Client Name</h5>
                      <p class="text-uppercase">Profession</p>
                      <p class="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                  </div>
                  <div class="testimonial-item position-relative text-center rounded p-4">
                      <img class="img-fluid rounded mx-auto my-4" src="img/testimonial-4.jpg" alt=""/>
                      <h5 class="text-uppercase">Client Name</h5>
                      <p class="text-uppercase">Profession</p>
                      <p class="text-secondary">Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos. Lorem duo ipsum sea amet et clita dolor</p>
                  </div>
              </div>
          </div>
      </div>
      {/* Testimonial End */}


      {/* Contact Start */}
      <div class="container-fluid py-5 px-0">
          <div class="row mt-5 mx-0">
              <div class="col-12 px-0" style={{height: 500}}>
                  <div class="position-relative h-100">
                      {/* <iframe class="position-relative w-100 h-100"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                          frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false"
                          tabindex="0"></iframe> */}
                          iframe
                  </div>
              </div>
          </div>
          <div class="row mx-0 justify-content-center" style={{marginTop: -200}}>
              <div class="col-lg-6 col-md-8 col-sm-10 px-0">
                  <div class="contact-form bg-white rounded p-5">
                      <div id="success"></div>
                      <form name="sentMessage" id="contactForm" novalidate="novalidate">
                          <div class="form-row">
                              <div class="col-md-6">
                                  <div class="control-group">
                                      <input type="text" class="form-control bg-light border-0 p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                      <p class="help-block text-danger"></p>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="control-group">
                                      <input type="email" class="form-control bg-light border-0 p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                      <p class="help-block text-danger"></p>
                                  </div>
                              </div>
                          </div>
                          <div class="control-group">
                              <input type="text" class="form-control bg-light border-0 p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                              <p class="help-block text-danger"></p>
                          </div>
                          <div class="control-group">
                              <textarea class="form-control bg-light border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                              <p class="help-block text-danger"></p>
                          </div>
                          <div class="text-center">
                              <button class="btn btn-primary text-uppercase py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      {/* Contact End */}


      {/* Footer Start */}
      <div class="container-fluid bg-dark text-white-50 py-5 px-sm-3 px-md-5" style={{marginTop: 90}}>
          <div class="row pt-5">
              <div class="col-lg-3 col-md-6 mb-5">
                  <a href="index.html" class="navbar-brand">
                      <h1 class="m-0 mt-n2 text-white display-4">DOT.NET</h1>
                  </a>
                  <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                  <h6 class="text-uppercase text-white py-2">Follow Us</h6>
                  <div class="d-flex justify-content-start">
                      <a class="btn btn-lg btn-primary btn-lg-square mr-2" href="#asdf"><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-lg btn-primary btn-lg-square mr-2" href="#asdf"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-lg btn-primary btn-lg-square mr-2" href="#asdf"><i class="fab fa-linkedin-in"></i></a>
                      <a class="btn btn-lg btn-primary btn-lg-square" href="#adsf"><i class="fab fa-instagram"></i></a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-5">
                  <h4 class="text-uppercase text-white mb-4">Get In Touch</h4>
                  <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                  <p><i class="fa fa-map-marker-alt text-white mr-2"></i>123 Street, New York, USA</p>
                  <p><i class="fa fa-phone-alt text-white mr-2"></i>+012 345 67890</p>
                  <p><i class="fa fa-envelope text-white mr-2"></i>info@example.com</p>
              </div>
              <div class="col-lg-3 col-md-6 mb-5">
                  <h4 class="text-uppercase text-white mb-4">Quick Links</h4>
                  <div class="d-flex flex-column justify-content-start">
                      <a class="text-white-50 mb-2" href="#aa"><i class="fa fa-angle-right text-white mr-2"></i>Home</a>
                      <a class="text-white-50 mb-2" href="#aa"><i class="fa fa-angle-right text-white mr-2"></i>About Us</a>
                      <a class="text-white-50 mb-2" href="#aa"><i class="fa fa-angle-right text-white mr-2"></i>Our Services</a>
                      <a class="text-white-50 mb-2" href="#aa"><i class="fa fa-angle-right text-white mr-2"></i>Pricing Plan</a>
                      <a class="text-white-50 mb-2" href="#aa"><i class="fa fa-angle-right text-white mr-2"></i>Meet The Team</a>
                      <a class="text-white-50" href="#aa"><i class="fa fa-angle-right text-white mr-2"></i>Contact Us</a>
                  </div>
              </div>
              <div class="col-lg-3 col-md-6 mb-5">
                  <h4 class="text-uppercase text-white mb-4">Newsletter</h4>
                  <p class="mb-4">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                  <div class="w-100 mb-3">
                      <div class="input-group">
                          <input type="text" class="form-control border-light" style={{padding: 25}} placeholder="Your Email"/>
                          <div class="input-group-append">
                              <button class="btn btn-primary text-uppercase px-3">Sign Up</button>
                          </div>
                      </div>
                  </div>
                  <i>Lorem sit sed elitr sed kasd et</i>
              </div>
          </div>
      </div>
      <div class="container-fluid py-4 px-sm-3 px-md-5" style={{background: '#111111'}}>
          <p class="mb-2 text-center text-white-50">&copy; <a href="#adsf">Your Site Name</a>. All Rights Reserved.</p>
          <p class="m-0 text-center text-white-50">Designed by <a href="https://htmlcodex.com">HTML Codex</a></p>
      </div>
      {/* Footer End */}


      {/* Back to Top */}
      <a href="#adsf" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="fa fa-angle-up"></i></a>

  
  
  </>
  )
}

export default Home
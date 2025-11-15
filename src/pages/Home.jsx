import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function HomeAA() {
      return (
        <>
          <Header />
          <section className="banner1 ">
  <div className="banner container">
    <div className="row w-100 align-items-center">
      <div className="col-md-7 banner-text">
        <h1>Made for Yoga Studios</h1>
        <p className="fs-4 text-muted">Smart, Simple Class Scheduling</p>
        <p>Book and manage yoga classes effortlessly. <br />Perfect for studios and gyms.</p>
        <a href="book-demo.html" className="btn btn-primary me-2">Book Demo</a>
        <a href="./contact-us.html" className="btn btn-outline-primary">Contact Us</a>
      </div>
      <div className="col-md-5">
        <div id="yogaCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="image/slide1.png" className="d-block w-100" alt="Slide 1"/>
            </div>
            <div className="carousel-item">
              <img src="image/slide1.png" className="d-block w-100" alt="Slide 2"/>
            </div>
            <div className="carousel-item">
              <img src="image/slide1.png" className="d-block w-100" alt="Slide 3"/>
            </div>
          </div>
        </div>
        <div className="carousel-indicators custom-indicators">
          <button type="button" data-bs-target="#yogaCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
          <button type="button" data-bs-target="#yogaCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#yogaCarousel" data-bs-slide-to="2"></button>
        </div>
      </div>
    </div>
  </div>
  </section>
  <section className="stats1">
  <div className="container">
    <div className="row stats justify-content-center text-center">
      <div className="col-6 col-md-3 stat-box">
        <div className="counter-098">
        <h4 className="counter" data-target="500">0+</h4>
        <p>Happy Studios</p>
      </div>
      </div>
      <div className="col-6 col-md-3 stat-box">
        <div className="counter-098">
        <h4 className="counter" data-target="200000">₹0+</h4>
        <p>Booking Processed</p>
      </div>
    </div>
      <div className="col-6 col-md-3 stat-box">
        <div className="counter-098">
        <h4 className="counter" data-target="600000">0+</h4>
        <p>Active Yogis</p>
      </div>
      </div>
      <div className="col-6 col-md-3 stat-box">
        <div className="counter-098">
        <h4 className="counter" data-target="15">0+</h4>
        <p>Countries</p>
      </div>
      </div>
    </div>
  </div>
  </section>
  <section className="about-section">
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-6 mb-4 mb-md-0">
        <span className="badge text-bg-light text-purple px-3 py-2">About</span>
    <span className="ms-2"> Us </span>

        <h2 className="about-heading">We Believe Yoga is</h2>
        <div className="about-subheading">More Than a Practice</div>
        <p className="text-muted">
          Rooted in the timeless wisdom of traditional yoga and enriched with modern insights, YUJAYA offers transformative yoga training programs designed to nurture physical well-being, mental clarity, and inner balance.
        </p>
        <ul className="check-list">
          <li><i className="fa fa-check-circle" aria-hidden="true"></i>YUJAYA blends traditional and modern yoga for all levels.</li>
          <li><i className="fa fa-check-circle" aria-hidden="true"></i>Our name means victory through unity of body and mind.</li>
        </ul>
        <a href="./about-us.html" className="btn btn-about mt-3">About Us →</a>
      </div>

      <div className="col-md-6">
        <div className="image-wrapper">
          <div className="image-decoration"></div>
          <img src="image/about-09.png" alt="Yoga Class" />
        </div>
      </div>
    </div>
  </div>
  </section>
  <section className="whychose">
  <div className="container py-5">
    <div className="section-title">
      <span className="badge text-bg-light text-purple px-3 py-2">Why</span>
      <span className="ms-2">Choose Us </span>
      <h2 className="mt-3">The  Ultimate <span className="yoga-09">Yoga Experience</span></h2>
    </div>

    <div className="row g-4">
      
      <div className="col-lg-4 col-md-6">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="image/smart-fitness.png" alt="Calendar Icon" />
          </div>
          <div className="feature-content">
            <h5>Smart Fitness Class Scheduling</h5>
            <p>Easily automate your class schedules with customizable time slots. Keep your clients updated.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="image/two.png" alt="Calendar Icon" />
          </div>

          <div className="feature-content">
            <h5>Full Membership Control</h5>
            <p>Track memberships, renewals, and payments in one place. Reduce admin work.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="image/three.png" alt="Calendar Icon" />
          </div>
          <div className="feature-content">
            <h5>Instant Class Reservations</h5>
            <p>Allow members to book classes in real time from any device.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="image/four.png" alt="Calendar Icon" />
          </div>
          <div className="feature-content">
            <h5>Effortless Class Pass Integration</h5>
            <p>Sync classes automatically so your schedule is always up to date.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="image/five.png" alt="Calendar Icon" />
          </div>
          <div className="feature-content">
            <h5>Custom Calendar-Based Bookings</h5>
            <p>Flexible calendar view for booking, cancellations, and reschedules.</p>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6">
        <div className="feature-card">
          <div className="feature-icon">
            <img src="image/six.png" alt="Calendar Icon" />
          </div>

          <div className="feature-content">
            <h5>Advanced Payroll & Reporting Tools</h5>
            <p>Automated tracking and reports for smarter decisions.</p>
          </div>
        </div>
      </div>
        <div className="text-center mt-5">
        <a href="./software-features.html" className="btn btn-purple12 px-4 py-2">
          View More Features →
        </a>
      </div>
    </div>
  </div>
  </section>
  <section className="video-section" id="video1">
    <div className="wrapper">
        <div className="video-main">
            <div className="promo-video">
            <div className="waves-block">
                <div className="waves wave-1"></div>
                <div className="waves wave-2"></div>
                <div className="waves wave-3"></div>
            </div>
            </div>
            <a href="https://www.youtube.com/watch?v=BqI0Q7e4kbk" className="video video-popup mfp-iframe" data-lity="">
                <i className="fa fa-play"></i>
            </a>

    </div>
    </div>
  </section>

  <section className="price-table" id="price">
	 <div className="container">
    <h2 className="section-title">Flexible Pricing for Every Professionals, Studio & Academy</h2>

    <div className="row g-4">
      
      <div className="col-md-4">
        <div className="pricing-card h-100">
        	 <p>Trial Period of<br /><strong>15 Days</strong></p>
          <div className="price">Free Trial</div>
          <p className="subtext">Limited access to core features</p>
          <ul className="features list-unstyled mt-3">
            <li>• Class Scheduling</li>
            <li>• Sell Memberships</li>
            <li>• Credit Card Payment</li>
            <li>• Phone Payment Terminal</li>
            <li>• Member Dashboard</li>
            <li>• Studio Dashboard</li>
            <li>• Email & App Notifications</li>
            <li>• Reports & Dashboards</li>
          </ul>
          <button className="btn btn-purple">Start Free Trial</button>
        </div>
      </div>

      <div className="col-md-4">
        <div className="pricing-card h-100">
        	<p>Great Value<br /><strong>For Professional</strong></p>
          <div className="price">INR 1000
            <span className="sz1rem">/month</span>
            </div>
          <p className="subtext">₹12,999 when billed monthly</p>
          <ul className="features list-unstyled mt-3">
            <li>• Class Scheduling</li>
            <li>• Sell Memberships</li>
            <li>• Credit Card Payment</li>
            <li>• Phone Payment Terminal</li>
            <li>• Member Dashboard</li>
            <li>• Studio Dashboard</li>
            <li>• Email & App Notifications</li>
            <li>• Reports & Dashboards</li>
          </ul>
          <button className="btn btn-purple">Start Free Trial</button>
        </div>
      </div>

      <div className="col-md-4">
        <div className="pricing-card h-100">
        	<p>Great Value<br /><strong>For Enterprise</strong></p>
          <div className="price">INR 1500<span className="sz1rem">/month</span></div>
          <p className="subtext">₹17,999 when billed monthly</p>
          <ul className="features list-unstyled mt-3">
            <li>• Class Scheduling</li>
            <li>• Sell Memberships</li>
            <li>• Credit Card Payment</li>
            <li>• Phone Payment Terminal</li>
            <li>• Member Dashboard</li>
            <li>• Studio Dashboard</li>
            <li>• Email & App Notifications</li>
            <li>• Reports & Dashboards</li>
          </ul>
          <button className="btn btn-purple">Start Free Trial</button>
        </div>
      </div>
    </div>
  </div>
  </section>

  <section className="testnmoinal-table">
	<div className="container">
  <div className="section-title">
    <span className="badge text-bg-light text-purple px-3 py-2">Customer</span>
    <span className="ms-2"> Reviews </span>
    <h2>Why Studios & Trainers Love Our</h2>
    <h5>Booking Software</h5>
  </div>

  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
  <div className="carousel-inner">

    
    <div className="carousel-item active">
      <div className="row justify-content-center g-4">
        <div className="col-md-4 col-12">
          <div className="testimonial-card">
            <img src="image/Ellipse-62.png" className="user-img" alt="Rajan"/>
            <div className="stars">★★★★★</div>
            <div className="testimonial-name">RAJAN SINGH</div>
            <div className="testimonial-text">
              YUJAYA's training transformed my practice and mindset. Incredible teachers who truly live what they teach.
            </div>
          </div>
        </div>

        <div className="col-md-4 d-none d-md-block">
          <div className="testimonial-card active-card">
            <img src="image/Ellipse-62.png" className="user-img" alt="Srishti"/>
            <div className="stars">★★★★★</div>
            <div className="testimonial-name">SRISHTI AGGARWAL</div>
            <div className="testimonial-text">
              YUJAYA's training transformed my practice and mindset. Incredible teachers who truly live what they teach.
            </div>
          </div>
        </div>

        <div className="col-md-4 d-none d-md-block">
          <div className="testimonial-card">
            <img src="image/Ellipse-62.png" className="user-img" alt="Ansh"/>
            <div className="stars">★★★★★</div>
            <div className="testimonial-name">ANSH SAXENA</div>
            <div className="testimonial-text">
              YUJAYA's training transformed my practice and mindset. Incredible teachers who truly live what they teach.
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="carousel-item">
      <div className="row justify-content-center g-4">
        <div className="col-md-4 col-12">
          <div className="testimonial-card active-card">
            <img src="image/Ellipse-62.png" className="user-img" alt="Riya"/>
            <div className="stars">★★★★★</div>
            <div className="testimonial-name">RIYA MEHRA</div>
            <div className="testimonial-text">
              Fantastic experience! Their platform simplified everything for my yoga studio.
            </div>
          </div>
        </div>

        <div className="col-md-4 d-none d-md-block">
          <div className="testimonial-card">
            <img src="image/Ellipse-62.png" className="user-img" alt="Varun"/>
            <div className="stars">★★★★★</div>
            <div className="testimonial-name">VARUN KAPOOR</div>
            <div className="testimonial-text">
              Easy to use, powerful features, and outstanding support team!
            </div>
          </div>
        </div>

        <div className="col-md-4 d-none d-md-block">
          <div className="testimonial-card">
            <img src="image/Ellipse-62.png" className="user-img" alt="Kavita"/>
            <div className="stars">★★★★★</div>
            <div className="testimonial-name">KAVITA SHARMA</div>
            <div className="testimonial-text">
              Helped us increase membership sign-ups and manage schedules better.
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div className="carousel-indicators mt-4">
    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
  </div>
</div>

</div>
</section>

  <section className="faq-section container">
    <div className="row align-items-center g-5">
      
      <div className="col-md-5 faq-image text-center">
        <img src="image/Rectangle42.png" alt="Yoga pose"/>
      </div>

      <div className="col-md-7">
        <span className="badge-faq">FAQs</span>
        <h2 className="mt-3"><span className="text-purple-23">Your Questions,</span> <em className="yoga-09">Our<br /> Expert Answers</em></h2>
        <div className="accordion mt-4" id="faqAccordion">



          <div className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                What should I bring to class?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                A yoga mat, comfortable clothing, and a water bottle. Some studios provide mats, but it’s best to bring your own.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                How long are the classes?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Most of our yoga classes are 60 minutes long.
              </div>
            </div>
          </div>

          <div className="accordion-item border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq4">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                Do you offer online yoga classes?
              </button>
            </h2>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, we offer live and recorded online yoga sessions so you can practice from anywhere.
              </div>
            </div>
          </div>
           <div className="accordion-item border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq5">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                Do you offer online yoga classes?
              </button>
            </h2>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, we offer live and recorded online yoga sessions so you can practice from anywhere.
              </div>
            </div>
          </div>
           <div className="accordion-item border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq6">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
                Do you offer online yoga classes?
              </button>
            </h2>
            <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Yes, we offer live and recorded online yoga sessions so you can practice from anywhere.
              </div>
            </div>
          </div>


        </div>

        <div className="mt-3 text-end">
          <a href="./faq.html" className="text-decoration-none text-purple">View More ↓</a>
        </div>
      </div>
    </div>
  </section>
<section className="blog-section">
  <div className="container mb-4">
  <div className="row align-items-center">
    <div className="col-md-6 text-start">
      <h2>
        <span className="text-primary fw-bold">Latest insights, trends,<br />and</span>
        <span className="fst-italic text-secondary">expert tips</span>
      </h2>
    </div>

    <div className="col-md-6 text-md-end text-start mt-3 mt-md-0">
      <a href="./artical.html" className="btn btn-about mt-3">View All Articles →</a>
    </div>
  </div>
  </div>


 <div className="row">
  <div className="col-md-4">
    <div className="releted-artical-inner">
      <div className="releted-artical-inner-img">
        <img src="./image/blog1.png" alt=""/>
        <p>The Science Behind Yoga: What Research Says</p>
        </div>
      <div className="releted-artical-inner-content">
        <p>📅 May 5, 2025</p>
        <p>Read More <i className="bi bi-arrow-up-right"></i></p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="releted-artical-inner">
      <div className="releted-artical-inner-img">
        <img src="./image/blog2.png" alt="" />
        <p>The Science Behind Yoga: What Research Says</p>
      </div>
      <div className="releted-artical-inner-content">
        <p>📅 May 5, 2025</p>
        <p>Read More <i className="bi bi-arrow-up-right"></i></p>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="releted-artical-inner">
      <div className="releted-artical-inner-img">
        <img src="./image/blog3.png" alt="" />
        <p>The Science Behind Yoga: What Research Says</p>
      </div>
      <div className="releted-artical-inner-content">
        <p>📅 May 5, 2025</p>
        <p>Read More <i className="bi bi-arrow-up-right"></i></p>
      </div>
    </div>
</div>
</div>
</section>
  
<Footer/>
        </>
      );
    }

import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function ContactUs() {
      return (
        <>
        <Header />

    <section className="hero-section">
  <div className="content banner">
    <h1>Contact Us</h1>
    <p><a className="head-content" href="index.html">Home &gt;</a>Contact Us</p>
  </div>
</section>

  <div className="container py-5">
    <div className="row g-4">
      <div className="col-md-4">
        <div className="contact-info-inner">
        <div className="contact-info bg-email">
          <i className="fa-solid fa-envelope"></i>

        </div>
        <div className="contact-info-tittle">
           <h6>Get an Email</h6>
          <p>info@yogya.com</p>
        </div>
        </div>
      </div>
      <div className="col-md-4">
         <div className="contact-info-inner">
        <div className="contact-info bg-call">
          <i className="fa-solid fa-phone"></i>

        </div>
           <div className="contact-info-tittle">
          <h6>Make a Call</h6>
          <p>+91 012-345-6789</p>

           </div>
           </div>
      </div>
      <div className="col-md-4">
          <div className="contact-info-inner">
        <div className="contact-info bg-location">
          <i className="fa-solid fa-location-dot"></i>

        </div>
        <div className="contact-info-tittle">
         <h6>Go for Location</h6>
          <p>123 Consecutetur St, Iqula 1080d</p>
        </div>
      </div>
      </div>
    </div>
  </div>

  <section className="contact-section">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-6">
          <div className="contact-form">
            <h4>Let’s Get in Touch</h4>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <input type="text" className="form-control" placeholder="Phone Number" />
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn-send mt-2">Send Message</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.112992239796!2d-122.41941548468158!3d37.77492977975837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b1a95a74f%3A0xeca2e5d96f97af43!2sSan%20Francisco!5e0!3m2!1sen!2sin!4v1696746781341!5m2!1sen!2sin" 
            width="100%" height="400" allowfullscreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </section>

  <section className="faq-section">
    <div className="container">
      <div className="main-heading">
<h6>FAQS</h6>
<h2>Your Questions, <span>Our Expert Answers</span></h2>
      </div>


      <div className="accordion mt-4" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Do I need prior yoga experience to join?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              No prior experience needed! We have beginner-friendly classes to get you started.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              What should I bring to class?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              A yoga mat, comfortable clothing, and a water bottle are recommended.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              How long are the classes?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Each class typically lasts between 45–60 minutes depending on the style and instructor.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
              Do you offer online yoga classes?
            </button>
          </h2>
          <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, we offer live and recorded online sessions for your convenience.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
        </>
      );
    }

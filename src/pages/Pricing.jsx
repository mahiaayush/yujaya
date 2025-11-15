import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function Pricing() {
      return (
        
        <>
        <Header />



  <section className="hero-section">
  <div className="content banner">
    <h1>Pricing</h1>
<p><a className="head-content" href="index.html">Home </a>Pricing</p>
  </div>
</section>

<section className="price-table" id="price">
	 <div className="container">
    <h2 className="section-title">Flexible Pricing for Every Professionals, Studio &amp; Academy</h2>

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
            <li>• Email &amp; App Notifications</li>
            <li>• Reports &amp; Dashboards</li>
          </ul>
          <button className="btn btn-purple">Start Free Trial</button>
        </div>
      </div>

      <div className="col-md-4">
        <div className="pricing-card h-100">
        	<p>Great Value<br /><strong>For Professional</strong></p>
          <div className="price">INR 1000<span className="sz1rem">/month</span></div>
          <p className="subtext">₹12,999 when billed monthly</p>
          <ul className="features list-unstyled mt-3">
            <li>• Class Scheduling</li>
            <li>• Sell Memberships</li>
            <li>• Credit Card Payment</li>
            <li>• Phone Payment Terminal</li>
            <li>• Member Dashboard</li>
            <li>• Studio Dashboard</li>
            <li>• Email &amp; App Notifications</li>
            <li>• Reports &amp; Dashboards</li>
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
            <li>• Email &amp; App Notifications</li>
            <li>• Reports &amp; Dashboards</li>
          </ul>
          <button className="btn btn-purple">Start Free Trial</button>
        </div>
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
        </>
      );
    }

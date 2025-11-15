import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function SoftwareFeatures() {
      return (
        <>
        <Header />

<section className="hero-section">
  <div className="content banner">
    <h1>Software Features </h1>
<p><a className="head-content" href="index.html">Home </a>Software Features </p>
  </div>
</section>

  <div className="container mt-5 soft-78">
    <div className="mx-auto">
      <h2 className="mt-3 yas-6">The  Ultimate <span className="yoga-09">Yoga Experience</span></h2>
      <p className="text-center text-muted">Manage your studio on-the-go with mobile-friendly access. Students and teachers<br /> can stay connected anytime, anywhere.</p>
      <ul className="nav nav-tabs justify-content-center mb-3 faq-6783" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="individual-tab" data-bs-toggle="tab" data-bs-target="#individual" type="button" role="tab">Individual</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio" type="button" role="tab">Academy</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio1" type="button" role="tab">Studio</button>
        </li>
      </ul>

      <div className="tab-content tab-450">
        <div className="tab-pane fade show active" id="individual" role="tabpanel">
          <div className="row g-4">
    <div className="col-lg-4 col-md-6">
      <div className="feature-card">
        <div className="feature-icon">
           <img src="image/smart-fitness.png" alt="Calendar Icon"/>
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
           <img src="image/three.png" alt="Calendar Icon"/>
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
          <h5>Advanced Payroll &amp; Reporting Tools</h5>
          <p>Automated tracking and reports for smarter decisions.</p>
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
          <h5>Advanced Payroll &amp; Reporting Tools</h5>
          <p>Automated tracking and reports for smarter decisions.</p>
        </div>
      </div>
    </div>

  </div>
<div className="slider-section slider-12 container">
  <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="row">
          <div className="col-md-6">
            <img src="image/image71.png" className="img-fluid" alt="Slide 1" />
          </div>
          <div className="col-md-6">
            <img src="image/image70.png" className="img-fluid" alt="Slide 2" />
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="row">
          <div className="col-md-6">
            <img src="image/image70.png" className="img-fluid" alt="Slide 3" />
          </div>
          <div className="col-md-6">
            <img src="image/image71.png" className="img-fluid" alt="Slide 4" />
          </div>
        </div>
      </div>

    </div>

    
    <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>

  <div className="mt-4">
    <a href="./book-demo.html" className="btn btn-custom">Start Free Trial</a>
    <a href="./index.html#video1" className="btn btn-custom">Watch Demo Video</a>
  </div>
</div>


        </div>

        <div className="tab-pane fade slider-12" id="studio" role="tabpanel">
         <div className="tab-content tab-450">
        <div className="tab-pane fade show active" id="individual" role="tabpanel">
          <div className="row g-4">
    <div className="col-lg-4 col-md-6">
      <div className="feature-card">
        <div className="feature-icon">
           <img src="image/smart-fitness.png" alt="Calendar Icon"/>
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
           <img src="image/two.png" alt="Calendar Icon"/>
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
           <img src="image/three.png" alt="Calendar Icon"/>
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
           <img src="image/four.png" alt="Calendar Icon"/>
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
           <img src="image/five.png" alt="Calendar Icon"/>
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
           <img src="image/six.png" alt="Calendar Icon"/>
         </div>

        <div className="feature-content">
          <h5>Advanced Payroll &amp; Reporting Tools</h5>
          <p>Automated tracking and reports for smarter decisions.</p>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="feature-card">
        <div className="feature-icon">
           <img src="image/four.png" alt="Calendar Icon"/>
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
           <img src="image/five.png" alt="Calendar Icon"/>
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
           <img src="image/six.png" alt="Calendar Icon"/>
         </div>

        <div className="feature-content">
          <h5>Advanced Payroll &amp; Reporting Tools</h5>
          <p>Automated tracking and reports for smarter decisions.</p>
        </div>
      </div>
    </div>

  </div>
<div className="slider-section slider-12 container">
  <div id="imageCarousel2" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">

      <div className="carousel-item active">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src="image/image71.png" className="img-fluid" alt="Slide 1"/>
          </div>
          <div className="col-md-6">
            <img src="image/image70.png" className="img-fluid" alt="Slide 2"/>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <img src="image/image70.png" className="img-fluid" alt="Slide 3"/>
          </div>
          <div className="col-md-6">
            <img src="image/image71.png" className="img-fluid" alt="Slide 4"/>
          </div>
        </div>
      </div>

    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel2" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>

    <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel2" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
</div>


    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#imageCarousel1" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#imageCarousel2" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>


  <div className="mt-4">
    <a href="./book-demo.html" className="btn btn-custom">Start Free Trial</a>
    <a href="./index.html#video1" className="btn btn-custom">Watch Demo Video</a>
  </div>
</div>
</div>
</div>
        <div className="tab-pane fade" id="studio1" role="tabpanel">
          <p>Tab3</p>
        </div>
      </div>
    </div>

<Footer />

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </>
      );
    }

import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";
import Header from './others/Header';
import Footer from './others/Footer';
import { getContactContent } from '../store/action/Action';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ContactUs() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getContactContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const contactContent = useSelector(
    (state) => state?.getContactContent?.ContactResponse?.data
  )
  console.log("contactContent", contactContent);
  const {
    email,
    location,
    map,
    pageData,
    phone,
    socialmediainformation
  } = contactContent[0] ||{};

  
      return (
        <>
          <Header />
            <section className="hero-section" style={{
               backgroundImage: `url(${pageData?.banner_img}) center/cover no-repeat;`,
               padding: '100px 0',
               backgroundPosition: 'center',
               textAlign: 'center',
               position: 'relative',
               }}>
              <div className="content banner">
                <h1>{pageData?.title}</h1>
                <p><a className="head-content" href="/">Home &gt;</a>{pageData?.title}</p>
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
                    <p>{email}</p>
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
                    <p>{phone}</p>

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
                    <p>{location}</p>
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
                      src={map}
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
        </>
      );
    }

import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";

import Header from './others/Header';
import Footer from './others/Footer';
import { getFaqContent } from '../store/action/FaqAction';

export default function Faq() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getFaqContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const faqContent = useSelector(
    (state) => state?.getFaqContent?.FaqResponse?.data
  )
  console.log("render FAQ page", faqContent);


      return (
        <> 
<Header />
  <section className="hero-section">
  <div className="content banner">
    <h1>FAQ’s</h1>
    <p><a className="head-content" href="index.html">Home </a>FAQ’s</p>
  </div>
</section>
    <div className="container mt-5 soft-78 ak870">
    <div className="mx-auto">
      <h2 className="mt-3 yas-67">Your Questions, <span className="yoga-09">Our Expert Answers</span></h2>
      <ul className="nav nav-tabs justify-content-center mb-3 faq-6780" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="individual-tab" data-bs-toggle="tab" data-bs-target="#individual" type="button" role="tab">About YUJAYA</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio" type="button" role="tab">Services & Programs</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio1" type="button" role="tab">Pricing & Payments</button>
        </li>
      </ul>

      <div className="tab-content tab-450">
        <div className="tab-pane fade show active" id="individual" role="tabpanel">
          <div className="accordion mt-4" id="faqAccordion">
          <div className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq2">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                What is YUJAYA?
              </button>
            </h2>
            <div id="collapse2" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                YUJAYA is designed for independent yoga teachers, boutique studios, and larger academies. Whether you run a single class or manage multiple locations, YUJAYA can be tailored to your needs.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq3">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
               Who can use YUJAYA?
              </button>
            </h2>
            <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                YUJAYA is designed for independent yoga teachers, boutique studios, and larger academies. Whether you run a single class or manage multiple locations, YUJAYA can be tailored to your needs.
              </div>
            </div>
          </div>



          <div className="accordion-item border-0 rounded-3 shadow-sm">
  <h2 className="accordion-header" id="faq4">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
      Do I need technical knowledge to use YUJAYA?
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
      How can I join a yoga session?
    </button>
  </h2>
  <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
    <div className="accordion-body">
      You can join through our website or mobile app after signing up.
    </div>
  </div>
</div>

<div className="accordion-item border-0 rounded-3 shadow-sm">
  <h2 className="accordion-header" id="faq6">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
      Are the sessions suitable for beginners?
    </button>
  </h2>
  <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
    <div className="accordion-body">
      Yes, we offer programs specifically designed for beginners.
    </div>
  </div>
</div>

<div className="accordion-item border-0 rounded-3 shadow-sm">
  <h2 className="accordion-header" id="faq7">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7">
      Can I access recordings if I miss a live session?
    </button>
  </h2>
  <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
    <div className="accordion-body">
      Yes, all live sessions are recorded and available later in your dashboard.
    </div>
  </div>
</div>

<div className="accordion-item border-0 rounded-3 shadow-sm">
  <h2 className="accordion-header" id="faq8">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8">
      Do you offer personalized coaching?
    </button>
  </h2>
  <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
    <div className="accordion-body">
      Yes, we provide one-on-one coaching sessions upon request.
    </div>
  </div>
</div>

<div className="accordion-item border-0 rounded-3 shadow-sm">
  <h2 className="accordion-header" id="faq9">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9">
      What equipment do I need for the sessions?
    </button>
  </h2>
  <div id="collapse9" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
    <div className="accordion-body">
      A yoga mat and comfortable clothing are recommended, but no advanced gear is required.
    </div>
  </div>
</div>

<div className="accordion-item border-0 rounded-3 shadow-sm">
  <h2 className="accordion-header" id="faq10">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10">
      Can I cancel my subscription anytime?
    </button>
  </h2>
  <div id="collapse10" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
    <div className="accordion-body">
      Yes, you can cancel or pause your subscription at any time from your account settings.
    </div>
  </div>
</div>






        </div>  
        </div>

      <div className="tab-pane fade slider-12" id="studio" role="tabpanel">
         Tab2
       </div>

        <div className="tab-pane fade" id="studio1" role="tabpanel">
          <p>Tab3</p>
        </div>
      </div>
    </div>
  </div>


<Footer />

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </>
      );
    }

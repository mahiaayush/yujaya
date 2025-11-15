import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";

import Header from './others/Header';
import Footer from './others/Footer';
import { getFaqContent } from '../store/action/FaqAction';

// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
    const {
      page,
      tabs
    } = faqContent ||{};
    console.log("faqContent", faqContent);
      return (
        <> 
<Header />
  <section className="hero-section" style={{
        backgroundImage: `url(${page?.banner_img}) center/cover no-repeat;`,
        padding: '100px 0',
        backgroundPosition: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
  <div className="content banner">
    <h1>{page?.title}</h1>
    <p><a className="head-content" href="/">Home </a>&gt;FAQ’s</p>
  </div>
</section>
    <div className="container mt-5 soft-78 ak870">
    <div className="mx-auto">
      <h2 className="mt-3 yas-67">{page?.description?.split(',')[0]}, <span className="yoga-09">{page?.description?.split(',')[1]}</span></h2>
      <ul className="nav nav-tabs justify-content-center mb-3 faq-6780" id="myTab" role="tablist">
        {(tabs?.length > 0) && tabs.map((tab, index) => (
        <li className="nav-item" role="presentation">
          <button className={`nav-link ${index===0 ? 'active':''}`} id={`individual${tab?.tab_name?.split(' ')[0]}-tab`} data-bs-toggle="tab" data-bs-target={`#${tab?.tab_name?.split(' ')[0]}`} type="button" role="tab">{tab.tab_name}</button>
        </li>
        ))}
      </ul>

      <div className="tab-content tab-450">
      {(tabs?.length > 0) && tabs.map((tab, outerIndex) => (
      <div className={`tab-pane fade ${outerIndex===0 ? 'show active ':''}`} id={`${tab?.tab_name?.split(' ')[0]}`} role="tabpanel" key={outerIndex}>
          <div className="accordion mt-4" id="faqAccordion">
          {(tab?.faqs?.length > 0) && tab?.faqs?.map((faq, innerIndex) => (
          <div className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
            <h2 className="accordion-header" id="faq2">
              <button className={`accordion-button ${innerIndex != 0 ? 'collapsed': ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${innerIndex}`}>
                {faq?.question}
              </button>
            </h2>
            <div id={`collapse${innerIndex}`} className={`accordion-collapse collapse ${innerIndex===0 ? 'show ':''}`} data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                {faq?.answer}
              </div>
            </div>
          </div>
          ))}
          {/* <div className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
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
          </div> */}



          {/* <div className="accordion-item border-0 rounded-3 shadow-sm">
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
    </div> */}






  </div>  
      
      </div>
))}
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
        </>
      );
    }

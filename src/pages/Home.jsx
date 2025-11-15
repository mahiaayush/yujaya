
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "../store";
import Header from "./others/Header";
import Footer from "./others/Footer";
import { getHomeContent } from "../store/action/HomeAction";
import "../style/index.css";

// -----------------------------------------------------------------
// FALLBACK DATA
// -----------------------------------------------------------------
const fallbackCounters = [
  { value: 500, label: "Happy Studios" },
  { value: 200000, label: "Booking Processed", isRupee: true },
  { value: 600000, label: "Active Yogis" },
  { value: 15, label: "Countries" },
];

const fallbackFeatures = [
  { icon: "image/smart-fitness.png", title: "Smart Fitness Class Scheduling", description: "Easily automate your class schedules with customizable time slots. Keep your clients updated." },
  { icon: "image/two.png", title: "Full Membership Control", description: "Track memberships, renewals, and payments in one place. Reduce admin work." },
  { icon: "image/three.png", title: "Instant Class Reservations", description: "Allow members to book classes in real time from any device." },
  { icon: "image/four.png", title: "Effortless Class Pass Integration", description: "Sync classes automatically so your schedule is always up to date." },
  { icon: "image/five.png", title: "Custom Calendar-Based Bookings", description: "Flexible calendar view for booking, cancellations, and reschedules." },
  { icon: "image/six.png", title: "Advanced Payroll & Reporting Tools", description: "Automated tracking and reports for smarter decisions." },
];

const fallbackPricing = [
  { title: "Trial Period of<br><strong>15 Days</strong>", price: "Free Trial", subtext: "Limited access to core features", cta: "Start Free Trial" },
  { title: "Great Value<br><strong>For Professional</strong>", price: "INR 1000", subtext: "₹12,999 when billed monthly", cta: "Start Free Trial" },
  { title: "Great Value<br><strong>For Enterprise</strong>", price: "INR 1500", subtext: "₹17,999 when billed monthly", cta: "Start Free Trial" },
];

const fallbackTestimonials = [
  { name: "RAJAN SINGH", text: "YUJAYA's training transformed my practice and mindset. Incredible teachers who truly live what they teach.", avatar: "image/Ellipse-62.png", rating: 5 },
  { name: "SRISHTI AGGARWAL", text: "YUJAYA's training transformed my practice and mindset. Incredible teachers who truly live what they teach.", avatar: "image/Ellipse-62.png", rating: 5 },
  { name: "ANSH SAXENA", text: "YUJAYA's training transformed my practice and mindset. Incredible teachers who truly live what they teach.", avatar: "image/Ellipse-62.png", rating: 5 },
  { name: "RIYA MEHRA", text: "Fantastic experience! Their platform simplified everything for my yoga studio.", avatar: "image/Ellipse-62.png", rating: 5 },
  { name: "VARUN KAPOOR", text: "Easy to use, powerful features, and outstanding support team!", avatar: "image/Ellipse-62.png", rating: 5 },
  { name: "KAVITA SHARMA", text: "Helped us increase membership sign-ups and manage schedules better.", avatar: "image/Ellipse-62.png", rating: 5 },
];

const fallbackFaqs = [
  { question: "What should I bring to class?", answer: "A yoga mat, comfortable clothing, and a water bottle. Some studios provide mats, but it’s best to bring your own." },
  { question: "How long are the classes?", answer: "Most of our yoga classes are 60 minutes long." },
  { question: "Do you offer online yoga classes?", answer: "Yes, we offer live and recorded online yoga sessions so you can practice from anywhere." },
];

const fallbackArticles = [
  { image: "image/blog1.png", title: "The Science Behind Yoga: What Research Says", date: "May 5, 2025" },
  { image: "image/blog2.png", title: "The Science Behind Yoga: What Research Says", date: "May 5, 2025" },
  { image: "image/blog3.png", title: " and Research Says", date: "May 5, 2025" },
];

// -----------------------------------------------------------------
export default function Home() {

  const dispatch = useDispatch();
const [isLoading, setIsLoading] = useState(true);
const [showVideo, setShowVideo] = useState(false);
const counterRefs = useRef([]);

// -----------------------------------------------------------------
// 2. Fetch Data
// -----------------------------------------------------------------
useEffect(() => {
  setIsLoading(true);
  dispatch(getHomeContent()).finally(() => setIsLoading(false));
}, [dispatch]);

// -----------------------------------------------------------------
// 3. Counter Animation
// -----------------------------------------------------------------
useEffect(() => {
  if (counterRefs.current.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = Number(el.dataset.target);
          const isRupee = el.textContent.includes("₹");
          let count = 0;
          const increment = target / 100;

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              el.textContent = (isRupee ? "₹" : "") + formatNumber(target) + "+";
              clearInterval(timer);
            } else {
              el.textContent = (isRupee ? "₹" : "") + formatNumber(Math.ceil(count)) + "+";
            }
          }, 20);

          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterRefs.current.forEach((ref) => ref && observer.observe(ref));
  return () => observer.disconnect();
}, []);


// -----------------------------------------------------------------
// 5. Helpers
// -----------------------------------------------------------------
const formatNumber = (n) => new Intl.NumberFormat("en-IN").format(n);

// -----------------------------------------------------------------
// 6. Select Data
// -----------------------------------------------------------------
const rawData = useSelector(
  (state) => state?.getHomeContent?.HomeResponse?.data?.[0]
);


// -----------------------------------------------------------------
// 8. Safe Destructuring (guaranteed rawData exists here)
// -----------------------------------------------------------------
const {
  slidersection: sliderRaw = {},
  countersection: counterRaw = {},
  aboutsection: aboutRaw = {},
  whychooseussection: whyRaw = {},
  packagesection: pkgRaw = {},
  customerreviewsection: reviewRaw = {},
  faqsection: faqRaw = {},
  articalsection: articleRaw = {},
} = rawData;

// -----------------------------------------------------------------
// 9. Data Normalization
// -----------------------------------------------------------------
const slidersection =
  sliderRaw.img?.map((i) => ({ image: i.url })) || [];

const countersection = [
  {
    value: parseInt((counterRaw.counter_1 || "0").replace(/,/g, ""), 10),
    label: counterRaw.counter_text_1,
  },
  {
    value: parseInt((counterRaw.counter_2 || "0").replace(/,/g, ""), 10),
    label: counterRaw.counter_text_2,
    isRupee: true,
  },
  {
    value: parseInt((counterRaw.counter_3 || "0").replace(/,/g, ""), 10),
    label: counterRaw.counter_text_3,
  },
  {
    value: parseInt((counterRaw.counter_4 || "0").replace(/,/g, ""), 10),
    label: counterRaw.counter_text_4,
  },
].filter((c) => c.value > 0);

const aboutsection = {
  heading: aboutRaw.heading || "We Believe Yoga is\r\nMore Than a Practice",
  description: aboutRaw.about_description,
  points: [aboutRaw.about_text_1, aboutRaw.about_text_2].filter(Boolean),
  image: aboutRaw.about_image_url || "image/about-09.png",
};

const whychooseussection =
  whyRaw.softwarefeature?.map((f) => ({
    icon: f.image_url,
    title: f.title,
    description: f.designation,
  })) || [];

const packagesection =
  pkgRaw.packages?.map((p) => ({
    title: p.title,
    price: p.heading.includes("INR")
      ? p.heading.split(" ")[0]
      : p.heading,
    subtext: p.subtext,
    cta: p.button_text,
  })) || [];

const customerreviewsection =
  reviewRaw.itm?.map((r) => ({
    name: r.name || "Anonymous",
    text: r.designation,
    avatar: r.image_url || "image/Ellipse-62.png",
    rating: r.rating || 5,
  })) || [];

const faqsection =
  faqRaw.itm?.map((q) => ({
    question: q.question,
    answer: q.answer,
  })) || [];

const articalsection =
  articleRaw.itm?.map((a) => ({
    image: a.image_url,
    title: a.title,
    date: new Date(a.created_at).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  })) || [];


// -----------------------------------------------------------------
// 4. Video Modal
// -----------------------------------------------------------------

const youtubeLink = whyRaw.youtube_link || "https://www.youtube.com/watch?v=BqI0Q7e4kbk";
const youtubeId = youtubeLink.includes("v=")  ? youtubeLink.split("v=")[1].split("&")[0]  : "BqI0Q7e4kbk";
useEffect(() => {
  const modalElement = document.getElementById("videoModal");
  if (!modalElement) return;

  const modal = new window.bootstrap.Modal(modalElement, {
    backdrop: "static",
    keyboard: false,
  });

  if (showVideo) {
    modal.show();
  } else {
    modal.hide();
    // Optional: Reset iframe to stop video completely
    const iframe = modalElement.querySelector("iframe");
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${youtubeId}`; // Remove autoplay
    }
  }

  return () => {
    modal.hide();
  };
}, [showVideo, youtubeId]);


// -----------------------------------------------------------------
// 7. Conditional Returns (AFTER hooks, BEFORE destructuring)
// -----------------------------------------------------------------
if (isLoading) return <div className="text-center py-5">Loading...</div>;
if (!rawData) return <div className="text-center py-5">No content found.</div>;

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="banner1">
        <div className="banner container">
          <div className="row w-100 align-items-center">
            <div className="col-md-7 banner-text">
              <h1>{sliderRaw.heading?.split("\r\n")[0] || "Made for Yoga Studios"}</h1>
              <p className="fs-4 text-muted">{sliderRaw.heading?.split("\r\n")[1] || "Smart, Simple Class Scheduling"}</p>
              <p dangerouslySetInnerHTML={{ __html: (sliderRaw.discription?.replace(/\r\n/g, "<br>") || "Book and manage yoga classes effortlessly.<br>Perfect for studios and gyms.") }}></p>
              <a href="book-demo.html" className="btn btn-primary me-2">{sliderRaw.button_1 || "Book Demo"}</a>
              <a href="./contact-us.html" className="btn btn-outline-primary">{sliderRaw.button_2 || "Contact Us"}</a>
            </div>
            <div className="col-md-5">
              <div id="yogaCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {(slidersection.length > 0 ? slidersection : [{ image: "image/slide1.png" }, { image: "image/slide1.png" }, { image: "image/slide1.png" }]).map((s, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                      <img src={s.image} className="d-block w-100" alt={`Slide ${i + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
                <div className="carousel-indicators custom-indicators">
                  {Array.from({ length: slidersection.length > 0 ? slidersection.length : 3 }).map((_, i) => (
                    <button key={i} type="button" data-bs-target="#yogaCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats1">
        <div className="container">
          <div className="row stats justify-content-center text-center">
            {(countersection.length > 0 ? countersection : fallbackCounters).map((c, idx) => (
              <div key={idx} className="col-6 col-md-3 stat-box">
                <div className="counter-098">
                  <h4
                    ref={(el) => (counterRefs.current[idx] = el)}
                    className="counter"
                    data-target={c.value}
                  >
                    {c.isRupee ? "₹0+" : "0+"}
                  </h4>
                  <p>{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <span className="badge text-bg-light text-purple px-3 py-2">About</span>
              <span className="ms-2"> Us </span>
              <h2 className="about-heading">{aboutsection.heading.split("\r\n")[0]}</h2>
              <div className="about-subheading">{aboutsection.heading.split("\r\n")[1]}</div>
              <p className="text-muted">{aboutsection.description}</p>
              <ul className="check-list">
                {aboutsection.points.map((p, i) => (
                  <li key={i}><i className="fa fa-check-circle" aria-hidden="true"></i> {p}</li>
                ))}
              </ul>
              <a href="./about-us.html" className="btn btn-about mt-3">About Us</a>
            </div>
            <div className="col-md-6">
              <div className="image-wrapper">
                <div className="image-decoration"></div>
                <img src={aboutsection.image} alt="Yoga Class" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="whychose">
        <div className="container py-5">
          <div className="section-title">
            <span className="badge text-bg-light text-purple px-3 py-2">Why</span>
            <span className="ms-2">Choose Us </span>
            <h2 className="mt-3">The Ultimate <span className="yoga-09">{whyRaw.why_choose_us || "Yoga Experience"}</span></h2>
          </div>
          <div className="row g-4">
            {(whychooseussection.length > 0 ? whychooseussection : fallbackFeatures).map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="feature-card">
                  <div className="feature-icon">
                    <img src={item.icon} alt={item.title} loading="lazy" />
                  </div>
                  <div className="feature-content">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center mt-5">
              <a href="./software-features.html" className="btn btn-purple12 px-4 py-2">View More Features</a>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
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
            <button
              onClick={() => setShowVideo(true)}
              className="video video-popup"
              aria-label="Play video"
            >
              <i className="fa fa-play"></i>
            </button>
          </div>
        </div>
      </section>

      {/* BOOTSTRAP VIDEO MODAL */}
      <div className="modal fade" id="videoModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content bg-transparent border-0">
            <div className="ratio ratio-16x9">
              <iframe
                src={
                  showVideo
                    ? `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0`
                    : `https://www.youtube.com/embed/${youtubeId}` // No autoplay when closed
                }
                title="YUJAYA Promo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
              onClick={() => setShowVideo(false)}
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>

      {/* PRICING */}
      <section className="price-table" id="price">
        <div className="container">
          <h2 className="section-title">{pkgRaw.package_heading?.replace(/\r\n/g, " ") || "Flexible Pricing for Every Professionals, Studio & Academy"}</h2>
          <div className="row g-4">
            {(packagesection.length > 0 ? packagesection : fallbackPricing).map((pkg, i) => (
              <div key={i} className="col-md-4">
                <div className="pricing-card h-100">
                  <p dangerouslySetInnerHTML={{ __html: pkg.title }}></p>
                  <div className="price">{pkg.price}<span style={{ fontSize: "1rem" }}>/month</span></div>
                  <p className="subtext">{pkg.subtext}</p>
                  <ul className="features list-unstyled mt-3">
                    {["Class Scheduling", "Sell Memberships", "Credit Card Payment", "Phone Payment Terminal", "Member Dashboard", "Studio Dashboard", "Email & App Notifications", "Reports & Dashboards"].map((f, fi) => (
                      <li key={fi}>• {f}</li>
                    ))}
                  </ul>
                  <button className="btn btn-purple">{pkg.cta}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testnmoinal-table">
        <div className="container">
          <div className="section-title">
            <span className="badge text-bg-light text-purple px-3 py-2">Customer</span>
            <span className="ms-2"> Reviews </span>
            <h2>{reviewRaw.heading?.split("\r\n")[0] || "Why Studios & Trainers Love Our"}</h2>
            <h5>{reviewRaw.heading?.split("\r\n")[1] || "Booking Software"}</h5>
          </div>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
            <div className="carousel-inner">
              {chunkArray(customerreviewsection.length > 0 ? customerreviewsection : fallbackTestimonials, 3).map((group, slideIdx) => (
                <div key={slideIdx} className={`carousel-item ${slideIdx === 0 ? "active" : ""}`}>
                  <div className="row justify-content-center g-4">
                    {group.map((rev, i) => (
                      <div key={i} className={`col-md-4 ${i === 0 ? "col-12" : "d-none d-md-block"}`}>
                        <div className={`testimonial-card ${slideIdx === 0 && i === 1 ? "active-card" : ""}`}>
                          <img src={rev.avatar} className="user-img" alt={rev.name} loading="lazy" />
                          <div className="stars">{"★".repeat(rev.rating)}</div>
                          <div className="testimonial-name">{rev.name}</div>
                          <div className="testimonial-text">{rev.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-indicators mt-4">
              {chunkArray(customerreviewsection.length > 0 ? customerreviewsection : fallbackTestimonials, 3).map((_, i) => (
                <button key={i} type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section container">
        <div className="row align-items-center g-5">
          <div className="col-md-5 faq-image text-center">
            <img src={faqRaw.img || "image/Rectangle42.png"} alt="Yoga pose" loading="lazy" />
          </div>
          <div className="col-md-7">
            <span className="badge-faq">FAQs</span>
            <h2 className="mt-3"><span className="text-purple-23">Your Questions,</span> <em className="yoga-09">Our<br /> Expert Answers</em></h2>
            <div className="accordion mt-4" id="faqAccordion">
              {(faqsection.length > 0 ? faqsection : fallbackFaqs).map((q, i) => (
                <div key={i} className="accordion-item mb-2 border-0 rounded-3 shadow-sm">
                  <h2 className="accordion-header" id={`faq${i + 2}`}>
                    <button className={`accordion-button ${i === 0 ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i + 2}`}>
                      {q.question}
                    </button>
                  </h2>
                  <div id={`collapse${i + 2}`} className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`} data-bs-parent="#faqAccordion">
                    <div className="accordion-body">{q.answer}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-end">
              <a href="./faq.html" className="text-decoration-none text-purple">View More</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="blog-section">
        <div className="container mb-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-start">
              <h2><span className="text-primary fw-bold">Latest insights, trends,<br />and</span> <span className="fst-italic text-secondary">expert tips</span></h2>
            </div>
            <div className="col-md-6 text-md-end text-start mt-3 mt-md-0">
              <a href="./artical.html" className="btn btn-about mt-3">View All Articles</a>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {(articalsection.length > 0 ? articalsection : fallbackArticles).map((art, i) => (
              <div key={i} className="col-md-4">
                <div className="releted-artical-inner">
                  <div className="releted-artical-inner-img">
                    <img src={art.image} alt={art.title} loading="lazy" />
                    <p>{art.title}</p>
                  </div>
                  <div className="releted-artical-inner-content">
                    <p>📅 {art.date}</p>
                    <p>Read More <i className="bi bi-arrow-up-right"></i></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// -----------------------------------------------------------------
// Helper
// -----------------------------------------------------------------
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
  return result;
}
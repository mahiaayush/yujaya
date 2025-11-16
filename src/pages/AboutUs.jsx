import React, { useState, useEffect } from 'react';
import Header from './others/Header';
import Footer from './others/Footer';
import { getAboutUsContent } from '../store/action/AboutUs';
import { useDispatch, useSelector } from "../store";
// import '../style/index.css';

export default function AboutUs() {


  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    dispatch(
      getAboutUsContent()
    ).finally(() => setIsLoading(false));
  }, [dispatch]);



  const aboutUsContent = useSelector(
    (state) => state?.getAboutUsContent?.AboutUsResponse?.data?.[0]
  );

  if (isLoading) return <div>Loading...</div>;
  if (!aboutUsContent) return <div>No content found.</div>;


  const {
    pageDataseo,
    aboutsection,
    whatdrivesussection,
    joinmovementsection,
    todiscoversection
  } = aboutUsContent || {};

  const { heading, tagsection = [], images = [] } = aboutsection;



  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="content banner">
          <h1>About</h1>
          <p><a className="head-content" href="index.html">Home &gt;</a>About </p>
        </div>
      </section>

      <section className="about-section abt0-09">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="about-section-left">
                <div className="image-grid">

                  {aboutsection?.images?.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt={`about-img-${index + 1}`}
                      className={`img-${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">

              <div className="about-section-right">
                <h5><span> About </span>Us</h5>
                <h2>
                  <strong>{aboutsection.heading.split("\r\n")[0]}</strong> <br />
                  {aboutsection.heading.split("\r\n")[1]}
                </h2>

                {/* Tab buttons */}
                <ul className="nav nav-tabs mt-3" id="yogaTab" role="tablist">
                  {aboutsection.tagsection.map((tag, idx) => (
                    <li key={idx} className="nav-item">
                      <button
                        className={`nav-link ${idx === 0 ? "active" : ""}`}
                        id={`tab-${idx}`}
                        data-bs-toggle="tab"
                        data-bs-target={`#tabpane-${idx}`}
                        type="button"
                      >
                        {tag.tag_name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Tab content */}
                <div className="tab-content mt-3">
                  {aboutsection.tagsection.map((tag, idx) => (
                    <div
                      key={idx}
                      className={`tab-pane fade ${idx === 0 ? "show active" : ""}`}
                      id={`tabpane-${idx}`}
                    >
                      {/* Render description HTML */}
                      <div dangerouslySetInnerHTML={{ __html: tag.description }} />

                      {/* Render headings as check-list items */}
                      <ul className="check-list mt-3">
                        {tag.headings?.map((headingItem, hIdx) => (
                          <li key={hIdx} className="pt-3">
                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                            {headingItem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="What-drive-about-main">
        <div className="container py-5">
          <div className="What-drive-about-inner">
            <h5><span>What</span> Drives Us</h5>

          </div>
          <div className="row g-4 text-center position-relative">
            {whatdrivesussection?.drive?.map((item, index) => (
              <div key={index} className="col-md-3">
                <div className="feature-box">
                  <div className="feature-number">{index + 1}</div>
                  <h5>
                    {item.title.split("&").map((line, i) => (
                      <React.Fragment key={i}>
                        {line.trim()}
                        {i < item.title.split("&").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="about-section movement-section-about">

        <div className="container">
          <h5> <span>Join</span> Movement</h5>
          <div className="row">

            <div className="col-lg-6 ">
              <div className="movement-section-about-left">
                <img src={joinmovementsection?.img} className="" alt="Yoga Movement" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="movement-section-about-right">
                <p className="pt-4">{joinmovementsection?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ttt-012">
        <div className="redy-to-discover-main">
          <div className="container position-relative">
            <div className="redy-to-discover-inner">
              <h5><span>Ready</span> To Discover YUJAYA</h5>
              {todiscoversection?.map((item, index) => {
                const parts = item.heading.split("practice");
                return (
                  <h2 key={index}>
                    {parts[0]}<br />
                    practice{parts[1]}
                  </h2>
                );
              })}
            </div>

            <div className="ready-to-discover-bottom-section">
              <div className="arrow arrow-top">
                <img className="bounce2" src="../../public/yujaya/image/arrowtwo.png" alt="top arrow" />
              </div>

              <div className="arrow arrow-bottom">
                <img className="bounce2" src="../../public/yujaya/image/arrowone.png" alt="bottom arrow" />
              </div>

              <div className="row g-4 position-relative z-1">
                {todiscoversection?.[0]?.discovercomons?.map((step, idx) => (
                  <div className="col-md-4" key={idx}>
                    <div className="step-box">
                      <div className="step-number">0{idx + 1}</div>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

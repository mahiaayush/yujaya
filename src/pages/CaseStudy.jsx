import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";
import Header from './others/Header';
import Footer from './others/Footer';
import { getCaseStudyContent } from '../store/action/Action';

export default function CaseStudy() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getCaseStudyContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const caseStudyContent = useSelector(
    (state) => state?.getCaseStudyContent?.CaseStudyResponse?.data
  )
  console.log("caseStudyContent", caseStudyContent);
  const {
    data,
    page_info,
    pagination
  } = caseStudyContent ||{};
  console.log("data", page_info);
      return (
        <>  
          <Header />
            <section className="hero-section" style={{
               backgroundImage: `url(${page_info?.banner_img}) center/cover no-repeat;`,
               padding: '100px 0',
               backgroundPosition: 'center',
               textAlign: 'center',
               position: 'relative',
               }}>
              <div className="content banner">
                <h1>{page_info?.title} </h1>
                <p><a className="head-content" href="/">Home &gt;</a>{page_info?.title} </p>
              </div>
            </section>
            
            <div className="casestudy-main-class">
              <div className="container">
                <div className="row">
                {(data?.length > 0) && data.map((caseStudy, index) => (
                  <div className="col-md-4" key={index} >
                    <div className="case-study-cardsection">
                      <img className="img-fluid" src={caseStudy.image_url} alt={caseStudy.meta_title}/>
                      <p>{caseStudy.title}</p>
                      <div className="case-study-readmorebtn">
                        <a href={`/case-study/${caseStudy?.slug}`}>Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>
                  </div>
                  ))}
                  {/* <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div>
                  <div className="col-md-4">
                    <div className="case-study-cardsection">
                      <img src="./image/case-study-one.png" alt=""/>
                      <p>How Be One Yoga Studio Turned a Passion for Connection into a Thriving Studio</p>
                      <div className="case-study-readmorebtn">
                <a href="#">Read more <i className="bi bi-arrow-down-short"></i></a>
                      </div>

                    </div>

                  </div> */}

                </div>
              </div>
            </div>

            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center custom-pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">←</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item active"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">...</a></li>
                <li className="page-item"><a className="page-link" href="#">9</a></li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">→</a>
                </li>
              </ul>
            </nav>
          <Footer />
        </>
      );
    }

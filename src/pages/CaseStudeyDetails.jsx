
import moment from 'moment';
import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "../store";
import Header from './others/Header';
import Footer from './others/Footer';
import { getCaseStudyDetailContent } from '../store/action/CaseStudyAction';

export default function CaseStudeyDetails() {
  const dispatch = useDispatch();
  const { slug } = useParams();          // <-- grabs the value from the URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getCaseStudyDetailContent(slug)
    ).then(() => setIsLoading(false));
  }, [slug]);
  
  const caseStudyDetailContent = useSelector(
    (state) => state?.getCaseStudyDetailContent?.CaseStudyDetailResponse?.data
  )
  console.log("caseStudyDetailContent", caseStudyDetailContent);
  const {
    case_study,
    related
  } = caseStudyDetailContent ||{};
      return (
      <>
      <Header />
        <section className="hero-section">
          <div className="content banner">
            <h1>Articles</h1>
            <p><a className="head-content" href="index.html">Home &gt;</a>Articles Details </p>
          </div>
        </section>

        <div className="articles-pagemain-class">
          <div className="container">
            <div className="articles-inner-containt">
              <div className="row">
                <div className="col-md-6">
                  <div className="artical-top-left">
                    <h2>{case_study?.title}</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="artical-top-right">
                    <img className="img-fluid" src={case_study?.image_url} alt={case_study?.title}/>
                    <p>Last Updated on {moment(case_study?.updatedAt).format('D MMMM, YYYY')}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>

        <div className="articles-pagepragraph">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: case_study?.content }} />
            </div>
        </div>

        <div className="releted-artical-head">
            <div className="container">
                <div className="row">
                    <div className="artical-card-head">
                      <h3>Related Case study</h3>
                      <div className="artical-card-head-btn">
                      <a href="/case-studey">View All Articles <i className="bi bi-arrow-up-right"></i></a>
                      </div>
                    </div>
                {related?.length > 0 && related.map((relatedArticle, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="releted-artical-inner">
                        <div className="releted-artical-inner-img">
                          <img className="img-fluid" src={relatedArticle?.image_url} alt={relatedArticle?.sort_content}/>
                          <p>{relatedArticle?.sort_content}</p>
                        </div>
                        <div className="releted-artical-inner-content">
                        <p>📅 {moment(case_study?.updatedAt).format('MMMM D, YYYY')}</p>
                        <p><a href={`/case-study/${relatedArticle?.slug}`}>Read More <i className="bi bi-arrow-up-right"></i></a></p>
                        </div>
                      </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    <Footer />
      </>
      );
    }

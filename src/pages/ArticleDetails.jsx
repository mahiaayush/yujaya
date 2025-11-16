
import moment from 'moment';
import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "../store";
import Header from './others/Header';
import Footer from './others/Footer';
import { getArticleDetailContent } from '../store/action/ArticleDetailsAction';

export default function ArticleDetails() {
  const dispatch = useDispatch();
  const { slug } = useParams();          // <-- grabs the value from the URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getArticleDetailContent(slug)
    ).then(() => setIsLoading(false));
  }, [slug]);
  
  const articleDetailsContent = useSelector(
    (state) => state?.getArticleDetailContent?.Response?.data
  )
  console.log("articleDetailsContent", articleDetailsContent);
  const {
    case_study,
    article,
    related_articles
  } = articleDetailsContent ||{};
      return (
      <>
      <Header />
        <section className="hero-section">
          <div className="content banner">
            <h1>Articles</h1>
            <p><a className="head-content" href="/">Home &gt;</a>Articles Details </p>
          </div>
        </section>

        <div className="articles-pagemain-class">
          <div className="container">
            <div className="articles-inner-containt">
              <div className="row">
                <div className="col-md-6">
                  <div className="artical-top-left">
                    <h2>{article?.title}</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="artical-top-right">
                    <img className="img-fluid" src={article?.image_url} alt={article?.title}/>
                    <p>Last Updated on {moment(article?.updatedAt).format('D MMMM, YYYY')}</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        </div>

        <div className="articles-pagepragraph">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: article?.content }} />
            </div>
        </div>

        <div className="releted-artical-head">
            <div className="container">
                <div className="row">
                    <div className="artical-card-head">
                      <h3>Related Article</h3>
                      <div className="artical-card-head-btn">
                      <a href="/article">View All Articles <i className="bi bi-arrow-up-right"></i></a>
                      </div>
                    </div>
                {related_articles?.length > 0 && related_articles.map((relatedArticle, index) => (
                    <div className="col-md-4" key={index}>
                      <div className="releted-artical-inner">
                        <div className="releted-artical-inner-img">
                          <img className="img-fluid" src={relatedArticle?.image_url} alt={relatedArticle?.sort_content}/>
                          <p>{relatedArticle?.sort_content}</p>
                        </div>
                        <div className="releted-artical-inner-content">
                        <p>📅 {moment(relatedArticle?.updatedAt).format('MMMM D, YYYY')}</p>
                        <p><a href={`/article/${relatedArticle?.slug}`}>Read More <i className="bi bi-arrow-up-right"></i></a></p>
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

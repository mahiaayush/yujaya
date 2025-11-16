import moment from 'moment';
import { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "../store";
import Header from './others/Header';
import Footer from './others/Footer';
import { getArticleContent } from '../store/action/Action';

export default function Article() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getArticleContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const articleContent = useSelector(
    (state) => state?.getArticleContent?.ArticleResponse?.data
  )
  console.log("articleContent", articleContent);
  const {
    archives,
    articles,
    categorieData,
    filters,
    page_info,
    resentpostData,
    pagination
  } = articleContent ||{};
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
          <h1>{page_info?.title}</h1>
        <p><a className="head-content" href="/">Home &gt;</a>{page_info?.title} </p>
        </div>
      </section>
      <section className="article-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                {(articles?.length > 0) && articles.map((article, index) => (
                <div className="col-md-6" key={index}>
                  <div className="card article-card">
                    <img src={article?.image} className="card-img-top" alt=""/>
                      <h5>{article.title}</h5>
                    <div className="article-body">
                      <p className="article-meta">📅 {moment(article?.updatedAt).format('MMMM D, YYYY')}</p>
                      <p><a href={`/article/${article?.slug}`}>Read More <i className="bi bi-arrow-up-right"></i></a></p>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="search-box mb-4 d-flex">
                  <input type="text" className="form-control" placeholder="Enter Keyword" />
                  <button className="btn"><i className="bi bi-search"></i></button>
                </div>
                <h5>Recent Posts</h5>
                <ul className="recent-post-list pt-3">
                <li>
                  <a href="#">How to Franchise Your Fitness Business: A Step-by-Step Guide</a>
                  <p className="post-date">August 25, 2025</p>
                </li>
                </ul>
                <ul>
                <li>
                  <a href="#">Top 10 Productivity Alternatives for Students</a>
                  <p className="post-date">July 18, 2025</p>
                </li>
                </ul>
                <ul>
                <li>
                  <a href="#">What Research Says About Meditation</a>
                  <p className="post-date">June 3, 2025</p>
                </li>
                </ul>
                <ul>
                <li>
                  <a href="#">Affordable Gym Management Software with Local Payment Integration in Asia: The Complete 2025 Guide</a>
                  <p className="post-date">June 3, 2025</p>
                </li>
                </ul>
                <ul>
                <li>
                  <a href="#">
              How Much Does It Cost to Start a CrossFit Gym in 2025?</a>
                  <p className="post-date">June 3, 2025</p>
                </li>
              </ul>

                <h5 className="mt-4">Archives</h5>
                <ul> 
                  {archives?.length > 0 && archives.map((archive, index) => (
                  <li className={ (index==0) ?`pt-3` :  ``}><a href="#">{archive?.archive_label}</a></li>
                  ))}
                </ul>

                <h5 className="mt-4">Categories</h5>
                <ul>
                  {categorieData?.length > 0 && categorieData.map((category, index) => (
                  <li className={ (index==0) ?`pt-3` :  ``}><a href="#">{category?.name}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Footer />
  </>
  );
}

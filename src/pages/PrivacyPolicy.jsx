import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";

import Header from './others/Header';
import Footer from './others/Footer';
import { getPrivacyContent } from '../store/action/PrivacyAction';

export default function PrivacyPolicy() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getPrivacyContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const privacyContent = useSelector(
    (state) => state?.getPrivacyContent?.PrivacyResponse?.data
  )
  console.log("privacyContent", privacyContent);
  const {
    banner_img,
    discription,
    seosection,
    title
  } = privacyContent[0] || {};
      return (
        <>
        <Header />
        <section className="hero-section"  style={{
        backgroundImage: `url(${banner_img}) center/cover no-repeat;`,
        padding: '100px 0',
        backgroundPosition: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
          <div className="content banner">
            <h1>{title}</h1>
            <p><a className="head-content" href="/">Home </a>&gt;{title}</p>
          </div>
        </section>
        <div className="privacy-policy-mainclass">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: discription }} />
            </div>
        </div>
      <Footer />
      </>
      );
    }
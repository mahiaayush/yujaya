import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";

import Header from './others/Header';
import Footer from './others/Footer';
import { getTermCondContent } from '../store/action/Action';

export default function TermCondition() {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getTermCondContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const termCondContent = useSelector(
    (state) => state?.getTermCondContent?.TermCondResponse?.data
  )
  console.log("termCondContent", termCondContent);
  //
  const {
    banner_img,
    title,
    discription,
    seosection
  } = termCondContent[0] ||{};
      return (
        <>
        <Header />
  <section className="hero-section" style={{
        backgroundImage: `url(${banner_img}) center/cover no-repeat;`,
        padding: '100px 0',
        backgroundPosition: 'center',
        textAlign: 'center',
        position: 'relative',
      }}>
  <div className="content banner">
    <h1>{title}</h1>
<p><a className="head-content" href="index.html">Home </a>&gt;{title}</p>
  </div>
</section>

  <div className="terms-conditions-mainsection">  
   <div className="container">
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: discription }} />
    </div>
  </div>
</div>
<Footer />
        </>
      );
    }

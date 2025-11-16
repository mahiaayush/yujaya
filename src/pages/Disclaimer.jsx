import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "../store";
import Header from './others/Header';
import Footer from './others/Footer';
import { getDisclaimerContent } from '../store/action/Action';

export default function Disclaimer() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
    setIsLoading(true);
    dispatch(
      getDisclaimerContent()
    ).then(() => setIsLoading(false));
  }, []);
  
  const disclaimerContent = useSelector(
    (state) => state?.getDisclaimerContent?.DisclaimerResponse?.data
  )
  console.log("disclaimerContent", disclaimerContent);
  const {
    banner_img,
    title,
    discription,
    seosection
  } = disclaimerContent[0] ||{};
  console.log("discription", discription);
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
            <h1><h1>{title}</h1></h1>
            <p><a className="head-content" href="/">Home &gt;</a>{title} </p>
         </div>
         </section>
         <div className="disclaimer-main-class">
            <div className="container">
               <div dangerouslySetInnerHTML={{ __html: discription || '' }} />
            </div>
         </div>
         <Footer />
        </>
      );
    }

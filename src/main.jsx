import React, { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const Artical = lazy(() => import('./pages/Artical.jsx'));
const BookDemo = lazy(() => import('./pages/BookDemo.jsx'));
const CaseStudeyDetails = lazy(() => import('./pages/CaseStudeyDetails.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));
const Disclaimer = lazy(() => import('./pages/Disclaimer.jsx'));
const Faq = lazy(() => import('./pages/Faq.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const IndividualTeachers = lazy(() => import('./pages/IndividualTeachers.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const SingUp = lazy(() => import('./pages/SingUp.jsx'));
const SoftwareFeatures = lazy(() => import('./pages/SoftwareFeatures.jsx'));
const StudioOrAcademy = lazy(() => import('./pages/StudioOrAcademy.jsx'));
const TermCondition = lazy(() => import('./pages/TermCondition.jsx'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading…</div>}>
        <Routes>
          {/* <Route path='._about-us' element={<AboutUs />} />
          <Route path='._artical' element={<Artical />} />
          <Route path='._book-demo' element={<BookDemo />} />
          <Route path='._case-studey-details' element={<CaseStudeyDetails />} />
          <Route path='._case-study' element={<CaseStudy />} />
          <Route path='._contact-us' element={<ContactUs />} />
          <Route path='._disclaimer' element={<Disclaimer />} />
          <Route path='._faq' element={<Faq />} />
          <Route index element={<Home />} />
          <Route path='._individual-teachers' element={<IndividualTeachers />} />
          <Route path='._login' element={<Login />} />
          <Route path='._pricing' element={<Pricing />} />
          <Route path='._privacy-policy' element={<PrivacyPolicy />} />
          <Route path='._sing-up' element={<SingUp />} />
          <Route path='._software-features' element={<SoftwareFeatures />} />
          <Route path='._studio-or-academy' element={<StudioOrAcademy />} />
          <Route path='._term-condition' element={<TermCondition />} /> */}
          <Route path='about-us' element={<AboutUs />} />
          <Route path='artical' element={<Artical />} />
          <Route path='book-demo' element={<BookDemo />} />
          <Route path='case-studey-details' element={<CaseStudeyDetails />} />
          <Route path='case-study' element={<CaseStudy />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='disclaimer' element={<Disclaimer />} />
          <Route path='faq' element={<Faq />} />
          <Route index element={<Home />} />
          <Route path='individual-teachers' element={<IndividualTeachers />} />
          <Route path='login' element={<Login />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='sing-up' element={<SingUp />} />
          <Route path='software-features' element={<SoftwareFeatures />} />
          <Route path='studio-or-academy' element={<StudioOrAcademy />} />
          <Route path='term-condition' element={<TermCondition />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(<App />);

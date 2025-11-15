# Reactized (Lazy + Suspense)

This folder was generated from your uploaded HTML. Each HTML file became a lazy‑loaded route.

## Run
```bash
npm i
npm run dev
```

## Notes
- Assets were copied into `/public`. Update paths if needed (e.g. `<img src='/images/foo.png' />`). 
- We kept the original markup inside each page via `dangerouslySetInnerHTML` to avoid JSX conversion issues. 
  - If you want "true JSX", replace the `dangerouslySetInnerHTML` with the real elements and fix attributes like `className`, `htmlFor`, etc.
- Routes:
- `/._about-us` → `src/pages/AboutUs.jsx` (title: ._About-Us)
- `/._artical` → `src/pages/Artical.jsx` (title: ._Artical)
- `/._book-demo` → `src/pages/BookDemo.jsx` (title: ._Book-Demo)
- `/._case-studey-details` → `src/pages/CaseStudeyDetails.jsx` (title: ._Case-Studey-Details)
- `/._case-study` → `src/pages/CaseStudy.jsx` (title: ._Case-Study)
- `/._contact-us` → `src/pages/ContactUs.jsx` (title: ._Contact-Us)
- `/._disclaimer` → `src/pages/Disclaimer.jsx` (title: ._Disclaimer)
- `/._faq` → `src/pages/Faq.jsx` (title: ._Faq)
- `/` → `src/pages/Home.jsx` (title: ._Index)
- `/._individual-teachers` → `src/pages/IndividualTeachers.jsx` (title: ._Individual-Teachers)
- `/._login` → `src/pages/Login.jsx` (title: ._Login)
- `/._pricing` → `src/pages/Pricing.jsx` (title: ._Pricing)
- `/._privacy-policy` → `src/pages/PrivacyPolicy.jsx` (title: ._Privacy-Policy)
- `/._sing-up` → `src/pages/SingUp.jsx` (title: ._Sing-Up)
- `/._software-features` → `src/pages/SoftwareFeatures.jsx` (title: ._Software-Features)
- `/._studio-or-academy` → `src/pages/StudioOrAcademy.jsx` (title: ._Studio-Or-Academy)
- `/._term-condition` → `src/pages/TermCondition.jsx` (title: ._Term-Condition)
- `/about-us` → `src/pages/AboutUs.jsx` (title: Yujaya)
- `/artical` → `src/pages/Artical.jsx` (title: Yujaya)
- `/book-demo` → `src/pages/BookDemo.jsx` (title: Yujaya)
- `/case-studey-details` → `src/pages/CaseStudeyDetails.jsx` (title: Yujaya)
- `/case-study` → `src/pages/CaseStudy.jsx` (title: Yujaya)
- `/contact-us` → `src/pages/ContactUs.jsx` (title: Yujaya)
- `/disclaimer` → `src/pages/Disclaimer.jsx` (title: Yujaya)
- `/faq` → `src/pages/Faq.jsx` (title: Yujaya)
- `/` → `src/pages/Home.jsx` (title: Yujaya)
- `/individual-teachers` → `src/pages/IndividualTeachers.jsx` (title: Yujaya)
- `/login` → `src/pages/Login.jsx` (title: Yujaya)
- `/pricing` → `src/pages/Pricing.jsx` (title: Yujaya)
- `/privacy-policy` → `src/pages/PrivacyPolicy.jsx` (title: Yujaya)
- `/sing-up` → `src/pages/SingUp.jsx` (title: Yujaya)
- `/software-features` → `src/pages/SoftwareFeatures.jsx` (title: Yujaya)
- `/studio-or-academy` → `src/pages/StudioOrAcademy.jsx` (title: Yujaya)
- `/term-condition` → `src/pages/TermCondition.jsx` (title: Yujaya)

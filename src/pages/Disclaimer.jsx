import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function Disclaimer() {
      return (
        <>
         <Header />

  <section className="hero-section">
  <div className="content banner">
    <h1>Disclaimer</h1>
    <p><a className="head-content" href="index.html">Home &gt;</a>Disclaimer </p>
  </div>
</section>


<div className="disclaimer-main-class">
    <div className="container">
        <div className="disclaimer-inner-class">
         <p><span>Last updated: July, 2025</span></p>
         <p><strong>The information provided on the YUJAYA website, platform, and related services (collectively, the “Services”) is for general informational and business purposes only. By using our Services, you agree to this Disclaimer along with our [Terms & Conditions] and [Privacy Policy].</strong></p>
         <h6>1. No Guarantees or Warranties</h6>
         <ul>
            <li>YUJAYA provides its Services “as is” and “as available.”</li>
            <li>While we strive for accuracy and reliability, we make no representations, warranties, or guarantees (express or implied) about:</li>
         </ul>
         <ul className="dislaimer-innerlist">
            <li>The accuracy, completeness, or reliability of any content on the platform</li>
            <li>Uninterrupted, timely, secure, or error-free operation of our Services</li>
            <li>Fitness of the Services for any particular purpose</li>
         </ul>
         <h6>2. Limitation of Liability</h6>
         <ul>
            <li>YUJAYA shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:</li>
         </ul>
         <ul className="dislaimer-innerlist ">
            <li>Use or inability to use the platform</li>
            <li>Errors, delays, or technical failures</li>
            <li>Loss of data, revenue, business opportunities, or profits</li>
         </ul>
         <ul>
            <li>Users are solely responsible for decisions made based on information provided through our Services.</li>
         </ul>
         <h6>3. Third-Party Services</h6>
         <ul>
            <li>YUJAYA may integrate with third-party services (such as ClassPass, Mailchimp, Brevo, Zoom, or payment providers).</li>
            <li>We do not control or endorse third-party content, tools, or services.</li>
            <li>Any issues, disputes, or losses related to third-party integrations are the responsibility of the respective providers.</li>
         </ul>
         <h6>4. Professional Disclaimer</h6>
         <ul>
            <li>YUJAYA is a management and booking software designed for yoga teachers, studios, and academies. </li>
            <li>We do not provide medical, health, or wellness advice. Any yoga practices, sessions, or recommendations offered by teachers/studios through our platform are solely their responsibility.</li>
            <li>Always consult a qualified healthcare provider before beginning any fitness or wellness program.</li>
         </ul>
         <h6>5. External Links</h6>
     <p>Our website may contain links to external websites. These are provided for convenience and informational purposes only. YUJAYA is not responsible for the content, accuracy, or availability of external sites.</p>
     <h6>6. Updates to Disclaimer</h6>
     <p>We may update this Disclaimer from time to time. Updates will be posted on this page with the revised “Last Updated” date. Continued use of YUJAYA after changes constitutes acceptance of the updated Disclaimer.</p>
     <h6>7. Contact Us</h6>
     <p>For any questions about this Disclaimer, please contact us:</p>
     <p> 📧 info@yujaya.com</p>
     <p> 📍123 Consectetur at ligula 10660</p>
        </div>

    </div>

</div>

<Footer />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </>
      );
    }

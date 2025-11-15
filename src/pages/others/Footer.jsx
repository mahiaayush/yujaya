export default function Footer() {
    return (
    <>
        <footer className="bg-dark text-white pt-5 pb-3">
        <div className="container">
            <div className="row gy-4">
            <div className="col-md-4">
                <a href="./index.html"><img src="image/footericon.jpg" alt="YUJAYA Logo" width="120" className="mb-3"/></a>
                <p>The calm way to manage <strong>Yoga,<br /> Therapy, and Ayurveda.</strong></p>

                <label htmlFor="subscribe" className="form-label small mb-1">Community Update</label>
                <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" id="subscribe" />
                <button className="btn btn-light" type="button">
                    <i className="bi bi-arrow-right"></i>
                </button>
                </div>

                <div className="d-flex gap-3">
                <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white fs-5"><i className="bi bi-linkedin"></i></a>
                <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-white fs-5"><i className="bi bi-youtube"></i></a>
                </div>
            </div>

            <div className="col-md-2">
                <h6>Explore</h6>
                <ul className="list-unstyled">
                <li><a href="/" className="text-white text-decoration-none">Home</a></li>
                <li><a href="/about-us" className="text-white text-decoration-none">About</a></li>
                <li><a href="/studio-or-academy" className="text-white text-decoration-none">Solutions</a></li>
                <li><a href="/pricing" className="text-white text-decoration-none">Pricing</a></li>
                <li><a href="/contact-us" className="text-white text-decoration-none">Contact</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h6>Navigation</h6>
                <ul className="list-unstyled">
                <li><a href="/term-condition" className="text-white text-decoration-none">T & C</a></li>
                <li><a href="/privacy-policy" className="text-white text-decoration-none">Privacy</a></li>
                <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
                <li><a href="/artical" className="text-white text-decoration-none">Articles</a></li>
                <li><a href="/disclaimer" className="text-white text-decoration-none">Disclaimer</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h6>Contact Us</h6>
                <ul className="list-unstyled small">
                <li><a href="#"><i className="bi bi-geo-alt-fill me-2"></i>123 Consectetur at ligula 10640</a></li>
                <li><a href="tel:+91)0123456789"><i className="bi bi-telephone-fill me-2"></i>(+91) 012 345 6789</a></li>
                <li><a href="mailto:info@yujaya.com"><i className="bi bi-envelope-fill me-2"></i>info@yujaya.com</a></li>
                </ul>
            </div>
            </div>

            <div className="footer-bottom-line"></div>

            <div className="footer-line">
            Copyright © 2025, YUJAYA | All Rights Reserved
            </div>
        </div>
        </footer>
    </>
    );
}
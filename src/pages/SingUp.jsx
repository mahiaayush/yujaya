import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function SingUp() {
      return (
        <>
        <Header />

        <div className="container mt-5">
    <div className="mx-auto singup09" style="max-width: 400px;">
      <h4 className="text-center">Sign Up for a 15–day Free Trial</h4>
      <p className="text-center text-muted">No credit card required.</p>

      <ul className="nav nav-tabs justify-content-center mb-3 yas-09" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="individual-tab" data-bs-toggle="tab" data-bs-target="#individual" type="button" role="tab">Individual</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio" type="button" role="tab">Studio/Academy</button>
        </li>
      </ul>

      <div className="tab-content">
        <div className="tab-pane fade show active" id="individual" role="tabpanel">
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
               <div className="col">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>



            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your email address" required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="mb-3">
              <select className="form-select" required>
                <option value="" disabled selected hidden>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

            </div>
            <div className="mb-3 d-flex">
              <select className="form-select me-2" style="max-width: 100px;">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
              </select>
              <input type="tel" className="form-control" placeholder="Mobile Number" required />
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" required />
              <label className="form-check-label">
                By continuing you agree to Yujya's <a href="./term-condition.html">Terms of Service</a> and <a href="./privacy-policy.html">Privacy Policy</a>
              </label>
            </div>
            <div className="forget564">
            <button type="submit" className="btn btn-primary w-100">Create My Account</button>
            <p className="text-center mt-3">Already have an account? <a href="./login.html">Login</a></p>
          </div>
          </form>
        </div>

        <div className="tab-pane fade" id="studio" role="tabpanel">
          <form>
           <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First Name" required />
              </div>
               <div className="col">
                <input type="text" className="form-control" placeholder="Last Name" required />
              </div>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email Address" required />
            </div>
            <div className="mb-3">
              <div className="mb-3">
              <input type="text" className="form-control" placeholder="Studio/Academy Name *" required/>
            </div>    
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="mb-3 d-flex">
              <select className="form-select me-2" style="max-width: 100px;">
                <option value="+1">+1</option>
                <option value="+91">+91</option>
              </select>
              <input type="tel" className="form-control" placeholder="Mobile Number" required />
            </div>
            <div className="forget564">
            <button type="submit" className="btn btn-primary w-100">Create My Account</button>
            <p className="text-center mt-3">Already have an account? <a href="./login.html">Login</a></p>
          </div>

          </form>
        </div>
      </div>
    </div>
  </div>

<Footer />

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </>
      );
    }

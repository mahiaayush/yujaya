import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';

export default function Login() {
      return (
        <>
        <Header />

<div className="container mt-5">
    <div className="mx-auto singup09" style="max-width: 400px;">
      <h4 className="text-center">Log In</h4>
      <p className="text-center text-muted">Don't have an account <a href="sing-up.html"> Sign Up</a></p>
<form>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email " required />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="forget564">
               <a href="#" className="forget-09 forgot-link" data-bs-toggle="modal" data-bs-target="#passwordResetModal">
      Forgot your password?
    </a>
           <button type="submit" className="btn btn-primary w-100">LOGIN</button>
         </div>
          </form>
        </div>
      </div>





  
  <div className="modal fade" id="passwordResetModal" tabIndex="-1" aria-labelledby="passwordResetLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">

        <div className="modal-header border-0">
          <h5 className="modal-title" id="passwordResetLabel">Password Reset</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div className="modal-body">
          <p className="text-muted mb-4">
            Provide the email address associated with your account to recover your password.
          </p>

          <form>
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>

            <button type="submit" className="btn btn-primary w-100 kl-986">Reset Password</button>

            <div className="d-flex justify-content-between mt-3">
              <a href="./login.html" className="text-decoration-none">Login</a>
              <a href="./sing-up.html" className="text-decoration-none">Register</a>
            </div>

            <hr className="my-4" />

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

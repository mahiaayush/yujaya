import React from 'react';
import Header from './others/Header';
import Footer from './others/Footer';
export default function BookDemo() {
      return 
      (
      <>  
      <Header />

<div className="container mt-5">
    <div className="step-header">
      <div className="step active" id="step1Header">
        <div className="step-number">1</div>
        <p>Choose Date & Time</p>
      </div>
      <div className="mx-4"></div>
      <div className="step" id="step2Header">
        <div className="step-number">2</div>
        <p>Your Information</p>
      </div>
    </div>

    <div id="step1" className="card p-4">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="calendar-wrapper">
            <div id="calendar"></div>
          </div>
        </div>

        <div className="col-md-6">
          <h6>Meeting duration</h6>
          <input type="text" className="form-control mb-3" value="30 Mins" readonly />

          <h6>What time works best?</h6>
          <select className="form-select mb-3">
            <option>UTC+05:30 (New Delhi, Mumbai, Calcutta)</option>
          </select>

          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-outline-secondary m-1 time-btn">6:30 AM</button>
            <button className="btn btn-outline-secondary m-1 time-btn">7:00 AM</button>
            <button className="btn btn-outline-secondary m-1 time-btn">7:30 AM</button>
            <button className="btn btn-outline-secondary m-1 time-btn">8:00 AM</button>
            <button className="btn btn-outline-secondary m-1 time-btn">8:30 AM</button>
          </div>

          <div className="mt-4 text-end">
            <button className="btn btn-purple btn-p0987" onclick="nextStep()">Next</button>
          </div>
        </div>
      </div>
    </div>

    <div id="step2" className="card p-4" style="display: none">
       <h4 >
          Your information
        </h4>
  <p >
    Saturday, August 30, 2025 7:00 AM 
    <a href="#">Edit</a>
  </p>
      <ul className="nav nav-tabs mb-3 yas-010" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="individual-tab" data-bs-toggle="tab" data-bs-target="#individual" type="button" role="tab">Individual</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="studio-tab" data-bs-toggle="tab" data-bs-target="#studio" type="button" role="tab">Studio/Academy</button>
        </li>
      </ul>

      <div className="tab-content book-demo">
        <div className="tab-pane fade show active" id="individual" role="tabpanel">
      <form>
  <div className="row mb-3">
    <div className="col">
      <label className="form-label">First Name</label>
      <input type="text" className="form-control" required />
    </div>
    <div className="col">
      <label className="form-label">Last Name</label>
      <input type="text" className="form-control" required />
    </div>
  </div>

  <div className="mb-3">
    <label className="form-label">Your email address *</label>
    <input type="email" className="form-control" required />
  </div>

  <div className="mb-3">
    <label className="form-label">Mobile Number</label>
    <div className="d-flex">
      <select className="form-select me-2" style="max-width: 100px;">
        <option value="+1">+1</option>
        <option value="+91">+91</option>
      </select>
      <input type="tel" className="form-control" required />
    </div>
  </div>
  <div className="mb-3">
  <label className="form-label">Is there anything we should know about before we speak?</label>
  <textarea className="form-control" rows="4" required></textarea>
</div>

</form>


      <div className="d-flex justify-content-end gap-3 mt-3">
        <button className="btn btn-outline-secondary px-4 py-2" onclick="prevStep()">Back</button>
        <button className="btn btn-purple px-4 py-2">Confirm</button>
      </div>
        </div>

        <div className="tab-pane fade" id="studio" role="tabpanel">
          <form>
            <div className="row mb-3">
              <div className="col">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" required /> 
              </div>
            </div>          

            <div className="mb-3">
              <label className="form-label">Your email address *</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Studio/Academy Name  *</label>
              <input type="text" className="form-control" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <div className="d-flex">
                <select className="form-select me-2" style="max-width: 100px;">
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                </select>
                <input type="tel" className="form-control" required />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Is there anything we should know about before we speak?</label>
              <textarea className="form-control" rows="4" required></textarea>
            </div>
            <div className="d-flex justify-content-end gap-3 mt-3">
              <button className="btn btn-outline-secondary px-4 py-2" onclick="prevStep()">Back</button>
              <button className="btn btn-purple px-4 py-2">Confirm</button>
            </div>
          </form>
      </div>
  </div>
</div>
</div>


<Footer />
      </>
      );

      /*
      <script>
    let selectedDate = null;
    let selectedTime = null;

    document.addEventListener("DOMContentLoaded", function () {
      const calendarEl = document.getElementById("calendar");

      const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        selectable: true,
        headerToolbar: { left: "prev,next", center: "title", right: "" },
        dateClick: function (info) {
          selectedDate = info.dateStr;
          // Remove old selection
          document.querySelectorAll(".fc-daygrid-day").forEach((el) => el.classList.remove("selected-date"));
          // Highlight selected day
          info.dayEl.classList.add("selected-date");
        },
      });

      calendar.render();

      // Time button selection
      document.querySelectorAll(".time-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          document.querySelectorAll(".time-btn").forEach((b) => b.classList.remove("active"));
          this.classList.add("active");
          selectedTime = this.innerText;
        });
      });
    });

    function nextStep() {
      if (!selectedDate) {
        alert("Please select a date first!");
        return;
      }
      document.getElementById("step1").style.display = "none";
      document.getElementById("step2").style.display = "block";
      document.getElementById("step1Header").classList.remove("active");
      document.getElementById("step2Header").classList.add("active");

      document.getElementById("selectedDateTime").innerText =
        "Selected: " + selectedDate + (selectedTime ? " at " + selectedTime : "");
    }

    function prevStep() {
      document.getElementById("step2").style.display = "none";
      document.getElementById("step1").style.display = "block";
      document.getElementById("step1Header").classList.add("active");
      document.getElementById("step2Header").classList.remove("active");
    }
  </script>*/
}

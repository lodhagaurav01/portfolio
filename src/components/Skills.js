import React from "react";

export default function Skills() {
  return (
    <>
      {/* <div class="accordion" id="accordionExample"> */}
      <div class="accordion-item border border-dark">
        <h2 class="accordion-header bg-dark" id="headingOne">
          <button
            class="accordion-button collapsed text-center w-50 rounded-pill bg-danger"
            type="button"
            data-bs-toggle="collapse"
            style={{ position: "relative", margin: "auto" }}
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <i>Skills</i>
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <div className="container">
              <div className="row ">
                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                    alt=""
                    height="140"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>Python</h6>
                </div>
                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-transparent-svg-vector-bie-supply-2.png"
                    alt=""
                    height="140"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>MySQL</h6>
                </div>
                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png"
                    alt=""
                    height="140"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>C++</h6>
                </div>
                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1280px-Flask_logo.svg.png"
                    alt=""
                    height="140"
                    width="250"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>Flask</h6>
                </div>

                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""
                    height="140"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>React JS</h6>
                </div>
                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
                    alt=""
                    height="140"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>JavaScript</h6>
                </div>
                <div className="col-md-3">
                  <img
                    className="border border-primary"
                    src="https://seeklogo.com/images/P/python-logo-A32636CAA3-seeklogo.com.png"
                    alt=""
                    height="140"
                  />
                  {/* <p className="mt-1" style={{margin:'0'}}>Python</p> */}
                  <h6 style={{ position: "relative", left: "10%" }}>Python</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

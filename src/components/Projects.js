import React from "react";
import Subproject from "./Subproject";

export default function Projects() {
  const prj = [
    {
      title: "Resume Screening",
      subtitle: "NLP,Python,Flask,HTML,CSS and JS",
      description:
        "It is the process of determining whether a candidate is qualified for a role based his or her education, experience, and other information captured on their resume.",
      image:
        "https://png.pngtree.com/png-vector/20201223/ourlarge/pngtree-vector-recruitment-character-resume-screening-png-image_2609417.jpg",
      link: "https://github.com/lodhagaurav01/project.git",
      from: "Aug 2021",
      to: "present",
    },
    {
      title: "Bengaluru House Price Prediction System ",
      subtitle: "Python, HTML, CSS, Flask",
      description:
        "A web-UI based site on which you can predict various house price of Bengaluru  and have analytics on it such as Top demanding area ,highest price per area,no of house sold in particular area.",

      image:
        "https://nycdsa-blog-files.s3.us-east-2.amazonaws.com/2021/03/chaitali-majumder/house-price-497112-KhCJQICS.jpg",

      link: "https://github.com/lodhagaurav01/TYMiniProject",
      from: "Feb 2021",
      to: "July 2021",
    },
    {
      title: "Car price Prediction System",
      subtitle: "Python, HTML, CSS, Flask",
      description:
        "A web-UI based site on which you can predict various car price based n no of feature  and have analytics on it .",
      image: "https://miro.medium.com/max/648/1*kQBj7l-Y1WPZfX9nKIYL1Q.jpeg",

      link: "https://github.com/lodhagaurav01/TYMiniProject",
      from: "Nov 2020",
      to: "Apr 2021",
    },
    {
      title: "Cricpedia",
      subtitle: "HTML ,CSS, MySQL, PHP",
      description:
        "A web-UI based application to enter the matches info into the database and check the foreign key constraint of the database and retrieve data",
      image:
        "https://5.imimg.com/data5/GE/BW/MY-18816969/electronic-scoreboard-500x500.jpg",
      link: "https://github.com/lodhagaurav01/TYMiniProject",
      from: "Aug 2021",
      to: "present",
    },
  ];
  return (
    <>
      {/* <div className="accordion" id="accordionExample"> */}
      {/* <div className="accordion-item">
          <h2 className="accordion-header" id="headingOneh">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOneh"
              aria-expanded="true"
              aria-controls="collapseOneh"
            >
              Projects :
            </button>
          </h2>
          <div
            id="collapseOneh"
            className="accordion-collapse collapse"
            aria-labelledby="headingOneh"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="container">
                <div className="row">
                  <Subproject prj={prj} ind={0} />
                  <Subproject prj={prj} ind={1} />
                  <Subproject prj={prj} ind={2} />
                  <Subproject prj={prj} ind={3} />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header" id="headingTwop1">
                <button
                  className="accordion-button collapsed bg-danger"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwop1"
                  aria-expanded="false"
                  aria-controls="collapseTwop1"
                >
                  <b>
                    <i>Projects</i>
                  </b>
                </button>
              </h2>
              <div
                id="collapseTwop1"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwop1"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container">
                    <div className="row">
                      <Subproject prj={prj} ind={0} />
                      <Subproject prj={prj} ind={1} />
                      <Subproject prj={prj} ind={2} />
                      <Subproject prj={prj} ind={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-6">
            <div className="accordion-item bg-dark">
              <h2 className="accordion-header" id="headingTwop2">
                <button
                  className="accordion-button collapsed bg-danger"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwop2"
                  aria-expanded="false"
                  aria-controls="collapseTwop2"
                >
                  <b>
                    <i>Projects</i>
                  </b>
                </button>
              </h2>
              <div
                id="collapseTwop2"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwop2"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container">
                    <div className="row">
                      <Subproject prj={prj} ind={0} />
                      <Subproject prj={prj} ind={1} />
                      <Subproject prj={prj} ind={2} />
                      <Subproject prj={prj} ind={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          
            <div className="accordion-item bg-dark border border-dark" id="asd">
              <h2 className="accordion-header " id="headingTwop3">
                <button
                  className="accordion-button collapsed text-center w-50 rounded-pill bg-danger"
                  type="button"
                  
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwop3"
                  aria-expanded="false"
                  aria-controls="collapseTwop3"
                  style={{position:"relative",margin:'auto'}}
                >
                  <b>
                    <i >Projects</i>
                  </b>
                </button>
              </h2>
              <div
                id="collapseTwop3"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwop3"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="container">
                    <div className="row">
                    <div className="col-md-6">
                      <Subproject prj={prj} ind={0} />
                      </div>
                    <div className="col-md-6">
                      <Subproject prj={prj} ind={1} />
                      </div>
                    <div className="col-md-6">
                      <Subproject prj={prj} ind={2} />
                      </div>
                    <div className="col-md-6">
                      <Subproject prj={prj} ind={3} />
                      </div>
                    
                      {/* <Subproject prj={prj} ind={1} />
                      <Subproject prj={prj} ind={2} />
                      <Subproject prj={prj} ind={3} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
         


        
     
    </>
  );
}

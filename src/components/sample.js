import React from 'react'

export default function Subproject(props) {

   console.log(props.prj[0]); 
  return (
   <>
   <div className="row">
       {/* for(int i=0; i<props.project.length) */}
           {/* console.log({props.project}) */}
          <div className="col-6 ">
            <div className="card" style={{ width: "18rem" }}> 
            <a href={props.prj[0].link} target='_blank'>
              <img src={props.prj[0].image} className="card-img-top" alt="Image not found" /></a>
              <div className="card-body">
                <h5 className="card-title">{props.prj[0].title}</h5>
                <p className="card-text">
                {props.prj[0].description}
                </p>
              </div>
              {/* console.log(object); */}
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Technologies</b> : {props.prj[0].subtitle}  </li>
                <li className="list-group-item"><b>From</b> : {props.prj[0].from} - <b>To</b> : {props.prj[0].to}  </li>
                {/* <li className="list-group-item">A third item</li> */}
              </ul>
              {/* <div className="card-body">
                <a href="/" className="card-link">
                  Card link
                </a>
                <a href="/" className="card-link">
                  Another link
                </a>
              </div> */}
            </div>
          </div>

          {/* <div className="col-6">
              <h1>dddddddddddddd</h1>

          </div>
          <div className="col-6">
              <h1>dddddddddddddd</h1>

          </div>
          <div className="col-6">
              <h1>dddddddddddddd</h1>

          </div> */}
        </div>
   </>
  )
}






<div className="col-4">
            <div class="accordion-item bg-dark">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed bg-danger"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b>
                    <i>Projects</i>
                  </b>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
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
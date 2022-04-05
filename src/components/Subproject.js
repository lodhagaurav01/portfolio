import React from "react";

export default function Subproject(props) {
  console.log(props.prj[0]);
  return (
    <>
      

        
        <div className="mt-3 mb-3 ">
          <div className="card" style={{ width: "80%"}}>
            <a href={props.prj[props.ind].link} target="_blank">
              <img
                src={props.prj[props.ind].image}
                className="card-img-top"
                alt="Image not found" 
                height='300'
                
              />
            </a>
            <div className="accordion" id="accordionExample">

              
<div className="accordion-item">
                <h2 className="accordion-header" id={`headingOne${props.ind}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseOne${props.ind}`}
                    aria-expanded="false"
                    aria-controls={`collapseOne${props.ind}`}
                  >
                    <b>{props.prj[props.ind].title}</b>
                  </button>
                </h2>
                <div
                  id={`collapseOne${props.ind}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`headingOne${props.ind}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{props.prj[props.ind].description}</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id={`headingTwo${props.ind}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseTwo${props.ind}`}
                    aria-expanded="false"
                    aria-controls={`collapseTwo${props.ind}`}
                  >
                    <b>Technologies</b>
                  </button>
                </h2>
                <div
                  id={`collapseTwo${props.ind}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`headingTwo${props.ind}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{props.prj[props.ind].subtitle}</div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id={`headingThree${props.ind}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapseThree${props.ind}`}
                    aria-expanded="false"
                    aria-controls={`collapseThree${props.ind}`}
                  >
                    <b> Time</b>
                  </button>
                </h2>
                <div
                  id={`collapseThree${props.ind}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`headingThree${props.ind}`}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <b>From</b> : {props.prj[props.ind].from} - <b>To</b> :
                    {props.prj[props.ind].to}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}






// import React from "react";

// export default function Subproject(props) {
//   console.log(props.prj[0]);
//   return (
//     <>
      

        
//         <div className="col-6 mt-3 mb-3 ">
//           <div className="card" style={{ width: "15rem" }}>
//             <a href={props.prj[props.ind].link} target="_blank">
//               <img
//                 src={props.prj[props.ind].image}
//                 className="card-img-top"
//                 alt="Image not found" 
//                 height='300'
                
//               />
//             </a>
//             <div className="accordion" id="accordionExample">

              
// <div className="accordion-item">
//                 <h2 className="accordion-header" id={`headingOne${props.ind}`}>
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#collapseOne${props.ind}`}
//                     aria-expanded="false"
//                     aria-controls={`collapseOne${props.ind}`}
//                   >
//                     <b>{props.prj[props.ind].title}</b>
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapseOne${props.ind}`}
//                   className="accordion-collapse collapse"
//                   aria-labelledby={`headingOne${props.ind}`}
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div className="accordion-body">{props.prj[props.ind].description}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id={`headingTwo${props.ind}`}>
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#collapseTwo${props.ind}`}
//                     aria-expanded="false"
//                     aria-controls={`collapseTwo${props.ind}`}
//                   >
//                     <b>Technologies</b>
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapseTwo${props.ind}`}
//                   className="accordion-collapse collapse"
//                   aria-labelledby={`headingTwo${props.ind}`}
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div className="accordion-body">{props.prj[props.ind].subtitle}</div>
//                 </div>
//               </div>

//               <div className="accordion-item">
//                 <h2 className="accordion-header" id={`headingThree${props.ind}`}>
//                   <button
//                     className="accordion-button collapsed"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target={`#collapseThree${props.ind}`}
//                     aria-expanded="false"
//                     aria-controls={`collapseThree${props.ind}`}
//                   >
//                     <b> Time</b>
//                   </button>
//                 </h2>
//                 <div
//                   id={`collapseThree${props.ind}`}
//                   className="accordion-collapse collapse"
//                   aria-labelledby={`headingThree${props.ind}`}
//                   data-bs-parent="#accordionExample"
//                 >
//                   <div className="accordion-body">
//                     <b>From</b> : {props.prj[props.ind].from} - <b>To</b> :
//                     {props.prj[props.ind].to}{" "}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
      
//     </>
//   );
// }

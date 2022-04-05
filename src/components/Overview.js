import React from "react";
import img1 from "../images/three.png";

export default function Overview() {
  return (
    
      <div
        className="container"
        style={{ backgroundColor: "#0d1940" }}
      >
        <div className="row" >
         
          
         
          <div className="col-md-4">
            
              <img
                src={img1}
                className="justify-content-center"
                style={{position:'relative', left:'20%'  ,borderStyle:'inset',borderWidth:'7px',borderColor:'coral',backgroundColor:'white'}}
                alt="nnnn"
                
                height='200px'
                
               
              />
          </div>

          <div className="col-md-6 mx-4 mt-3" >
            <p   style={{color: "chartreuse"}} height='300px'>
            Pursuing B. Tech in Computer Science and
            Engineering and seeking an opportunity
            for a Reputed Organization that gives me
            ample opportunities to prove my skill set
            and utilize my knowledge for the growth of
            the organization.
            </p>
          </div>
        </div>
      </div>
   
  );
}

import React from 'react'

export default function Contact() {
  return (  
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-6 mb-3">
            <iframe style={{height:'500px',width:'100%',border:'3px solid red'}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=wit+jain+hostel,+ashok+chowk+,solapur&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>

            <div className="col-md-6 mb-3 bg-light" style={{border:'3px solid tan'}}>

              <form action="">

                <input className="d-block rounded-pill p-2 mt-3 mx-auto w-50" type='text' placeholder='please enter your msg'/>
                <input className="d-block rounded-pill p-2 mt-3 w-50 mx-auto" type='email' placeholder='please enter your email id'/>
                <submit className=" d-block rounded-pill p-3 mt-3 text-light bg-success text-center w-50 mx-auto" type='button' >Send</submit>
              </form>
            </div>

        </div>

     </div>



  )
}

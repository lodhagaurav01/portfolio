import React from 'react'
import pic from '../images/one.jpg'

export default function Me() {
  return (
<>
<img src={pic} alt="not found" width='100%' height='700'></img>

<div className='container'  >
      {/* <h1 style={{position:'absolute' ,top:'30%', left:'10%',color:'yellow'}}> I'm <span style={{color:'red'}} >Gaurav</span> Lodha</h1>
      <h4 style={{position:'absolute' ,top:'40%', left:'10%',color:'chartreuse'}}>Upcoming Infosys Specialist Programmer</h4> */}
     <h1 style={{position:'absolute',left:' 20%',top: "40%" ,color:'yellow'}}> I'm <span style={{color:'red'}} >Gaurav</span> Lodha</h1>
      <h4 style={{position:'absolute',left:' 20%',top:" 50%" ,color:'chartreuse'}}>Upcoming Infosys Specialist Programmer</h4>
    </div>
    
    
   
    </>
  )
}

// style={{position:'absolute'}}
// style={{color:'red'}}
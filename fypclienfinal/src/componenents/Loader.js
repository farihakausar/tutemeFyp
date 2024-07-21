// import React,{useState} from 'react'
// import GridLoader
// from "react-spinners/GridLoader";

// function Loader() {
    
//       let [loading, setLoading] = useState(true);
      
//   return (
//     <>
// <div className="sweet-loading">
     
// <GridLoader
//         color='#000'
//         loading={loading}
//         style={{display: "block",
//         margin: "0 auto",
//         borderColor: "red",}}
//         size={10}
//         aria-label="Loading Spinner"
//         data-testid="loader"
//       />
//     </div>

//     </>
   
//   )
// }

// export default Loader

import React, { useState } from 'react';
import RingLoader from 'react-spinners/RingLoader'; // Import RingLoader instead of GridLoader

function Loader() {
  let [loading, setLoading] = useState(true);
  
  return (
    <div className="sweet-loading">
      <RingLoader
        color='#000'
        loading={loading}
        style={{
          display: "block",
          margin: "0 auto",
          borderColor: "red",
        }}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;

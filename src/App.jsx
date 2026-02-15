

// // // const App = () => {
// // //   let x = "ombabu";
// // //     let array =["user1","user2","user3","user4","user5"];
// // //   return (
// // //     <div>
// // //      {x}
// // //      {array.map((user) =>{return <h2>{user}</h2>})}
// // //     </div>
// // //   )
// // // }

// // // export default App


// // const App = () => {

// // let data = "girls";
// //   return (
// //     <div>
// //       {data === "girls" ? <h1>Girls</h1> : <h1>Boys</h1>}
      
// //     </div>
// //   )
// // }

// // export default App



// import {useState} from "react";
// const App = () => {
//  const[x,setX] = useState(0);
//  const btnClick = () => {
    
//   console.log("clicked");
//   setX(x + 1);
//   console.log(x);

//  }
//   return (
//     <div>
//       {x}
//       <button onClick={() => {btnClick()}}>Click me</button>
//       <firstComponents data = {x} fn={setX}/>
//     </div>
//   )
// }

// export default App

import React, { useRef, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = () => {
    const value = inputRef.current.value;

    if (value.trim() !== "") {
      setData([...data, value]); // add to array
      inputRef.current.value = ""; // clear input
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleSubmit}>Submit</button>

      {data.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </div>
  );
};

export default App;



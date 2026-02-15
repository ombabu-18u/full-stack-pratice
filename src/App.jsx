

// const App = () => {
//   let x = "ombabu";
//     let array =["user1","user2","user3","user4","user5"];
//   return (
//     <div>
//      {x}
//      {array.map((user) =>{return <h2>{user}</h2>})}
//     </div>
//   )
// }

// export default App


const App = () => {

  let data = "girls";
  return (
    <div>
      {data === "girls" ? <h1>Girls</h1> : <h1>Boys</h1>}
    </div>
  )
}

export default App

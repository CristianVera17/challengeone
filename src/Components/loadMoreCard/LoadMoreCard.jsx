// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";

// export default function LoadMoreCard() {
//   const [items, setItems] = useState([]);
//   const [visible, setVisible] = useState(6);
//   const showMoreItems = () => {
//   setVisible(prevValue => prevValue + 3)
//   }

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => setItems(data));
//   }, []);
//   return (
//     <div className="App">
//       <div className="container">
//         {items.slice(0,visible).map((item) => (
//           <div className="card">
//             <div className="id">
//               <span>{item.id}</span>
//             </div>
//             <p>{item.body}</p>
//           </div>
//         ))}
//         <button onClick={showMoreItems}>Load More</button>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import "../../Components/charactersList/characters-list.css";
// export const CharactersList = () => {
//   const [personajes, setPersonajesTwo] = useState([]);
//   useEffect(() => {
//     axios
//       .get(
//         "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=bd293897fc18a069507635e6566eda6f&hash=b5914d4e4f9eb0e3150961b9884d1336"
//       )
//       .then((res) => {
//         setPersonajesTwo(res.data.data.results);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <>
//       <div className="boox">
//         <div></div>
//         {personajes.map((per) => (
//           <div className="booox" key={per.id}>
//             <div>
//               {" "}
//               <div></div>
//               <div>
//                 <section className="container">
//                   <figure>
//                     <img
//                       src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
//                       alt=""
//                     />
//                   </figure>
//                 </section>
//               </div>
//               <div className="line-box"></div>
//               <div className="btn btn2">
//                 <div>
//                   <p className="font-bold text-white">{per.name}</p>
//                 </div>
//               </div>
//               <div className="boooox">
//                 <div className="box-int-cor-rd-cd"></div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };
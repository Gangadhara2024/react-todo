// import React, { useState } from "react";
// import { Addtask } from "./Addtask";
// import { v4 as uuidv4 } from "uuid";
// import { Edit } from "./Edit";

// export const Input = () => {
//   const [box, setBox] = useState();
//   const [data, setData] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     addtodo(box);
//   };

//   const addtodo = (title) => {
//     setData([...data, { id: uuidv4(), inputValue: title, isEditing: false }]);
//     console.log(data);
//   };

//   const deletebtn = (id) => {
//     setData(data.filter((idx) => idx.id !== id));
//   };

//   const editbtn = (id) => {
//     setData(
//       data.map((idx) =>
//         idx.id === id ? { ...idx, isEditing: !idx.isEditing } : idx
//       )
//     );
//   };

//   const editUpdate = (task, id) => {
//     setData(
//       data.map((idx) =>
//         idx.id === id ? { ...idx, task, isEditing: !idx.isEditing } : idx
//       )
//     );
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="inputs">
//             <input
//               type="text"
//               onChange={(e) => setBox(e.target.value)}
//               placeholder="enter task"
//             />
//             <button type="submit"> Add Task </button>
//           </div>
//         </form>

//         {data.map((item, index) =>
//           item.isEditing ? (
//             <Edit update={editUpdate} todo={item} key={index} />
//           ) : (
//             <Addtask
//               todo={item}
//               key={index}
//               deletei={deletebtn}
//               editi={editbtn}
//             />
//           )
//         )}

//         <div className="div2">
//           <p>{todo.inputValue} </p>
//           <div className="buttons">
//             <button className="delete" onClick={() => deletei(todo.id)}>
//               Delete
//             </button>
//             <button className="edit" onClick={() => editi(todo.id)}>
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

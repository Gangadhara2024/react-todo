import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const Navbar = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [update, setUpdate] = useState(false);


  const handleAdd = () => {
    setTodos([...todos, {id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    // console.log(todos);
    setUpdate(false);
    
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDelete = (e, id) => {
     let newtodos = todos.filter(item => {
       return item.id !== id;
     })
    //  console.log(newtodos);
     setTodos(newtodos);
  };

  const handleEdit = (e, id) => {
      let t = todos.filter(idx => idx.id === id);
      setTodo(t[0].todo);
      
      let newtodos = todos.filter(item => {
        return item.id !== id;
        
      })
      setTodos(newtodos);
      setUpdate(true);
  };

  const handleCheckbox = (e) =>{
      let id = e.target.name;
      // console.log(id);
      let index = todos.findIndex(item => {
        return item.id === id;
      })
      // console.log(index);
      let newtodos = [...todos];
      newtodos[index].isCompleted = !newtodos[index].isCompleted;
      setTodos(newtodos);
      // console.log(newtodos);
  }

  return (
    <>
      
      <div className="container">
        <div className="inputs">
          <h2>Add todo</h2>
          <input type="text" placeholder="enter task" onChange={handleChange} value={todo}/>
          <button type="submit" onClick={handleAdd}>{!update ? 'Add Task' : 'Update' }</button>
        </div>

        <h2 className="todo">your todo</h2>

       {todos.map(item => {
        return(
        <div key={item.id}className="div2">
          <input type="checkbox" name={item.id} value={item.isCompleted} onChange={handleCheckbox}/>
          <p className={item.isCompleted? "line-through" : ""}>{item.todo}</p>
          <div className="buttons">
            <button className="delete" onClick={(e) => handleDelete(e, item.id)}>Delete </button>
            <button className="edit" onClick={(e) => handleEdit(e, item.id)}> Edit </button>
            
          </div>
        </div>

        )})}

      </div>
    </>
  );
};

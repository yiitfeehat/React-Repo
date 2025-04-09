import { useState } from "react";
import { useDispatch } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";



const TodoInput = () => {

  const dispatch2 = useDispatch()
  const [inputVeri, setVeri]=useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()

    dispatch2(ekle(inputVeri))
  }



  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        onChange={(e)=> setVeri(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;

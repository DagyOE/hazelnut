import ToDoListItem from "./ToDoListItem.jsx";
import FakeToDos from "../../data/FakeToDos.jsx";
import { useEffect, useState } from "react";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fakeData = FakeToDos;
    setTodos(fakeData);
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {todos.map((item, index) => (
            <ToDoListItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDoList;

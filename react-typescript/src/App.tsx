import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { TodosType } from "./components/todo.model";

const initialTodos = [
  {
    id: 0,
    text: "first todo"
  },
  {
    id: 1,
    text: "second todo"
  }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodosType[]>(initialTodos);

  function addTodoHandler(e: string) {
    let id = todos[todos.length - 1].id;
    setTodos(prevTodo => [...prevTodo, { id: id + 1, text: e }]);
  }

  function deleteTodoHandler(id: number) {
    return setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
  }

  console.log(todos);
  return (
    <div className='App'>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler} />
    </div>
  );
};

export default App;

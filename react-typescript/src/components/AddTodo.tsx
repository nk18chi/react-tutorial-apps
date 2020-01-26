import React, { useState } from "react";
export interface AddTodoProps {}

const AddTodo: React.FC<any> = props => {
  const [textValue, setTextValue] = useState<string>("");

  function submitTodoHandler(event: React.FormEvent) {
    event.preventDefault();
    props.onAddTodo(textValue);
    setTextValue("");
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input
          type='text'
          id='todo-text'
          value={textValue}
          onChange={e => setTextValue(e.target.value)}
        />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

export default AddTodo;

import React, { useState } from 'react';
import styles from './FridgeList.module.css';

function Todo({ todo, index, removeTodo }) {
  return (
    <div
      className={styles.todo}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}

      <div>
        {/* <button onClick={() => removeTodo(index)}>x</button> */}
        <button
          type="button"
          className={`close ${styles.closeButton}`}
          aria-label="Close"
          onClick={() => removeTodo(index)}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Banana'
    },
    {
      text: 'Spinach'
    },
    {
      text: 'Apple'
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className={styles.app}>
      <div className={styles.todoList}>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

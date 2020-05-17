import React, { useState, useEffect } from 'react';
import styles from './FridgeList.module.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Todo({ todo, index, removeTodo }) {
  return (
    <div
      className={styles.todo}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo}

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
        placeholder="Enter items..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App({ setFridgeIng }) {
  const location = useLocation();
  // console.log(location.state);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3004/groceries').then(resp => {
      let finalData = resp.data.map(ele => {
        return ele.title;
      });
      console.log(finalData);
      setTodos(finalData);
    });
  }, []);

  const addTodo = text => {
    axios
      .post('http://localhost:3004/groceries', { title: text, id: text })
      .then(resp => console.log('SENT'))
      .catch(err => console.log('ERROR', err));
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setFridgeIng(newTodos);
  };

  const removeTodo = index => {
    const deleteItem = todos[index];
    axios.delete(`http://localhost:3004/groceries/${deleteItem}`);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setFridgeIng(newTodos);
  };

  return (
    <div className={styles.app}>
      <div className={styles.todoList} style={{ paddingBottom: '30px' }}>
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

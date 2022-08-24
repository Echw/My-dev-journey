import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../components/Checkbox';
import Title from './../components/Title';
import Button from '../components/Button';

const ToDoList = () => {
  const [todos, setTodos] = React.useState(todosTemplate);

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleCheck = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const calculateChecked = () => {
    const newTodos = todos.filter((todo) => todo.checked === true);
    return newTodos.length;
  };

  const [task, setTask] = React.useState('');

  const handleAddTodo = () => {
    setTodos([
      { id: Math.floor(Math.random() * 100), label: task, checked: false },
      ...todos,
    ]);
    setTask('');
  };

  return (
    <Wrapper>
      <Title name="ToDo List" />

      <TodoList>
        <span>Things to do:</span>
        {todos.length ? (
          <div>
            {todos.map((todoItem) => (
              <Checkbox
                key={todoItem.id}
                label={todoItem.label}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            ))}
          </div>
        ) : (
          <div className="no-todos">
            Looks like you&apos;re absolutely free today!
          </div>
        )}
      </TodoList>
      <TodoResult>
        Done:
        {calculateChecked()}
      </TodoResult>
      <TodoForm>
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            placeholder="Enter new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="button" onClick={handleAddTodo}>
            Add task
          </button>
        </form>
      </TodoForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  input {
    padding: 1rem 2rem;
    border-radius: 3rem;
    border: 0.2rem solid #286fc7;
    text-transform: capitalize;
  }
  h2 {
    color: #286fc7;
    margin: 1rem;
  }
`;

const TodoList = styled.div``;
const TodoResult = styled.div``;
const TodoForm = styled.div`
  button {
    margin: 1rem;
    padding: 1rem 2rem;
    border-radius: 3rem;
    border: 0.2rem solid #286fc7;
    background: transparent;
    cursor: pointer;
    transition: 0.5s;
    text-decoration: none;
    color: #286fc7;
    font-weight: 600;
    font-size: 0.75rem;
    text-align: center;

    :hover {
      background: #286fc7;
      color: white;
      transition: 0.5s;
    }
  }
`;

export default ToDoList;

const todosTemplate = [
  {
    id: 0,
    label: 'React Hooks',
    checked: false,
  },
  {
    id: 1,
    label: 'React Context',
    checked: false,
  },
  {
    id: 2,
    label: 'Typescript',
    checked: false,
  },
  {
    id: 3,
    label: 'React Router',
    checked: false,
  },
];

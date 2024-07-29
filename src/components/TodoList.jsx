import React, { useState } from 'react';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import Edit from './Edit';
uuidv4();

const TodoList = () => {
    const [todoValue, setTodo] = useState([]);
    const createTodo = (todo) => {
        setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false, isDone: false }]);
    };
    const deleteTodo = (id) => {
        setTodo(todoValue.filter((todo) => todo.id !== id));
    };
    const editTodo = (id) => {
        setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)));
    };
    const editTask = (task, id) => {
        setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo)));
    };
    const doneTodo = (id) => {
        setTodo(todoValue.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
        console.log(todoValue);
    };

    return (
        <div className="container bg-gray-700 mt-20 p-8 rounded-md">
            <h1 className="flex justify-center mb-10 text-white font-bold">TodoList</h1>
            <Form createTodo={createTodo} />
            {todoValue.map((todo, idx) =>
                todo.isEditing ? (
                    <Edit task={todo} key={idx} editTodo={editTask} />
                ) : (
                    <Todo task={todo} key={idx} deleteTodo={deleteTodo} editTodo={editTodo} doneTodo={doneTodo} />
                )
            )}
        </div>
    );
};

export default TodoList;

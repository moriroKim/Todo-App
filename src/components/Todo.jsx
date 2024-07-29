import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';

const Todo = ({ task, deleteTodo, editTodo, doneTodo }) => {
    return (
        <div
            className={`flex justify-between items-center text-white py-3 px-4 rounded-md mb-1 cursor-pointer
                ${task.isDone ? 'bg-green-500 line-through' : 'bg-violet-800'}`}
            onClick={() => doneTodo(task.id)}
        >
            <p className="font-primary">{task.task}</p>
            <div className="flex items-center gap-x-4">
                <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
                <BsFillTrashFill className="text-xl" onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default Todo;

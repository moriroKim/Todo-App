import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { FaRegCheckCircle } from 'react-icons/fa';

const Todo = ({ task, deleteTodo, editTodo, doneTodo }) => {
    return (
        <div
            className={`flex justify-between items-center text-white py-3 px-4 rounded-md mb-1 cursor-pointer ${task.isDone ? 'bg-green-500' : 'bg-violet-500'}`}
        >
            <p className="font-primary">{task.task}</p>
            <div className="flex items-center gap-x-4">
                <FaRegCheckCircle
                    className={`text-xl ${task.isDone ? 'text-violet-500' : 'text-white'}`}
                    onClick={() => doneTodo(task.id)}
                />
                <AiFillEdit className="text-xl" onClick={() => editTodo(task.id)} />
                <BsFillTrashFill className="text-xl" onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    );
};

export default Todo;

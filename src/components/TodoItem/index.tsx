import React from 'react';
import {ITodo} from "../../types/data";

interface IToDoItem extends ITodo {
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

const ToDoItem: React.FC<IToDoItem> = ({id, title, complete, toggleToDo, removeToDo}) => {
    return (
        <div>
            <input type={"checkbox"} checked={complete} onChange={() => toggleToDo(id)}/>
            {title}
            <button onClick={() => removeToDo(id)}>x</button>
        </div>
    );
};

export default ToDoItem;
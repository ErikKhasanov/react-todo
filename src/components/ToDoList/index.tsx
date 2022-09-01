import React from 'react';
import TodoItem from "../TodoItem";

import {ITodo} from "../../types/data";

interface IToDoList {
    items: ITodo[];
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

const ToDoList: React.FC<IToDoList> = ({items,toggleToDo, removeToDo}) => {
    return (
        <div>
            {items.map(todo => <TodoItem {...todo} toggleToDo={toggleToDo} removeToDo={removeToDo}  key={todo.id}/>)}
        </div>
    );
};

export default ToDoList;
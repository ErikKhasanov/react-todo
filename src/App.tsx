import React, {useState, useEffect, useRef} from "react";
import ToDoList from "./components/ToDoList";
import {ITodo} from "./types/data";

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null)

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }
    
    const toggleToDo = (id: number): void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const removeToDo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter') addTodo()
    }

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, [])

    return (
        <div>
            <div>
                <input value={value} onChange={handleChange} onKeyDown={handleKeyDown} ref={inputRef}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <ToDoList toggleToDo={toggleToDo} removeToDo={removeToDo} items={todos}/>
        </div>
    )
}

export default App
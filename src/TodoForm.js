import React from "react";
import { TodoContext } from "./TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {

    }

    const onSubmit = (event) => {
        event.prevenDefault();
        addTodo(newTodoValue);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Ingresa el texto de tu TODO"></textarea>
            <button type="button" onClick={onCancel}>Cancelar</button>
            <button type="submit">Añadir</button>
        </form>
    );
}

export { TodoForm }
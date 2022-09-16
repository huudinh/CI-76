import { useState } from "react";

const TodoList = () => {
    const [todoItems, setTodoItems] = useState(['homework', 'shopping']);

    const onAddClick = () => {
        setTodoItems([ ...todoItems, 'new todo item']);
    };

    return (
        <div>
            <button onClick={onAddClick}>add</button>
            <ul>
                {todoItems.map((item, idx) => {
                    return <li key={idx}>{item}</li>
                })}
            </ul>
        </div>
    );
};

export default TodoList;
```jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodos() {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
            const firstTen = data.slice(0, 10);
            setTodos(firstTen);
        };
        getTodos();
    }, []);

    const renderTodos = () => {
        return todos.map(todo => {
            return (
                <li key={todo.id}>
                    {`ID: ${todo.id}, Title: ${todo.title}`}
                </li>
            )
        });
    };

    return (
        <div>
            <h1>Todos:</h1>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    )
};

export default TodosPage
```

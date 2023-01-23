```jsx
import { useEffect, useState } from 'react'
import axios from 'axios'

const TodoItem = ({ todo }) => {
    return (
        <li>
            {`ID: ${todo.id}, Title: ${todo.title}`}
        </li>
    )
}

function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        async function getTodos() {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/");
            setTodos(data);
        };
        getTodos();
    }, []);

    return todos
}

const TodoList = ({ todos }) => {
    return <ul>
        {todos.map(todo => {
            return (
                <TodoItem key={todo.id} todo={todo} />
            )
        })}
    </li>
};

const TodosPage = () => {
    const todos = useTodos()
    
    return (
        <div>
            <h1>Todos:</h1>
            <TodoList todos={todos.slice(0, 10)} />
        </div>
    )
};

export default TodosPage
```

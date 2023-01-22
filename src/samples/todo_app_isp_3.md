```jsx
// ...

const TodoItem = ({ id, title }) => {
    return (
        <li>
            {`ID: ${id}, Title: ${title}`}
        </li>
    )
}

const TodoList = ({ todos, as }) => {
    const Component = as || "ul"

    return <Component>
        {todos.map(todo => {
            return (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} />
            )
        })}
    </Component>
}

//...
```

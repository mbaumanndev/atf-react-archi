```jsx
// ...

const TodoList = ({ todos, as }) => {
    const Component = as || "ul"

    return <Component>
        {todos.map(todo => {
            return (
                <TodoItem key={todo.id} todo={todo} />
            )
        })}
    </Component>
};

const TodosPage = () => {
    const todos = useTodos()
    
    return (
        <div>
            <h1>Todos:</h1>
            <TodoList as="ol" todos={todos.slice(0, 10)} />
        </div>
    )
};

export default TodosPage
```

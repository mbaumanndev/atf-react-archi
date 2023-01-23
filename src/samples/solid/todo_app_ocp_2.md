```jsx
// ...

const FancyTodoContainer = ({ children }) => {
    return <ul className="text-pink blink font-bold">
        {children}
    </ul>
}

const TodosPage = () => {
    const todos = useTodos()
    
    return (
        <div>
            <h1>Todos:</h1>
            <TodoList as={FancyTodoContainer} todos={todos.slice(0, 10)} />
        </div>
    )
};

export default TodosPage
```

```tsx
type TodoListProps<C extends React.ElementType> = ModelListProps<Todo, number> & {
    as: C
}
function TodoList<C extends React.ElementType = "ul">(
    { model, as }: TodoListProps<C>
) {
    const Component = as || "ul"

    return <Component>
        {model.map((todo) => {
            return (
                <TodoItem key={todo.id} id={todo.id} title={todo.title} />
            )
        })}
    </Component>
}

export default withBackendModelList<number>(TodoList, IoC.ITodosService)
```

```jsx
// ...

const TodoItem = ({ todo }) => {
    const { id, title } = todo

    return (
        <li>
            {`ID: ${id}, Title: ${title}`}
        </li>
    )
}

//...
```

```jsx
const TodoForm = ({ initialTitle = "", onSubmit }) => {
    const [title, setTitle] = useState(initialTitle)

    const handleSubmit = async (e) => {
        e.preventDefault()

        await onSubmit(title)
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">
                Titre de la tâche
            </label>
            <input
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
        </div>
    </form>
}

const NewTodoForm = () => {
    const onSubmit = async (title) => {
        // Logique de vérification...

        await axios.post("...", {
            title
        })
    }

    return <TodoForm onSubmit={onSubmit} />
}

const EditTodoForm = ({ id, title }) => {
    const onSubmit = async (title) => {
        // Logique de vérification...

        await axios.patch(`.../${id}`, {
            title
        })
    }

    return <TodoForm initialTitle={title} onSubmit={onSubmit} />
}
```

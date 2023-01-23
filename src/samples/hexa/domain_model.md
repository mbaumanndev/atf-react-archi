```ts
export type ModelBase<TPrimaryKey = string> = {
    id: TPrimaryKey
}

export type Todo = ModelBase<number> & {
    id: number
    userId: number
    title: string
    completed: boolean
}
```

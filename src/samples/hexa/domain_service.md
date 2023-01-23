```ts
import { inject, injectable } from 'inversify'

export interface IBackendModelService<
    TModel extends ModelBase<TPrimaryKey>,
    TPrimaryKey = string,
> {
    listAsync(): Promise<TModel[]>
}

export interface IHttpClient {
    get<TResult>(
        url: string,
        params?: Record<string, unknown>,
    ): Promise<TResult>
    post<TResult>(
        url: string,
        params?: Record<string, unknown>,
    ): Promise<TResult>
    patch<TResult>(
        url: string,
        params?: Record<string, unknown>,
    ): Promise<TResult>
    delete<TResult>(url: string): Promise<TResult>
}

@injectable()
export class TodosService
    implements IBackendModelService<Todos, number> {

    @inject(IoC.ITodosRepository)
    private repository: ITodosRepository

    async listAsync() {
        return this.repository.getTodosAsync()
    }
}
```

```ts
import { inject, injectable } from 'inversify'

@injectable()
export class TodosRepository implements ITodosRepository {
    private http: IHttpClient

    constructor(
        @inject(IoC.IHttpClient) http: IHttpClient
    ) {
        this.http = http
    }

    async getTodosAsync() {
        return this.http.get<Todo[]>('/todos')
    }
}
```

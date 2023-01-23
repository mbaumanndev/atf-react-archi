```ts
import { inject, injectable } from 'inversify'

@injectable()
export class AxiosHttpClient implements IHttpClient {
    private _client: AxiosInstance

    constructor(
        @inject('baseURL') baseURL: string,
        @inject(IoC.IAuthService) auth: IAuthService,
    ) {
        this._client = axios.create({
            baseURL,
        })

        if (auth.isAuthenticated()) {
            this._client.interceptors.request.use((request) => {
                const bearer = auth.getIdentity().id

                request.headers['Authorization'] = `Bearer ${bearer}`

                return request
            })
        }
    }

    async get<TResult>(url: string, params?: Record<string, unknown>) {
        const response = await this._client.get<TResult>(url, {
            params,
        })

        return response.data
    }

    // ...
}
```

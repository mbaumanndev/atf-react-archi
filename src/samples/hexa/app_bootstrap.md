```tsx
import React from 'react'
import 'reflect-metadata'
import { Container } from 'inversify'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const container = new Container()

const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        children: [
            // ...
        ]
    },
])

container
    .bind<IStorageService>(IoC.IStorageService)
    .to(LocalStorageService)
    .inSingletonScope()
container
    .bind<IAuthService>(IoC.IAuthService)
    .to(AuthService)
    .inRequestScope()
container
    .bind<IHttpClient>(IoC.IHttpClient)
    .to(AxiosHttpClient)
    .inRequestScope()
container
    .bind<ITodosRepository>(IoC.ITodosRepository)
    .to(TodosRepository)
    .inRequestScope()
container
    .bind<IBackendModelService<Todo, number>>(IoC.ITodosService)
    .to(TodosService)
    .inRequestScope()

container
    .bind<string>('baseURL')
    .toDynamicValue((context) => {
        const storage = context.container.get<IStorageService>(
            IoC.IStorageService,
        )
        return storage.get('baseUrl') || 'https://jsonplaceholder.typicode.com'
    })
    .inRequestScope()
container.bind<QueryClient>('queryClient').toConstantValue(queryClient)

function App() {
    return (
        <ContainerProvider container={container}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ContainerProvider>
    )
}

export default App
```

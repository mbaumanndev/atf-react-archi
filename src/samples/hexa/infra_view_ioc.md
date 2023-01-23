```tsx
const ContainerContext = createContext<Container>(null)

export type ContainerProviderProps = PropsWithChildren<{
    readonly container: Container
}>
function ContainerProvider({ container, children }: ContainerProviderProps) {
    return (
        <ContainerContext.Provider value={container}>
            {children}
        </ContainerContext.Provider>
    )
}

export default memo(ContainerProvider)

export type ServiceNamed = string | number | symbol

export function useContainer() {
    return useContext(ContainerContext)
}

export function useService<TService = unknown>(
    id: interfaces.ServiceIdentifier<TService>,
): TService {
    const container = useContainer()
    return container.get<TService>(id)
}

// ...
```

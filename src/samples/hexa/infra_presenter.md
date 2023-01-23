```tsx
interface ModelListProps<
    TModel extends ModelBase<TPrimaryKey>,
    TPrimaryKey = string,
> {
    readonly model: TModel[]
}

function withBackendModelList<
    TPrimaryKey = string,
    TModel extends ModelBase<TPrimaryKey> = ModelBase<TPrimaryKey>,
    TProps extends ModelListProps<TModel, TPrimaryKey> = ModelListProps<
        TModel,
        TPrimaryKey
    >,
>(
    WrappedComponent: ComponentType<TProps>,
    serviceId: interfaces.ServiceIdentifier<
        IBackendModelService<TModel, TPrimaryKey>
    >,
) {
    return function BackendModelList(props: Omit<TProps, 'model'>) {
        const service = useService(serviceId)
        const [model, setModel] = useState<TModel[]>([])

        const getModel = useCallback(async () => {
            const response = await service.listAsync()
            setModel(response)
        }, [])

        useEffect(() => {
            getModel()
        }, [])

        return <WrappedComponent {...(props as TProps)} model={model} />
    }
}
```

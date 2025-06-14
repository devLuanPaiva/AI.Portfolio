interface ContainerProps {
    children: React.ReactNode
    classStyle?: string
}
export function Container({ children, classStyle }: Readonly<ContainerProps>) {
    return (
        <div className={`w-[90%] max-w-7xl mx-auto px-4 ${classStyle ?? ''}`}>
            {children}
        </div>
    )
}
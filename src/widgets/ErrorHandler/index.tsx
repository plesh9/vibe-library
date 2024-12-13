interface Props {
    className?: string
}

const ErrorHandler = ({ className }: Props) => {
    const reloadPage = () => {
        window.location.reload()
    }

    return (
        <div className={className}>
            <p>Oops, error :(</p>
            <button onClick={reloadPage} type='button'>
                Reload Page
            </button>
        </div>
    )
}

export default ErrorHandler

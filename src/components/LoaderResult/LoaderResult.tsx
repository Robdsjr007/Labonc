import styles from "./LoaderResult.module.sass"

const LoaderResult = () => {
    return (
        <div className={styles.containerLoader} >
            <div className={styles.loader}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div >
    )
}

export default LoaderResult
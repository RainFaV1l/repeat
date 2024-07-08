import { Link } from 'react-router-dom'
import styles from './Error.module.css'

export function Error() {
    return (
        <>
            <div className={styles.error}>
                <h1>404</h1>
                <p>Страница не найдена :(</p>
                <Link to={'/'}>
                    <button>
                        Перейти на главную страницу
                    </button>
                </Link>
            </div>
        </>
    )
}
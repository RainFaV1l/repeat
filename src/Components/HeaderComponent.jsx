import { Link } from "react-router-dom";
import styles from "./Header.module.css"

export function HeaderComponent() {
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.row}>
                        <Link to={'/'} className={styles.logo}>Logo</Link>
                        <ul className={styles.menu}>
                            <li><Link to={'/'}>Главная</Link></li>
                            <li><Link to={'/catalog'}>Каталог</Link></li>
                            <li><Link to={'/cart'}>Корзина</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
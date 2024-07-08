import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export function HeaderComponent() {
    const [cartModal, setCartModal] = useContext(AppContext)
    return (
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.row}>
                        <Link to={'/'} className={styles.logo}>Logo</Link>
                        <ul className={styles.menu}>
                            <li><Link to={'/'}>Главная</Link></li>
                            <li><Link to={'/catalog'}>Каталог</Link></li>
                            <li><button onClick={() => setCartModal(true)}>Корзина</button></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
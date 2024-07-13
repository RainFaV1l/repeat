import { useContext } from "react"
import {AppContext} from "./../context/AppContext"
import styles from "./Product.module.css"
import { Link } from "react-router-dom"

export function Product({product}) {

    const [cartModal, setCartModal, cart, setCart] = useContext(AppContext)

    const addToCart = (product) => {
        const exists = cart.find((item) => item.id === product.id)
        if(!exists) {
            // Без количества
            // cart.push(product)

            // С учетом количества
            const newCart = [
                ...cart,
                {
                    ...product,
                    quantity: 1,
                }
            ]

            setCart(newCart)
        }
    }

    const check = (id) => {
        return cart.find((item) => item.id === id)
    }

    return (
        <>
            <div className={styles.products__item}>
                <div className={styles.products__item__header}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                </div>
                <div className={styles.products__item__footer}>
                    <p className={styles.products__item__price}>{product.price} $</p>
                    {
                        !check(product.id) ? 
                        <button onClick={() => addToCart(product)}>Добавить в корзину</button>
                        : <button onClick={() => addToCart(product)}>Товар в корзине</button>
                    }
                </div>
                <Link to={`/products/${product.id}`}>Подробнее</Link>
            </div>
        </>
    )
}
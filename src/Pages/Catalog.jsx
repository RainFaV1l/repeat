import { useContext, useEffect, useState } from "react"
import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Catalog.module.css"
import { LoadingComponent } from "../Components/LoadingComponent"
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"

export function Catalog() {

    const [cartModal, setCartModal, cart, setCart] = useContext(AppContext)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(!loading) return
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(json => {
            setProducts(json.products)
            setLoading(false)
        })
    }, [loading])

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
            {/* Подключение компонента загрузки */}
            <LoadingComponent loading={loading}/>
            <div className={styles.products}>
                <PageHeaderComponent title="Каталог товаров" subtitle="Лучшие товары только у нас!"/>
                <div className={styles.products__list}>
                    {
                        products.map((product) => {
                            return (
                                <div key={product.id} className={styles.products__item}>
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
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
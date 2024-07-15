import { useContext, useState } from "react"
import {AppContext} from "./../context/AppContext"
import styles from "./Product.module.css"
import { Link } from "react-router-dom"
import { ChevronDownIcon } from "@heroicons/react/16/solid"

export function Product({product}) {

    const [cartModal, setCartModal, cart, setCart] = useContext(AppContext)
    const [dimensions, setDimensions] = useState(false)

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

    // Перебор объектов
    const showDimensions = (dimensions) => {
        for(const key in dimensions) {
            console.log(dimensions[key])
        }
    }

    return (
        <>
            <div className={styles.products__item}>
                <div className={styles.products__item__header}>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <button onClick={() => setDimensions(!dimensions)}><ChevronDownIcon className={dimensions ? `${styles.show} size-8` : 'size-8'}/></button>
                    {
                        dimensions ? 
                            <div>
                                <p>Width: {product.dimensions.width}</p>
                                <p>Height: {product.dimensions.height}</p>
                                <p>Depth: {product.dimensions.depth}</p>
                            </div>
                            :
                            ''
                    }
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
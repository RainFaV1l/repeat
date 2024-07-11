import { useContext } from 'react'
import styles from './Cart.module.css'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { AppContext } from '../context/AppContext'

export function Cart() {
    const [cartModal, setCartModal, cart, setCart] = useContext(AppContext)

    const deleteToCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id)
        setCart(updatedCart)
    }

    const increment = (product) => {
        if(product.quantity < 10) {
            const newCart = cart.map(item => {
                if(item.id === product.id) {
                    item.quantity++
                }
                return item
            })
            setCart(newCart)
        }
    }

    const decrement = (product) => {
        if(product.quantity > 1) {
            const newCart = cart.map(item => {
                if(item.id === product.id) {
                    item.quantity--
                }
                return item
            })
            setCart(newCart)
        }
    }

    return (
        <>
            <div className={styles.cart} onClick={(event) => {
                if(!event.target.closest('.cartModal__content')) {
                    setCartModal(false)
                }
            }}>
                <div className={`${styles.cartModal} cartModal__content`}>
                    <div className={styles.cartModalHeader}>
                        <h2>Корзина</h2>
                        <button onClick={() => setCartModal(false)}>
                            <XMarkIcon className="size-6 text-black"/>
                        </button>
                    </div>
                    <div className={styles.cartModalList}>
                        {
                            cart.map((item, index) => {
                                return (
                                    <div key={index} className={styles.cartModalItem}>
                                        <div className={styles.cartModalItemContent}>
                                            <h3>{item.title}</h3>
                                            <div className={styles.cartModalItemRow}>
                                                <div>
                                                    <span onClick={() => decrement(item)}>-</span>
                                                    <p>{item.quantity}</p>
                                                    <span onClick={() => increment(item)}>+</span>
                                                </div>
                                                <p>Цена: <span>{item.price}$</span></p>
                                            </div>
                                        </div>
                                        <button onClick={() => deleteToCart(item.id)}>
                                            <XMarkIcon className="size-6 text-white"/>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
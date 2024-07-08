import { useContext } from 'react'
import styles from './Cart.module.css'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { AppContext } from '../context/AppContext'

export function Cart() {
    const [cartModal, setCartModal] = useContext(AppContext)
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
                        <div className={styles.cartModalItem}>
                            <div className={styles.cartModalItemContent}>
                                <h3>Название товара</h3>
                                <p>Цена: <span>50$</span></p>
                            </div>
                            <button>
                                <XMarkIcon className="size-6 text-white"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
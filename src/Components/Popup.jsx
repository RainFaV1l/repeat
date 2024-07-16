import { useContext } from 'react'
import styles from './Popup.module.css'
import { AppContext } from '../context/AppContext'
import { XMarkIcon } from '@heroicons/react/16/solid'

export function Popup() {
    const [cartModal, setCartModal, cart, setCart, popup, setPopup] = useContext(AppContext)
    return (
        <>
            <div className={styles.popup}>
                <div className={styles.popupContent}>
                    <div className={styles.popupContentHeader}>
                        <h1>Уже успели пролистать <br/> все наши товары?</h1>
                        <p>Тогда скорей к нашим партнерам, у них еще больше товаров</p>
                    </div>
                    <span onClick={() => setPopup(false)} className={styles.popupContentClose}>
                        <XMarkIcon className='size-10 text-black cursor-pointer'/>
                    </span>
                    <button><a href="https://ya.ru">Перейти к партнерам</a></button>
                </div>
            </div>
        </>
    )
}
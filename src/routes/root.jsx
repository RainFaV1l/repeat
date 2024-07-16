import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../Components/HeaderComponent";
import { FooterComponent } from "../Components/FooterComponent";
import { useState } from 'react'
import { AppContext } from '../context/AppContext'
import { Cart } from "../Components/Cart";

export function Root() {

    const [cartModal, setCartModal] = useState(false)
    const [cart, setCart] = useState([])
    const [popup, setPopup] = useState(false)

    return (
        <>
            <AppContext.Provider value={[cartModal, setCartModal, cart, setCart, popup, setPopup]}>
                <div className="wrapper">
                    { cartModal ? <Cart/> : '' }
                    <HeaderComponent/>
                    <main className="main">
                        <div className="container">
                            <Outlet/>
                        </div>
                    </main>
                    <FooterComponent/>
                </div>
            </AppContext.Provider>
        </>
    )
}
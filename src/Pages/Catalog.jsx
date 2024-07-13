import { useEffect, useState } from "react"
import { PageHeaderComponent } from "../Components/PageHeaderComponent"
import styles from "./Catalog.module.css"
import { LoadingComponent } from "../Components/LoadingComponent"
import { Product } from "../Components/Product"

export function Catalog() {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        if(loading) {
            fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => {
                setProducts(json.products)
                setLoading(false)
            })
        }
        const filteredProducts = products.filter(product => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredProducts(filteredProducts)
    }, [loading, search])

    return (
        <>
            {/* Подключение компонента загрузки */}
            <LoadingComponent loading={loading}/>
            <div className={styles.products}>
                <PageHeaderComponent title="Каталог товаров" subtitle="Лучшие товары только у нас!"/>
                <div className={styles.filter}>
                    <input type="text" placeholder="Поиск товаров по названию" onChange={(event) => setSearch(event.target.value)}/>
                </div>
                <div className={styles.products__list}>
                    {
                        search ? 
                            filteredProducts.map((product) => {
                                return (
                                    <Product key={product.id} product={product}/>
                                )
                            })
                            :
                            products.map((product) => {
                                return (
                                    <Product key={product.id} product={product}/>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}
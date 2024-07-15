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
    const [sort, setSort] = useState('')

    useEffect(() => {
        if(loading) {
            fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(json => {
                setProducts(json.products)
                setLoading(false)
            })
        }
        let filteredProductsArray = products;
        if (search.length > 0) {
            filteredProductsArray = filteredProductsArray.filter(product =>
                product.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (sort !== '') {
            filteredProductsArray = filteredProductsArray.slice().sort((a, b) => {
                if (sort === 'asc') {
                    return a.price - b.price;
                } else if (sort === 'desc') {
                    return b.price - a.price;
                }
                return 0;
            });
        }
        if(search.length === 0 && sort === '') {
            filteredProductsArray = products
        }
        setFilteredProducts(filteredProductsArray);
    }, [loading, products, search, sort])

    return (
        <>
            {/* Подключение компонента загрузки */}
            <LoadingComponent loading={loading}/>
            <div className={styles.products}>
                <PageHeaderComponent title="Каталог товаров" subtitle="Лучшие товары только у нас!"/>
                <div className={styles.filter}>
                    <input type="text" placeholder="Поиск товаров по названию" onChange={(event) => setSearch(event.target.value)}/>
                    <select onChange={(event) => setSort(event.target.value)}>
                        <option value={''}>Сортировка по цене</option>
                        <option value={'asc'}>По возрастанию</option>
                        <option value={'desc'}>По убыванию</option>
                    </select>
                </div>
                <div className={styles.products__list}>
                    {
                        filteredProducts.map((product) => {
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
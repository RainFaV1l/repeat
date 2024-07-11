import { useParams } from 'react-router-dom'
import styles from './Product.module.css'
import { useEffect, useState } from 'react'
import { LoadingComponent } from '../Components/LoadingComponent'

export function Product() {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(!loading) return
        fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(json => {
            setProduct(json)
            setLoading(false)
        })
    }, [loading])

    return (
        <>
            {/* Подключение компонента загрузки */}
            <LoadingComponent loading={loading}/>
            <div className={styles.product}>
                <p>{product.id}</p>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <div>
                    {
                        product.images?.map((image, index) => {
                            return (
                                <img key={index} src={image} alt="Картинка"/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
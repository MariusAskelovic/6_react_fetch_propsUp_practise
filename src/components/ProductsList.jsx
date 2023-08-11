import { useEffect } from "react"
import { useState } from "react"
import SingleProduct from "./SingleProduct"
import './productList.scss'


const prodUrl = 'https://dummyjson.com/products'

function ProductsList() {
    const [prodArr, setProdArr] = useState([])

    useEffect(() => {
        fetch(prodUrl)
            .then(resp => resp.json())
            .then(dataBack => {
                setProdArr(dataBack.products);
            })
            .catch(console.warn)
    }, [])

    return (
        <div className="container">
            <ul className="cardsContainer">
                {prodArr.map((pObj) => (
                    <SingleProduct key={pObj.id} item={pObj} />
                ))}
            </ul>
        </div>
    )
}

export default ProductsList
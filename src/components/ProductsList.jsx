import { useEffect } from "react"
import { useState } from "react"
import SingleProduct from "./SingleProduct"


const prodUrl = 'https://dummyjson.com/products'

export default function ProductsList() {
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
        <div>
            <ul>
                {prodArr.map((pObj) => (
                    <SingleProduct key={pObj.id} item={pObj} />
                ))}
            </ul>
        </div>
    )
}
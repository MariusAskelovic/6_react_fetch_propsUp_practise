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

    function deleteProduct(idToDelete) {
        const newArr = prodArr.filter(pObj => pObj.id !== idToDelete)
        setProdArr(newArr);
    }

    return (
        <div className="container">
            <ul className="cardsContainer">
                {prodArr.map((pObj) => (
                    <SingleProduct key={pObj.id} item={pObj} onDelete={() => deleteProduct(pObj.id)} />
                ))}
            </ul>
        </div>
    )
}

export default ProductsList
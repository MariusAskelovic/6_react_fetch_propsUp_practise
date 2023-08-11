import { useEffect } from "react"
import { useState } from "react"

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

    // function handleProducts() {
    //     const newArr = [...prodArr]
    // }

    return (
        <div></div>
    )
}
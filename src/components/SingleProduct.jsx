export default function SingleProduct(props) {
    const { id, title, description, price, rating, stock, brand, category, thumbnail } = props.item
    return (
        <li>
            <img src={thumbnail} alt="" />
            <h2>{title}</h2>
            <h4>{category}</h4>
            <p>{description}</p> {/* show on hover */}
            <div>
                <p>{price}</p>
                <p>{rating}</p>
                <p>{stock}</p>
            </div>
            <div>
                <p>{id}</p>
                <p>{brand}</p>
            </div>
        </li>
    )
}
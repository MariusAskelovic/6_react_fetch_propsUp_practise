import './singleProduct.scss'

export default function SingleProduct(props) {
    const { id, title, description, price, rating, stock, brand, category, thumbnail } = props.item
    return (
        <li className='productCard'>
            <img src={thumbnail} alt="" />
            <div className='productText'>
                <h2>{title}</h2>
                <h4>{category}</h4>
                <p>{description}</p> {/* show on hover */}
                <div className='productBonusInfo'>
                    <div className='productLeftText'>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <p>{stock}</p>
                    </div>
                    <div className='productRightText'>
                        <p>{id}</p>
                        <p>{brand}</p>
                    </div>
                </div>
            </div>
        </li >
    )
}
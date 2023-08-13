import './singleProduct.scss'

export default function SingleProduct(props) {
    const { id, title, description, price, rating, stock, brand, category, thumbnail } = props.item
    return (
        <li className='productCard'>
            <div className='productPhotoBlock'>
                <img src={thumbnail} alt="{title}" className='productPhoto' />
                <h3 className='productTitle'>{title}</h3>
                <p className='productCategory'>{category}</p>
            </div>
            <div className='productText'>
                <div className='productBonusInfo'>
                    <div className='productLeftText'>
                        <p>{price}</p>
                        <p>{rating}</p>
                        <p>{stock}</p>
                    </div>
                    <div><button className='hidden' onClick={props.onDelete}>Delete</button></div>
                    <div className='productRightText'>
                        <p>{brand}</p>
                        <p>{id}</p>
                    </div>
                </div>
                <p className='productDescription'>{description}</p> {/* show on hover */}
            </div>
        </li >
    )
}
import './singleProduct.scss'

export default function SingleProduct(props) {
    const { id, title, description, price, rating, stock, brand, category, thumbnail } = props.item
    return (
        <li className='productCard'>
            <div className='productPhotoBlock'>
                <img src={thumbnail} alt="{title}" className='productPhoto' />
            </div>
            <div className='productText'>
                <h3>{title} <span className='productCategory'>{category}</span></h3>
                <p className='productDescription'>{description}</p> {/* show on hover */}
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
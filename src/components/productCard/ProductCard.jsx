import ProductCardStyle from "./ProductCad.module.scss"
import {Link} from 'react-router-dom'
const ProductCard = (props) => {
  const {
    id,
    number,
    title
  } = props.data

  return(
    <div
      className={ProductCardStyle.product_container}>
            <div
        className={ProductCardStyle.product_inn}>
        <h1 
        className={ProductCardStyle.number}>
        {number}
        </h1>
        
        <Link 
       to={`/industries/${title}`}
        className={ProductCardStyle.title}>
        {title} 
        </Link>
        
      </div>
    </div>


  )
}

export default ProductCard
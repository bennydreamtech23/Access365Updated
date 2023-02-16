import ProductCardStyle from "./ProductCad.module.scss"

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
        <h1 className={ProductCardStyle.number}>
        {number}
        </h1>
        
        <h3 className={ProductCardStyle.title}>
            {title} 
        </h3>
        
      </div>
    </div>


  )
}

export default ProductCard
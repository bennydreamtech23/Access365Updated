
import ProductCardStyle from "./ProductCad.module.scss"

const ProductCard = (props) =>{
  const {id, number, title} = props.data
  
return(
          <div
          className={ProductCardStyle.product_container}>
                
            <div 
         className={ProductCardStyle.product_inn}>
      
        <div className={ProductCardStyle.boxText}>
        <h2 className="text-center h5">
        {number}
        </h2>
        
        <p className="text-center lead text-dark">
            {title}
        </p>
        </div>
              </div>
                </div>


    )
}

export default ProductCard
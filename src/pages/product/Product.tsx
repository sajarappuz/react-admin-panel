import { singleProduct } from "../../data"
import "./product.scss"
import Single from "../../components/single/Single"

const Product = () => {

    //fetch data and send to component single
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  )
}

export default Product
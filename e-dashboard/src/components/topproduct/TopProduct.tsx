import { topProduct } from "../../data"
import "./topproduct.scss"

const TopProduct = () => {
  return (
    <div className="topproduct">
      <h2>Top 5 Products</h2>
      <div className="list">
        {topProduct.map((products) => (
          <div className="listItem" key={products.id}>
            <div className="product">
              <img src={products.img} alt="" />
              <div className="DetailTexts">
                <span className="productTitle">{products.title}</span>
              </div>
            </div>
            <hr />
            <span className="amount">
              Price: ${products.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopProduct

import { products } from "../../data"
import "./listproduct.scss"


const ListProduct = () => {
    return (
        <div className="listproduct">
            <h2>On Sale</h2>
            {products.map((item =>
                <div className="title">
                    <img src={item.img} alt="" />
                    {item.title}
                </div>
            ))}
            <div className="totalProducts">
                <span>Total Items : {products.length}</span>
            </div>
        </div>
    )
}

export default ListProduct

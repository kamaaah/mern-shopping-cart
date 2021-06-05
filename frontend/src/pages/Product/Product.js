import "./Product.css";
// import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="productpage">
      <div className="productpage__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D
            &ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="product name"
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product 1</p>
          <p>Price:$599.99</p>
          <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cumque sapiente dolor aliquam temporibus debitis eveniet.
          </p>
        </div>
      </div>
      <div className="productpage__right">
        <div className="right__info">
          <p>
            Price: <span>$599.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
          </p>
          <p>
            Qty:
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3">4</option>
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;

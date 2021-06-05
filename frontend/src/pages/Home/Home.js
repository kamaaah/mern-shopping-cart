import "./Home.css"
import Products from '../../components/Products/Products'
const Home = () => {
    return (
        <div className="homescreen">
          <h2 className="homescreen__title">Latest Products</h2>
          <div className="homescreen__products">
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
              <Products />
          </div>
        </div>
    )
}

export default Home

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page, size]);

  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);

  const addHandleCart = (selectedProduct) => {
    let newCart;
    const exists = cart.find((i) => i._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((i) => i._id !== exists._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    //**********************************************************8 */
    // let newCart = [];
    // const exists = cart.find(i => i._id === selectedProduct._id)
    // if (!exists) {
    //     selectedProduct.quantity = 1
    //     newCart = [...cart, selectedProduct]
    // } else {
    //     const rest = cart.filter(i => i._id !== selectedProduct._id)
    //     exists.quantity = exists.quantity + 1;
    //     newCart = [...rest, exists]
    // }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };
  return (
    <div className="shop-container">
      <div>
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              addHandleCart={addHandleCart}
            ></Product>
          ))}
        </div>
        <div className="pagination">
          {[...Array(pageCount).keys()].map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={page === number ? "selected" : ""}
            >
              {number}
            </button>
          ))}
          <select className="size" onChange={(e) => setSize(e.target.value)}>
            <option defaultValue="5">5</option>
            <option selected defaultValue="10">
              10
            </option>
            <option defaultValue="15">15</option>
            <option defaultValue="20">20</option>
          </select>
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button className="orders-review-btn">Review Orders</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;

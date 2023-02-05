import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CartScreen from "./Screens/CartScreen/CartScreen";
import ProductsScreen from "./Screens/ProductsScreen/ProductsScreen";
import Swal from "sweetalert2";
import { data } from "./components/backend/data.js";
import { ShoppingContext } from "./components/context/ShoppingContext";
function App() {
  const { products } = data;

  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartItems));
  }, [cartItems]);
  const AddToCart = (item) => {
    const productItem = cartItems.find((product) => product.id === item.id);
    if (productItem) {
      productItem.quantity += 1;
      setCartItems([...cartItems]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      item.quantity = 1;
      setCartItems([item, ...cartItems]);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item saved successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const increaseQuantity = (item) => {
    const productItem = cartItems.find((product) => product.id === item.id);
    if (productItem) {
      productItem.quantity += 1;
      setCartItems([...cartItems]);
    }
  };
  const decreaseQuantity = (item) => {
    const productItem = cartItems.find((product) => product.id === item.id);
    if (productItem) {
      productItem.quantity -= 1;
      if (productItem.quantity === 0) {
        setCartItems(cartItems.filter((product) => product.id !== item.id));
      } else {
        setCartItems([...cartItems]);
      }
    }
  };
  const deleteItem = (item) => {
    setCartItems(cartItems.filter((product) => product.id !== item.id));
  };

  return (
    <ShoppingContext.Provider
      value={{
        products,
        AddToCart,
        increaseQuantity,
        decreaseQuantity,
        deleteItem,
        cartItems,
      }}
    >
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<ProductsScreen />}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </ShoppingContext.Provider>
  );
}

export default App;

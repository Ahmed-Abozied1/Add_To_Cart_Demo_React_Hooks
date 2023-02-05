import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import CartScreen from "./Screens/CartScreen/CartScreen";
import ProductsScreen from "./Screens/ProductsScreen/ProductsScreen";
import Swal from "sweetalert2";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Camera Max",
      price: "1200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 2,
      name: "Camera Bro",
      price: "2000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 3,
      name: "Camera Z",
      price: "3000",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 4,
      name: "Camera CA",
      price: "1500",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 5,
      name: "Camera XS",
      price: "2300",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 6,
      name: "Camera Bx",
      price: "2600",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 7,
      name: "Camera Md",
      price: "1700",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
    {
      id: 8,
      name: "Camera Ales",
      price: "1200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMci2C4N-nsOaHyUutBGhTjPgKu9uxSBw58kftqgKFr2kZJ6XsoGupI4xme_10hpm4sbo&usqp=CAU",
    },
  ]);
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
    <BrowserRouter>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={<ProductsScreen products={products} AddToCart={AddToCart} />}
        ></Route>
        <Route
          path="/cart"
          element={
            <CartScreen
              cartItems={cartItems}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              deleteItem={deleteItem}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

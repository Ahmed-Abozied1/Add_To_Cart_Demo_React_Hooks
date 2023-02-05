import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from "./components/Header/Header";
import ProductsScreen from "./Screens/ProductsScreen/ProductsScreen";

function App() {
  return (
    <BrowserRouter>

        <Header/>
<Routes>
  <Route path="/" element={<ProductsScreen />}></Route>
  {/* <Route path="/" element={<ProductsScreen/>}></Route> */}
</Routes>
    </BrowserRouter>
   
  );
}

export default App;

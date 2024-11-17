import "./App.css";
import AccountDropdown from "./components/AccountDropdown";
import Categories from "./components/Categories";
import MyBasketDrawer from "./components/MyBasketDrawer";
import Navbar from "./components/Navbar";
import RouterConfig from "./config/RouterConfig";
import Container from "./container/Container";

function App() {
  return (
    <div>
      <MyBasketDrawer />
      <Navbar />
      <Categories />
      <Container>
        <RouterConfig />
      </Container>
    </div>
  );
}

export default App;

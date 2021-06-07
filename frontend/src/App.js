import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home/Home";
import ProductScreen from "./pages/ProductScreen/ProductScreen";
import Cart from "./pages/Cart/Cart";

/*  Components */
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

const App = () => {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;

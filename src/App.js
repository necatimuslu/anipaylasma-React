import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./screens/Home";
import CreateScreen from "./screens/CreateScreen";
import UpdateScreen from "./screens/UpdateScreen";
import UserLogin from "./screens/UserLogin";
import UserRegister from "./screens/UserRegister";
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/creator" component={CreateScreen} exact />
        <Route path="/update/:id" component={UpdateScreen} exact />
        <Route path="/login" component={UserLogin} exact />
        <Route path="/register" component={UserRegister} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;

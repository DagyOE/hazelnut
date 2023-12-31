import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import ToDos from "./pages/ToDos.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import PrivateRouter from "./router/PrivateRouter.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route
            path={"/home"}
            element={
              <PrivateRouter>
                <Layout />
              </PrivateRouter>
            }
          >
            <Route index element={<Home />} />
            <Route path={"to-do-s"} element={<ToDos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config/redux";
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./config/router/Route";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterComponent />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

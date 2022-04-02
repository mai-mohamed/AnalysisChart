import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./config/redux";
import App from "./modules/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

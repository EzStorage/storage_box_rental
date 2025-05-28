import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./router";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;

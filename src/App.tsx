import { Provider } from "react-redux";
import { store } from "./app/store";
import { RouterProvider } from "react-router";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import "./App.css";
import router from "./RouterFile";

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <RouterProvider router={router} />
            </ThemeProvider>
        </Provider>
    );
};

export default App;

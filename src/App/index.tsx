import { BrowserRouter } from "react-router-dom";
import { SignInContextProvider } from "../infra/SignInContext";
import ThemeContextProvider from "./ThemeContextProvider";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { store } from "../core";
import Layout from "../ui/Layout";

export default function App() {
  return (
    <SignInContextProvider>
      <Provider store={store}>
        <ThemeContextProvider>
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ThemeContextProvider>
      </Provider>
    </SignInContextProvider>
  );
}

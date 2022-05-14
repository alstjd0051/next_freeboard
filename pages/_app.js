import Footer from "../src/components/layout/footer/Footer.container";
import Header from "../src/components/layout/header/Header.container";
import "../styles/globals.css";
import store from "../src/redux/store";
import { Provider } from "react-redux";

// store.subscribe(() => {
// });
// // console.log(store);
// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Footer />
    </>
  );
}

export default MyApp;

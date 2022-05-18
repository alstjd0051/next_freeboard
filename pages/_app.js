import Header from "../src/components/layout/header/Header.container";
import "../styles/globals.css";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../src/lib/firebase";
import LoginPage from "./login";
import SideBarUI from "../src/components/layout/sidebar/Sidebar.presenter";

// store.subscribe(() => {
// });
// // console.log(store);
// store.dispatch(addTodo("할일"));
// store.dispatch(completeTodo(0));
// store.dispatch(showComplete());

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <ChakraProvider>
        <Center h="100vh">
          <Spinner size="xl" />
        </Center>
      </ChakraProvider>
    );
  }

  if (!user) {
    <ChakraProvider>
      <LoginPage />;
    </ChakraProvider>;
  }

  return (
    <>
      <ChakraProvider>
        <Header />
        <SideBarUI />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;

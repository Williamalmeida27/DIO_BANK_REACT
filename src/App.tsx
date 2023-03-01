import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Components/AppContext";
import { Layout } from "./Components/Layout";
import MainRoutes from "./routes";


function App() {
  return ( //Existe hierarquia nor react, do primeiro para o último
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />                       
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./Components/AppContext";
import { Layout } from "./Components/Layout";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfor";
import Home from "./pages/Home";


function App() {
  return ( //Existe hierarquia nor react, do primeiro para o último
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/Conta/:id" element={<Conta />} />
              <Route path='/infoconta' element={<ContaInfo />} />

            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;

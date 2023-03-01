import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfor";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>

          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Conta/:id" element={<Conta />} />
            <Route path='/infoconta' element={<ContaInfo />} />

          </Routes>

        </Layout>
      </ChakraProvider>

    </BrowserRouter>
  );
}

export default App;

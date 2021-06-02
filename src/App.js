import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CalculatorContainer from "./containers/CalculatorContainer";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <div style={{ height: "80vh", borderRadius: "5px" }}>
        <CalculatorContainer />
      </div>

      <Footer />
    </ChakraProvider>
  );
}

export default App;

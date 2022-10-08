import './App.css';
import Router from './app/Router/Router';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router/>
      </ChakraProvider>
    </div>
  );
}

export default App;

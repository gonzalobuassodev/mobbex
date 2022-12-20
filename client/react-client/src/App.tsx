import { Checkout } from './components/Checkout';
import { ListCheckout } from './components/ListCheckout';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Checkout />
      <ListCheckout />
    </>
  );
};

export default App;

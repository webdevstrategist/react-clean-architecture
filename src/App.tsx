import { Payment } from "./components/Payment";
import { PaymentStrategy, roundUpToNearestHundreds } from "./models/PaymentStrategy";

function App() {
  return (
    <>
      <Payment amount={20000} strategy={new PaymentStrategy("¥", roundUpToNearestHundreds)} />
      {/* <Payment amount={100.96} strategy={new PaymentStrategy("$", roundUpToNearestInteger)} /> */}
    </>
  );
}

export default App;

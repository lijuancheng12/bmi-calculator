import { BmiCalculate } from "./components/Bmi/Bmi";
import { Overlay } from "./components/Overlay/Overlay";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1>Räkna ut ditt BMI</h1>
      <BmiCalculate />
      <Overlay />
    </div>
  );
}

export default App;

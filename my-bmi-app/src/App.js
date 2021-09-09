import { BmiCalculate } from "./components/Bmi";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1>Räkna ut ditt BMI</h1>
      <BmiCalculate />
    </div>
  );
}

export default App;

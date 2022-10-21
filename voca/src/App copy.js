import logo from './logo.svg';
import './App.css';
import Hello from './Component/Hello';
import Welcome from './Component/Welcome';
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <Hello age={30}></Hello>
      <Welcome></Welcome>
      <div className={styles.box}>App files</div>
    </div >
  );
}

export default App;

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.AppContainer}>
      <h1 className={styles.Title}>天気予報</h1>
      <div className={styles.Box}>
        <div>晴れのち曇り</div>
        <div>最高気温：20度</div>
        <div>最低気温：8度</div>
      </div>
    </div>
  );
}

export default App;

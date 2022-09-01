import Header from "./component/Header";
import styles from "./css/header.module.css";

function App() {
  return (
    <>
      <div className={styles.wrap}>
        <Header/>
      </div>
    </>
  );
}

export default App;

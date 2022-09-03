import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import styles from "./css/header.module.css";
import Main from "./routes/Main";

function App() {
  return (
    <>
      <div className={styles.wrap}>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element = {<Main/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

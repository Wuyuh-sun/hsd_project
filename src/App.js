import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./component/Header";
import styles from "./css/header.module.css";
import Main from "./routes/Main";
import Menu from "./routes/Menu";

function App() {
  return (
    <>
      <div className={styles.wrap}>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element = {<Main/>}></Route>
              <Route path="/menu" element = {<Menu/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

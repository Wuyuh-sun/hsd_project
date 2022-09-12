import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import MainFooter from './component/Main/MainFooter';
import styles from "./css/header.module.css";
import Join from './routes/Join';
import Login from './routes/Login';
import Main from "./routes/Main";

function App() {
  return (
    <>
      <div className={styles.wrap}>
        <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element = {<Main/>}></Route>
              <Route path="/login" element = {<Login/>}></Route>
              <Route path="/join/join_step1" element = {<Join/>}></Route>
          </Routes>
          <MainFooter/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

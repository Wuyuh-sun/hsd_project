import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import MainFooter from './component/Main/MainFooter';
import styles from "./css/header.module.css";
import Join1 from './routes/Join1';
import Join2 from './routes/Join2';
import Join3 from './routes/Join3';
import Join4 from './routes/Join4';
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
              <Route path="/join/join_step1" element = {<Join1/>}></Route>
              <Route path="/join/join_step2" element = {<Join2/>}></Route>
              <Route path="/join/join_step3" element = {<Join3/>}></Route>
              <Route path="/join/join_step4" element = {<Join4/>}></Route>
          </Routes>
          <MainFooter/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

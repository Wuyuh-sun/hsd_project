import Mainjumbo from "../component/Main/MainJumbo";
import Content1 from "../component/Main/Content1";
import Content2 from "../component/Main/Content2";
import Content3 from "../component/Main/Content3";
import Content4 from "../component/Main/Content4";
import Content5 from "../component/Main/Content5";
import MainFooter from "../component/Main/MainFooter";
import Header from "../component/Header";
import { useEffect } from "react";

export default function Main() {
  const mainStyle = {
    width: "1170px",
    height: "3764px",
    display: "flex",
    flexDirection: "column",
  };
  useEffect(()=>{
    document.body.style.backgroundColor = "white";
  },[])
  
  return (
    <>
      <Header />
      <div style={mainStyle}>
        <Mainjumbo />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <Content5 />
      </div>
      <MainFooter />
    </>
  );
}

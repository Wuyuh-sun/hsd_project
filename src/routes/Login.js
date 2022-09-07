import { useEffect } from "react";
import Header from "../component/Header";
import LoginWrap from "../component/Login/LoginWrap";
import MainFooter from "../component/Main/MainFooter";

export default function Login(){
  useEffect(()=>{
    document.body.style.backgroundColor = "#eeecec";
  },[])
  return(
    <>
      <Header/>
      <LoginWrap/>
      <MainFooter/>
    </>
  )
}
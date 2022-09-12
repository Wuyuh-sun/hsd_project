import { useEffect } from "react";
import LoginWrap from "../component/Login/LoginWrap";

export default function Login() {
  useEffect(() => {
    document.body.style.backgroundColor = "#eeecec";
    // fetch("http://localhost:5000/test")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data[0].text);
    //   });
  }, []);
  return (
    <>
      <LoginWrap />
    </>
  );
}

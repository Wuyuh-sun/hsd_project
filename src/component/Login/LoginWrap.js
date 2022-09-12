import { useEffect, useRef } from "react";
import styles from "../../css/LoginCSS/LoginWrap.module.css";
import LoginBox1 from "./LoginBox1";
import LoginBox2 from "./LoginBox2";

export default function LoginWrap() {
  const LoginWrap = useRef();

  useEffect(() => {
    const headerLinks = LoginWrap.current.parentNode.childNodes[0];
    headerLinks.childNodes[3].style.color = "black";
    headerLinks.childNodes[2].style.color = "black";
    headerLinks.childNodes[1].childNodes[0].style.backgroundPosition =
      "-56px 0";
    headerLinks.childNodes[0].childNodes[0].style.backgroundPosition =
      "-14px 0";
  }, []);

  return (
    <>
      <div ref={LoginWrap} className={styles.LoginWrap}>
        <div className={styles.LoginWrap_center}>
          <LoginBox1 />
          <LoginBox2 />
        </div>
      </div>
    </>
  );
}

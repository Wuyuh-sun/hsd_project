import { useEffect, useRef } from "react";
import styles from "../../css/JoinCSS/Join2Wrap.module.css";
import JoinBox1 from "./JoinBox1";
import JoinBox2 from "./JoinBox2";
export default function Joinwrap() {
  const JoinWrap = useRef();

  useEffect(() => {
    const headerLinks = JoinWrap.current.parentNode.childNodes[0];
    headerLinks.childNodes[3].style.color = "black";
    headerLinks.childNodes[2].style.color = "black";
    headerLinks.childNodes[1].childNodes[0].style.backgroundPosition =
      "-56px 0";
    headerLinks.childNodes[0].childNodes[0].style.backgroundPosition =
      "-14px 0";
  }, []);

  return (
    <>
      <div ref={JoinWrap} className={styles.JoinWrap}>
        <div className={styles.JoinWrap_center}>
        <h1 className={styles.h1_text1}>회원가입</h1>
          <div className={styles.JoinWrap_contentBox1}>
            <JoinBox1/>
            <JoinBox2/>
          </div>
        </div>
      </div>
    </>
  );
}

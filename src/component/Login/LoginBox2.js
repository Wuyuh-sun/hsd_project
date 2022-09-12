import { Link } from "react-router-dom";
import styles from "../../css/LoginCSS/LoginWrap.module.css";

export default function LoginBox2(){
  return(
    <>
    <div className={styles.box2}>
      <div className={styles.box2_img}></div>
      <div className={styles.join_intro}>
        <div>한솥 회원이 아니신가요?</div>
        <br />
        <div>회원이 되시면 한솥 도시락의 다양한 정보와</div>
        <div>이벤트를 만나보실 수 있습니다.</div>
        <Link to="/join/join_step1">회원가입</Link>
      </div>
    </div>
    </>
  )
}
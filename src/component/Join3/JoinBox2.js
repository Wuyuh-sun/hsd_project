import styles from "../../css/JoinCSS/Join2Wrap.module.css";
import { Link } from "react-router-dom";

export default function JoinBox2() {
  return (
    <>
      <div className={styles.Joinbox2}>
        <Link to="/join/join_step3">
          <div className={styles.JoinBox2_item}>
            <div className={styles.JoinBox2_item_img}>
              휴대폰 인증
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

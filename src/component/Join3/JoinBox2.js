import styles from "../../css/JoinCSS/Join3Wrap.module.css";
import { Link } from "react-router-dom";

export default function JoinBox2() {
  return (
    <>
      <div className={styles.Joinbox2}>
        <div className={styles.allcheck_area}>
          <Link to="/join/join_step4">
            <button>다음</button>
          </Link>
        </div>
      </div>
    </>
  );
}

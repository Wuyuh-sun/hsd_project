import styles from "../../css/LoginCSS/LoginWrap.module.css";

export default function LoginBox1() {
  return (
    <>
      <div className={styles.box1}>
        <div className={styles.loginFormat}>
          <h2 className={styles.loginHeader}>로그인</h2>
          <form className={styles.loginForm}>
            <input type="text" placeholder="아이디" className={styles.loginForm_id}/>
            <input type="password" placeholder="비밀번호" className={styles.loginForm_pw}/>
            <div className={styles.loginForm_checkarea}>
              <input type="checkbox" name="" id="" className={styles.checkBox}/>
              <div className={styles.idSave}>아이디 저장</div>
              <div className={styles.id_Find}>아이디/비밀번호찾기</div>
            </div>
            <input type="submit" value="로그인" className={styles.loginForm_submit}/>
          </form>
        </div>
      </div>
    </>
  );
}

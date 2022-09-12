import styles from "../../css/JoinCSS/JoinWrap.module.css";
export default function JoinBox1() {

  return (
    <>
      <div className={styles.Joinbox1}>
        <h3>약관동의</h3>
        <div>회원가입을 위해서 <em>이용약관 및</em></div>
        <div><em>개인정보 수집 및 이용</em>에 대한</div>
        <div>안내를 읽고 <em>동의</em>해주세요</div>
      </div>
    </>
  );
}

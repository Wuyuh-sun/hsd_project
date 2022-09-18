import styles from "../../css/JoinCSS/Join2Wrap.module.css";
export default function JoinBox1() {
  return (
    <>
      <div className={styles.Joinbox1}>
        <h3>본인인증</h3>
        <div>
          휴대폰 인증을 통하여 <em>가입 확인 및</em>
        </div>
        <div>
          <em>본인인증</em>을 진행해주세요.
        </div>
        <br />
        <p>
          <span>입력하신 정보는 해당 인증기관에서</span>
        </p>
        <p>
          <span>직접 수집하며, 인증 이외의 용도로</span>
        </p>
        <p>
          <span>이용 또는 저장하지 않습니다.</span>
        </p>
      </div>
    </>
  );
}

import styles from "../../css/MainCSS/MainFooter.module.css";
import { Link } from "react-router-dom";

export default function MainFooter() {
  
  return (
    <>
      <div className={styles.MainFooter_Wrap}>
        <div className={styles.MainFooter_Wrap_Center}>
          <div className={styles.MainFooter_Menu}>
            <Link to="#"><span>인재채용</span></Link>
            <Link to="#"><span>협력업체등록</span></Link>
            <Link to="#"><span>공지사항</span></Link>
            <Link to="#"><span>고객 센터</span></Link>
            <Link to="#"><span>개인정보처리방침</span></Link>
            <Link to="#"><span>이용약관</span></Link>
          </div>
          <div  className={styles.MainFooter_Content}>
            <span>대표이사 이영덕, 이하림</span>
            <span>사업자등록번호 214-81-96569</span>
            <span>서울시 강남구 강남대로 318(역삼동) 타워837빌딩 8,9층</span>
            <span>T. 02-585-1114</span>
            <span>F. 02-598-1116</span>
            <br />
            <span>E. webmaster@hsd.co.kr</span>
            <span>한솥 도시락 고객센터 02-585-1114</span>
            <span>전국창업설명회 02-585-1114</span>
            <span>단체주문 1644-3288</span>
            <br />
            <br />
            <span>COPYRIGHT©㈜한솥. ALL RIGHTS RESERVED.</span>
            <br />
            <br />
            <br />
            <Link to="#"><span style={{width:"40px", height:"40px"}}><div style={{backgroundPosition:"0 0"}}></div></span></Link> 
            <Link to="#"><span style={{width:"40px", height:"40px"}}><div style={{backgroundPosition:"-40px 0"}}></div></span></Link>
          </div>
          <img src="../../img/logo_webaward2017.png"/>
        </div>
      </div>
    </>
  );
}

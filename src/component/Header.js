import styles from "../css/header.module.css";
import h1Img from "../img/h1_logo.png";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className={styles.header_navi}>
        <Link to="/"><img src={h1Img} alt="logo" /></Link>
        <ul className={styles.dp}>
          <li id="brand">
            <Link to="/brand">BRAND</Link>
          </li>
          <li id="esg">
            <Link to="/esg">ESG</Link>
          </li>
          <li id="menu">
            <Link to="/menu">MENU</Link>
          </li>
          <li id="store">
            <Link to="/store">STORE</Link>
          </li>
          <li id="event">
            <Link to="/event">EVENT</Link>
          </li>
          <li id="franchise">
            <Link to="/franchise">FRANCHISE</Link>
          </li>
          <li id="hansot">
            <Link to="/hansot">HANSOT</Link>
          </li>
          <div className={styles.navDetail}>
            <ul className={styles.navDetailul} id="navDetailul">
              {console.log( document.getElementById("navDetailul"))}
              <ul>
                <li>브랜드 스토리</li>
                <li>브랜드 철학</li>
                <li>브랜드 유산</li>
              </ul>
              <ul>
                <li>ESG경영이란?</li>
                <li>
                  환경보호
                  <br />
                  (Environment)
                </li>
                <li>
                  사회공헌
                  <br />
                  (Social)
                </li>
                <li>
                  윤리경연
                  <br />
                  (Govermance)
                </li>
                <li>
                  세계 40대
                  <br />
                  브랜드 선정
                </li>
              </ul>
              <ul>
                <li>전체 메뉴</li>
                <li>식재료 이야기</li>
                <li>페루찬차마요커피</li>
                <li>단체 주문</li>
              </ul>
              <ul>
                <li>주변점포찾기</li>
              </ul>
              <ul>
                <li>이 달의 이벤트</li>
                <li>신규점 오픈 이벤트</li>
              </ul>
              <ul>
                <li>Why 한솥 가맹점</li>
                <li>성공수기</li>
                <br />
                <li>창업개설절차</li>
                <li>예상 창업 비용</li>
                <br />
                <li>창업 문의</li>
                <li>창업설명회 일정•신청</li>
              </ul>
              <ul>
                <li>한솥의 약속</li>
                <li>한솥의 비전</li>
                <li>연혁&수상</li>
                <li>한솥 NEWS</li>
                <li>오시는 길</li>
                <li>고객 센터</li>
                <br />
                <li>인재채용</li>
              </ul>
            </ul>
          </div>
        </ul>
      </header>
    </>
  );
}

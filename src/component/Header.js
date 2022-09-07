import styles from "../css/header.module.css";
import h1Img from "../img/h1_logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* 링크 */}
      <div className={styles.LinkWrap}>
        <a href="https://www.facebook.com/hansotOfficial/?ref=ts&fref=ts" target="_blank">
          <span className={styles.FacebookLink}></span>
        </a>
        <a href="https://www.instagram.com/hansot_official/" target="_blank">
          <span className={styles.InstaLink}></span>
        </a>
        <Link to="/join/join_step1">회원가입</Link>
        <Link to="/login">로그인</Link>
      </div>
      {/* 헤더 내비게이션 */}
      <header className={styles.header_navi}>
        <Link to="/">
          <img src={h1Img} alt="logo" />
        </Link>
        <ul className={styles.dp}>
          <li id="brand">
            <Link to="#">BRAND</Link>
          </li>
          <li id="esg">
            <Link to="#">ESG</Link>
          </li>
          <li id="menu">
            <Link to="#">MENU</Link>
          </li>
          <li id="store">
            <Link to="#">STORE</Link>
          </li>
          <li id="event">
            <Link to="#">EVENT</Link>
          </li>
          <li id="franchise">
            <Link to="#">FRANCHISE</Link>
          </li>
          <li id="hansot">
            <Link to="#">HANSOT</Link>
          </li>
          <div className={styles.navDetail}>
            <ul className={styles.navDetailul} id="navDetailul">
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].blur();
                    });
                  } else {
                    e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="#">브랜드 스토리</Link>
                </li>
                <li>
                  <Link to="#">브랜드 철학</Link>
                </li>
                <li>
                  <Link to="#">브랜드 유산</Link>
                </li>
              </ul>
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].blur();
                    });
                  } else {
                    e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="#">ESG경영이란?</Link>
                </li>
                <li>
                  <Link to="#">
                    환경보호
                    <br />
                    (Environment)
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    사회공헌
                    <br />
                    (Social)
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    윤리경연
                    <br />
                    (Govermance)
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    세계 40대
                    <br />
                    브랜드 선정
                  </Link>
                </li>
              </ul>
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[2].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="/menu/menu_list">전체 메뉴</Link>
                </li>
                <li>
                  <Link to="#">식재료 이야기</Link>
                </li>
                <li>
                  <Link to="#">페루찬차마요커피</Link>
                </li>
                <li>
                  <Link to="#">단체 주문</Link>
                </li>
              </ul>
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="#">주변점포찾기</Link>
                </li>
              </ul>
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[4].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[4].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="#">이 달의 이벤트</Link>
                </li>
                <li>
                  <Link to="#">신규점 오픈 이벤트</Link>
                </li>
              </ul>
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="#">Why 한솥 가맹점</Link>
                </li>
                <li>
                  <Link to="#">성공수기</Link>
                </li>
                <br />
                <li>
                  <Link to="#">창업개설절차</Link>
                </li>
                <li>
                  <Link to="#">예상 창업 비용</Link>
                </li>
                <br />
                <li>
                  <Link to="#">창업 문의</Link>
                </li>
                <li>
                  <Link to="#">창업설명회 일정•신청</Link>
                </li>
              </ul>
              <ul
                onMouseOver={(e) => {
                  if (e.target.nodeName === "UL") {
                    e.target.parentNode.parentNode.parentNode.childNodes[6].childNodes[0].focus();
                    e.target.addEventListener("mouseleave", (e) => {
                      e.target.parentNode.parentNode.parentNode.childNodes[6].childNodes[0].blur();
                    });
                  }
                }}
              >
                <li>
                  <Link to="#">한솥의 약속</Link>
                </li>
                <li>
                  <Link to="#">한솥의 비전</Link>
                </li>
                <li>
                  <Link to="#">연혁&수상</Link>
                </li>
                <li>
                  <Link to="#">한솥 NEWS</Link>
                </li>
                <li>
                  <Link to="#">오시는 길</Link>
                </li>
                <li>
                  <Link to="#">고객 센터</Link>
                </li>
                <br />
                <li>
                  <Link to="#">인재채용</Link>
                </li>
              </ul>
            </ul>
          </div>
        </ul>
      </header>
    </>
  );
}

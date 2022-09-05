import styles from "../../css/MainCSS/jumbo.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Mainjumbo() {
  // console.log("load");
  const i = useRef(0);
  const NAVICOLOR_YELLOW = useRef("#f6ca00");
  const NAVICOLOR_GRAY = useRef("#cfc6bc");

  const jumboLiArr = [0, 1, 2, 3, 4, 5, 6];
  const [jumboposition, setJumboposition] = useState({
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
    5: 500,
    6: 600,
  });
  const playState = useRef(null);

  const [playNavi, setPlayNavi] = useState([
    NAVICOLOR_YELLOW.current,
    NAVICOLOR_GRAY.current,
    NAVICOLOR_GRAY.current,
    NAVICOLOR_GRAY.current,
    NAVICOLOR_GRAY.current,
    NAVICOLOR_GRAY.current,
    NAVICOLOR_GRAY.current,
  ]);
  playNavi[i.current]=NAVICOLOR_YELLOW.current;

  function play() {
    playState.current = setInterval(()=>{
        if(i.current < 6){
          i.current++;
          setJumboposition({
            0: 0-i.current*100,
            1: 100-i.current*100,
            2: 200-i.current*100,
            3: 300-i.current*100,
            4: 400-i.current*100,
            5: 500-i.current*100,
            6: 600-i.current*100,
          });
          setPlayNavi([
            NAVICOLOR_GRAY.current,
            NAVICOLOR_GRAY.current,
            NAVICOLOR_GRAY.current,
            NAVICOLOR_GRAY.current,
            NAVICOLOR_GRAY.current,
            NAVICOLOR_GRAY.current,
            NAVICOLOR_GRAY.current,
          ]);
        } else{
          i.current = -1;
        }
      },5500)
  }

  function playBtn(e){
    if(playState.current == null){
      play();
      e.target.style.backgroundPosition = "0px 0";
    } else{
      clearInterval(playState.current);
      playState.current = null;
      console.log(i.current);
      e.target.style.backgroundPosition = "-30px 0";
    }
  }

  function jumboNaviClick(e){
    console.log("click", e.target.value);
    i.current = e.target.value;
    setJumboposition({
      0: 0-i.current*100,
      1: 100-i.current*100,
      2: 200-i.current*100,
      3: 300-i.current*100,
      4: 400-i.current*100,
      5: 500-i.current*100,
      6: 600-i.current*100,
    });
    setPlayNavi([
      NAVICOLOR_GRAY.current,
      NAVICOLOR_GRAY.current,
      NAVICOLOR_GRAY.current,
      NAVICOLOR_GRAY.current,
      NAVICOLOR_GRAY.current,
      NAVICOLOR_GRAY.current,
      NAVICOLOR_GRAY.current,
    ]);
  }

  useEffect(() => {
    play();
  }, []);

  return (
    <>
      <ul className={styles.jumboUL}>
        {jumboLiArr.map((item, i) => {
          return (
            <Link to={"/" + item} key={i}>
              <li style={{ left: jumboposition[i] + "%" }}></li>
            </Link>
          );
        })}
      </ul>
      <ul className={styles.jumboController}>
        {/* 컨트롤바 */}
        <div>
          {jumboLiArr.map((item, i) => {
            return <li value={item} key={i} style={{ backgroundColor: playNavi[i] }} onClick={jumboNaviClick}></li>;
          })}
          {/* 재생버튼 */}
          <div
            className={styles.jumboPlayBtn}
            style={{ backgroundPosition: "0 0" }}
            onClick={playBtn}>
          </div>
        </div>
        
      </ul>
    </>
  );
}

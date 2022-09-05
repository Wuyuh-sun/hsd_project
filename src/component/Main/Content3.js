import styles from "../../css/MainCSS/content3.module.css";
import { Link } from "react-router-dom";

export default function Content3() {
  const infoHeadText1 = "든든한 솥밥을 위해";
  const infoHeadText2 = "한솥이 지키고,";
  const infoHeadText3 = "키워가는 것들";

  const infoText1 = "한솥은 '따끈한 도시락으로 지역사회에 공헌한다'라는";
  const infoText2 = "기업이념 아래, 고객 이익을 최우선으로 하며 엄선된";
  const infoText3 = "좋은 식재료만 사용하는 대한민국 외식종합기업 시장을";
  const infoText4 = "리드하는 글로벌 종합외식기업 입니다.";

  return (
    <>
      <div className={styles.Content3_Wrap}>
        <div className={styles.Content3_Wrap_Img}></div>
        <div className={styles.Content3_Wrap_Content}>
          <div className={styles.Content3ItemBox_wrap}>
            <h2>{infoHeadText1}</h2>
            <h2>{infoHeadText2}</h2>
            <h2>{infoHeadText3}</h2>
            <h2></h2>
            <div>{infoText1}</div>
            <div>{infoText2}</div>
            <div>{infoText3}</div>
            <div>{infoText4}</div>
            <Link to="#">
                <div className={styles.brandLink}>브랜드 철학</div>
              </Link>
          </div>
        </div>
      </div>
    </>
  );
}

import styles from "../../css/MainCSS/content4.module.css";
import { Link } from "react-router-dom";

export default function Content4() {
  const infoHeadText1 = "식재료 앞에서는";
  const infoHeadText2 = "한없이";
  const infoHeadText3 = "까탈스럽습니다";

  const infoText1 = "맑고 깨끗한 자연 환경속에서 재배된 식재료가";
  const infoText2 = "아니면 한솥이 될 수 없습니다.";
  const infoText3 = "모든 식재료는 고객분들이 안심하고 드실 수 있도록";
  const infoText4 = "엄격한 기준 아래 선별됩니다.";

  const itemText = "식재료이야기";
  return (
    <>
      <div className={styles.Content4_Wrap}>
        <Link to="#">
          <div className={styles.Content4_Wrap_Content_img}></div>
          <div className={styles.Content4_Wrap_Content_Back}></div>
          
          <div className={styles.Content4_Wrap_Content}>
            <div className={styles.Content4ItemBox_wrap}>
              <h2>{infoHeadText1}</h2>
              <h2>{infoHeadText2}</h2>
              <h2>{infoHeadText3}</h2>
              <h2></h2>
              <div>{infoText1}</div>
              <div>{infoText2}</div>
              <div>{infoText3}</div>
              <div>{infoText4}</div>
              <div className={styles.Content4ItemBox_footer_textBox_hoverImg}>
                {itemText}
              </div>
            </div>
          </div>
          <div className={styles.Content4_Wrap_Content_Front}></div>
        </Link>
      </div>
    </>
  );
}

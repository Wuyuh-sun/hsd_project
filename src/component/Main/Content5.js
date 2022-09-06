import styles from "../../css/MainCSS/content5.module.css";
import { Link } from "react-router-dom";
import Content5Item from "./Content5_item";

export default function Content5() {
  const item1Text = "한솥의 약속";
  const item2Text = "온라인 이벤트";
  const item3Text = "한솥 NEWS";

  const item1Img = "../../img/MainImg/more_hansot.jpg";
  const item2Img = "../../img/MainImg/more_event.jpg";
  const item3Img = "../../img/MainImg/more_news.jpg";
  
  return (
    <>
      <div className={styles.Content5_Wrap}>
        <div className={styles.Content5_Wrap_Info}>더 많은 이야기</div>
        <ul className={styles.Content5_Wrap_Ul}>
          <Link to="#"><li><Content5Item itemText={item1Text} itemImg={item1Img}/></li></Link>
          <Link to="#"><li><Content5Item itemText={item2Text} itemImg={item2Img}/></li></Link>
          <Link to="#"><li><Content5Item itemText={item3Text} itemImg={item3Img}/></li></Link>
        </ul>
      </div>
    </>
  );
}

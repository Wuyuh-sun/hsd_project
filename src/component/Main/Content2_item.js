import { Link } from "react-router-dom";
import styles from "../../css/MainCSS/content2.module.css";

export default function Content2Item(props) {
  return (
    <>
      <Link to={`${props.link}`}>
        <div className={styles.Content2ItemBox}>
          <div className={styles.Content2ItemBox_img}>
            <img src={props.itemimg} />
          </div>
          <div className={styles.Content2ItemBox_footer}>
            <div className={styles.Content2ItemBox_footer_textBox}>
              <div>{props.itemText1}</div>
              <div>{props.itemText2}</div>
              <div className={styles.Content2ItemBox_footer_textBox_hoverImg}>
                {props.itemText3}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ContentItemBoxBarBack}></div>
        <div className={styles.ContentItemBoxBarFront}></div>
      </Link>
    </>
  );
}

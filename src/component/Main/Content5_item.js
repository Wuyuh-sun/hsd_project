import styles from "../../css/MainCSS/content5.module.css";

export default function Content5Item(props) {
  
  return (
    <>
      <div className={styles.Content5Item_Img}>
        <img src={props.itemImg}/>
        <div className={styles.Content5Item_textBox}>{props.itemText}</div>
      </div>
    </>
  );
}

import styles from "../../css/MainCSS/content1.module.css";
import Content1Item from "./Content1_item";

export default function Content1() {
  const item1img = "../../img/MainImg/main_img_01.jpg";
  const item1Text1 = "가격 이상의 가치가 담긴 ";
  const item1Text2 = "다양한 메뉴를 확인해 보세요";
  const item1Text3 = "한솥 메뉴";

  const item2img = "../../img/MainImg/main_img_02.jpg";
  const item2Text1 =
    "갓 지은 한끼가 기다리고 있는 ";
    const item2Text2 =
    "가까운 한솥 매장을 찾아보세요";
  const item2Text3 = "주변점포찾기";

  return (
    <>
      <div className={styles.content1_wrap}>
        <div className={styles.content1_wrap_center}>
          <Content1Item
            link="/menu/menu_list"
            itemimg={item1img}
            itemText1={item1Text1}
            itemText2={item1Text2}
            itemText3={item1Text3}
          />
          <Content1Item
            link="/store/store_find"
            itemimg={item2img}
            itemText1={item2Text1}
            itemText2={item2Text2}
            itemText3={item2Text3}
          />
        </div>
      </div>
    </>
  );
}

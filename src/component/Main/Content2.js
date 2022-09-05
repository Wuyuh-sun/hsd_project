import styles from "../../css/MainCSS/content2.module.css";
import Content2Item from "./Content2_item";

export default function Content2() {
  const infoHeadText1 = "가맹점주에게도";
  const infoHeadText2 = "든든한 한솥입니다";
  const infoText1 = "점주님들의 꿈을 실현시켜 드리기 위해";
  const infoText2 = "가맹점주와 성공까지 동행하는 한솥!";
  const infoText3 = "상담부터 개업까지 모든 희로애락을 함께 합니다.";

  const item1img = "../../img/MainImg/main_img_03.jpg";
  const item1Text1 = "한솥은 언제나 고객과 점주님들의";
  const item1Text2 = "이익을 먼저 생각합니다";
  const item1Text3 = "Why 한솥 가맹점";

  const item2img = "../../img/MainImg/main_img_04.jpg";
  const item2Text1 = "한솥과 함께하는 가맹점주들의";
  const item2Text2 = "성공 스토리입니다";
  const item2Text3 = "성공수기";
  return (
    <>
      <div className={styles.content2_wrap}>
        <div className={styles.content2_wrap_center}>
          <div className={styles.Content2ItemBox} style={{backgroundColor:"#f6ca00"}}>
            <div className={styles.Content2ItemBox_wrap}>
                <h2>{infoHeadText1}</h2>
                <h2>{infoHeadText2}</h2>
                <h2></h2>
                <div>{infoText1}</div>
                <div>{infoText2}</div>
                <div>{infoText3}</div>
            </div>
          </div>
          <Content2Item
            link="#"
            itemimg={item1img}
            itemText1={item1Text1}
            itemText2={item1Text2}
            itemText3={item1Text3}
          />
          <Content2Item
            link="#"
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

import { useState } from "react";
import styles from "../../css/MainCSS/jumbo.module.css";

export default function Mainjumbo() {

  const [jumboNum, setJumboNum] = useState();

  function controller(e){
    const eVal = e.target.value;
    //jumbo ui change
    const jumboImgList = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes;
    jumboImgList.forEach((item, i)=>{
      // item.style.left = String(Number(item.style.left.replace("%",""))*100*eVal) + "%";
      console.log(item);
    })

    //controller ui change
    e.target.parentNode.childNodes.forEach((item, i)=>{
      item.style.backgroundColor = "#cfc6bc";
    })
    e.target.style.backgroundColor = "#f6ca00";
  }

  return (
    <>
      <ul className={styles.jumboUL}>
        <li style={{left:"0%"}} value="1"></li>
        <li style={{left:"100%"}} value="2"></li>
        <li style={{left:"200%"}} value="3"></li>
        <li style={{left:"300%"}} value="4"></li>
        <li style={{left:"400%"}} value="5"></li>
        <li style={{left:"500%"}} value="6"></li>
        <li style={{left:"600%"}} value="7"></li>
      </ul>
      <ul className={styles.jumboController}>
        <div>
          <li onClick={controller} style={{backgroundColor:"#f6ca00"}} value="0"></li>
          <li onClick={controller} value="1"></li>
          <li onClick={controller} value="2"></li>
          <li onClick={controller} value="3"></li>
          <li onClick={controller} value="4"></li>
          <li onClick={controller} value="5"></li>
          <li onClick={controller} value="6"></li>
        </div>
      </ul>
    </>
  );
}

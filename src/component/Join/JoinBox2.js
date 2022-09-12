import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/JoinCSS/JoinWrap.module.css";
import Box2Item from "./Box2Item";
import marketing from "./marketingtxt";
import personalInformation from "./personalInformationtxt";
import TermsOfService from "./TermsOfServicetxt";

export default function JoinBox2() {
  const agreeAllCheck = useRef();
  const [agreeAllCheckState, setAgreeAllCheckState] = useState(false);

  return (
    <>
      <div className={styles.Joinbox2}>
        <Box2Item title="이용약관"
         contents={TermsOfService} 
         agree="필수" 
         checked = {agreeAllCheckState}
        />
        <Box2Item
          title="개인정보 수집 및 활용동의"
          contents={personalInformation}
          agree="필수"
          checked = {agreeAllCheckState}
        />
        <Box2Item
          title="마케팅 활용목적 동의"
          contents={marketing}
          agree="선택"
          checked = {agreeAllCheckState}
        />
        <div className={styles.allcheck_area}>
          <div className={styles.agree_checkarea}>
            <input ref={agreeAllCheck} type="checkbox" name="" id="" className={styles.checkBox} />
            <div className={styles.agree} onClick={()=>{
              if(agreeAllCheck.current.checked === false){
                agreeAllCheck.current.checked = true;
                setAgreeAllCheckState(true);
              } else{
                agreeAllCheck.current.checked = false;
                setAgreeAllCheckState(false);
              }
            }}>위 약관에 모두 동의합니다.</div>
            <Link to="#"><button onClick={()=>{
              console.log("nextBtn Click");
            }}>다음</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

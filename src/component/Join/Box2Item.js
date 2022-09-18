import { useState } from "react";
import { useEffect, useRef } from "react";
import styles from "../../css/JoinCSS/JoinWrap.module.css";

export default function Box2Item({ title, contents, agree, checked, agreeId }) {
  const agreeCheck = useRef();
  const [inputAgreeCheck, setInputAgreeCheck] = useState(checked);
  useEffect(()=>{
    if(checked === false){
      // agreeCheck.current.checked = false;
      setInputAgreeCheck(false);
    } else{
      // agreeCheck.current.checked = true;
      setInputAgreeCheck(true);
    }
  },[checked])

  useEffect(()=>{
    if(inputAgreeCheck === false){
      agreeCheck.current.checked = false;
      // setInputAgreeCheck(false);
    } else{
      agreeCheck.current.checked = true;
      // setInputAgreeCheck(true);
    }
  },[inputAgreeCheck])
  
  return (
    <>
      <h3 className={styles.Box2Item_title}>{title}</h3>
      <textarea
        className={styles.Box2Item_textarea}
        defaultValue={contents}
        disabled
      />
      <div className={styles.agree_checkarea}>
        <input ref={agreeCheck} type="checkbox" name="" id={agreeId} className={styles.checkBox} />
        <div className={styles.agree} onClick={(e)=>{
          if(agreeCheck.current.checked === false){
            // agreeCheck.current.checked = true;
            setInputAgreeCheck(true)
          } else{
            // agreeCheck.current.checked = false;
            setInputAgreeCheck(false)
          }
        }}>동의합니다<em>({agree})</em></div>
      </div>
    </>
  );
}

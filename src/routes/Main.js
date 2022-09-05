import Mainjumbo from "../component/Main/MainJumbo";
import Content1 from "../component/Main/Content1";
import Content2 from "../component/Main/Content2";
import Content3 from "../component/Main/Content3";
import Content4 from "../component/Main/Content4";

export default function Main() {
  const mainStyle = {
    width:"1170px",
    display:"flex",
    flexDirection:"column",
  }
  
  return (
    <>
      <div style={mainStyle}>
        <Mainjumbo />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
      </div>
    </>
  );
}

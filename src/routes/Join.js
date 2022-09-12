import { useEffect } from "react";
import Joinwrap from "../component/Join/Joingwrap";

export default function Join() {
  useEffect(() => {
    document.body.style.backgroundColor = "#eeecec";
  }, []);
  return (
    <>
      <Joinwrap/>
    </>
  );
}

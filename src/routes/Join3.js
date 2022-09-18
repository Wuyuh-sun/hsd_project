import { useEffect } from "react";
import Joinwrap from "../component/Join3/Joinwrap";

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

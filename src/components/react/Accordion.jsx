import { useRef, useState } from "react";

export default function Accordion(props) {
  const contentEl = useRef(null);
  const [show, setShow] = useState(props.show);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <article className={props.className}>
      <header onClick={handleClick}>{props.header}</header>
      <main
        ref={contentEl}
        className={`overflow-hidden transition-[height] duration-500 ease-in-out ${show ? "h-auto" : "h-0"}`}
        style={show ? { height: contentEl?.current?.scrollHeight } : { height: "0px" }}
      >
        {props.children}
      </main>
    </article>
  );
}

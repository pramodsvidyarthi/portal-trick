import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = React.memo(({ children, mountNode }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const node = el.current;
    mountNode.appendChild(node);
    return () => mountNode.removeChild(node);
  }, [mountNode]);

  return createPortal(children, el.current);
});

export default Portal;

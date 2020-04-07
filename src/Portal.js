import React, { useEffect } from "react";
import { createPortal } from "react-dom";

function isEqual(prev, next) {
  if (next.mountNode && prev.mountNode === undefined) {
    return false;
  }
  return true;
}

const Portal = React.memo(({ children, mountNode }) => {
  const el = document.createElement("div");
  useEffect(() => {
    if (mountNode) {
      mountNode.appendChild(el);
      return () => mountNode.removeChild(el);
    }
  }, [el, mountNode]);

  return createPortal(children, el);
}, isEqual);

export default Portal;

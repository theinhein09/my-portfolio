import { useEffect, useRef } from "react";

function useOutsideClickListener(ref, action) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return action();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
}

export function OutSideClickListener({ action, children }) {
  const wrapperRef = useRef(null);
  useOutsideClickListener(wrapperRef, action);

  return (
    <div role="none" ref={wrapperRef}>
      {children}
    </div>
  );
}

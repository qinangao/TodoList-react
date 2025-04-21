import { useRef } from "react";
export default function useInputFocus() {
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current?.focus();
  };

  return [inputRef, focus];
}

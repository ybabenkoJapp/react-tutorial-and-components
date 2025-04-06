import * as React from "react";
import { useRef } from "react";

export default function UseRefExample() {
  const [value, setValue] = React.useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (inputRef.current) {
      inputRef.current.value = event.target.value;
      console.log(inputRef.current.value);
    }
  }

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleClean() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function triggerSetState() {
    if (inputRef.current) {
      setValue(inputRef.current.value)
    }
  }
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        ref={inputRef}
        onChange={handleInputChange}
        placeholder="useRef input"
      />

      <button className="button" onClick={handleFocus}>
        Focus input
      </button>
      <button className="button" onClick={handleClean}>
        Clean input
      </button>
      <br />
      <br />
      <p>useRefInput value: {inputRef.current?.value}</p>
      <button onClick={triggerSetState}>Trigger setState and component rerender</button>
    </>
  );
}

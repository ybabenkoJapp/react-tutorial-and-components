import React from "react";
import { useId } from "react";

export default function BasicUseIdExample(props: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const uniqueId = useId();

  return (
    <>
      <label htmlFor={uniqueId}>{props.label}</label>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        id={uniqueId}
      />
    </>
  );
}
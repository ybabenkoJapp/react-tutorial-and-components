import * as React from "react";
import BasicButton from "./BasicButton";

const buttons = [
  { variant: "text", children: "Text", id: 1 },
  { variant: "contained", children: "Contained", id: 2 },
  { variant: "outlined", children: "Outlined", id: 3 },
];

export default function ButtonsItems() {
  return buttons.map(({ variant, children, id }) => (
    <BasicButton variant={variant} children={children} key={id} />
  ));
}

import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButton({variant, children}) {
  return <Button variant={variant}>{children}</Button>;
}

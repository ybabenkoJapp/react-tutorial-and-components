import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({
  name,
  value,
  isDisabled = false,
  typographyComponent,
  childrens,
  defaultValue,
}) {
  return (
    <>
      <Rating
        name={name}
        value={value}
        disabled={isDisabled}
        defaultValue={defaultValue}
      />
      <Typography component={typographyComponent}>{childrens}</Typography>
    </>
  );
}

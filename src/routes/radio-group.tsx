import { Box, Radio } from "@mui/material";
import * as React from "react";

export default function RadioGroup() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <Radio
        checked={selectedValue === "a"}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        checked={selectedValue === "b"}
        onChange={handleChange}
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
      />
    </Box>
  );
}

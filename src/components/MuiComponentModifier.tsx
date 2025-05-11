import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";

export default function MuiComponentModifier({
  onThemeChange,
  size,
  children,
}) {
  const [componentSizeValue, setComponentSizeValue] = useState("small");
  const commonComponentProps = {
    MuiButton: {
      size: { small: "small", medium: "medium", large: "large" },
      variant: { text: "text", contained: "contained", outlined: "outlined" },
      disabled: false,
      color: {
        inherit: "inherit",
        primary: "primary",
        secondary: "secondary",
        success: "success",
        error: "error",
        info: "info",
        warning: "warning",
      },
      loading: false, // null | boolean
    },
    MuiRadio: {
      checked: false,
      color: {
        inherit: "inherit",
        primary: "primary",
        secondary: "secondary",
        success: "success",
        error: "error",
        info: "info",
        warning: "warning",
      },
      disabled: false,
      size: { small: "small", medium: "medium", large: "large" },
      value: 0, // number
    },
    MuiRating: {
      size: { small: "small", medium: "medium", large: "large" },
      value: 0, // number
    },
  };

  const handleComponentSizeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setComponentSizeValue((event.target as HTMLInputElement).value);
  };

  return (
    <Box>
      <p>MUI component modifier</p>
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
      >
        {children}
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            Element size: {componentSizeValue}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={componentSizeValue}
            onChange={(event) => {
              handleComponentSizeChange(event);
              onThemeChange(event?.target?.value);
            }}
          >
            <FormControlLabel value="small" control={<Radio />} label="Small" />
            <FormControlLabel
              value="medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="large" control={<Radio />} label="Large" />
          </RadioGroup>
        </FormControl>
      </Stack>
    </Box>
  );
}

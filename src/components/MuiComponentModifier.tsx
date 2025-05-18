import {
  Box,
  createTheme,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useContext, useState } from "react";
import { MyThemeContext } from "../themeProviders/MyThemeContext";

export default function MuiComponentModifier({ children }) {
  const myCustomThemeContext = useContext(MyThemeContext);

  const theme = createTheme(myCustomThemeContext);
  const [componentSizeValue, setComponentSizeValue] = useState("small");
  const [componentColorValue, setComponentColorValue] = useState("primary");
  // remove it from here once all is set
  // TODO: add function to handle theme change in context without props drilling
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

  const handleComponentColorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setComponentColorValue((event.target as HTMLInputElement).value);
  };

  return (
    <ThemeProvider theme={theme}>
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
                onThemeChange({
                  type: "sizeChange",
                  value: event?.target?.value,
                });
              }}
            >
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Small"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel
                value="large"
                control={<Radio />}
                label="Large"
              />
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Element color: {componentColorValue}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={componentColorValue}
              onChange={(event) => {
                handleComponentColorChange(event);
                onThemeChange({
                  type: "colorChange",
                  value: event?.target?.value,
                });
              }}
            >
              {[
                "primary",
                "secondary",
                "success",
                "error",
                "info",
                "warning",
              ].map((item) => (
                <FormControlLabel
                  value={item}
                  key={item}
                  control={<Radio />}
                  label={item}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

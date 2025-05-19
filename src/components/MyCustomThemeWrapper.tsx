import {
  Box,
  createTheme,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useContext, useState, useCallback, useMemo } from "react";
import { MyThemeContext } from "../myCustomContexts/MyThemeContext";
import { orange } from "@mui/material/colors";

export default function MyCustomThemeWrapper({ children }) {
  const myCustomThemeContext = useContext(MyThemeContext);

  const [componentSizeValue, setComponentSizeValue] = useState<
    "small" | "medium" | "large"
  >("medium");
  const [componentColorValue, setComponentColorValue] = useState<
    | "secondary"
    | "inherit"
    | "primary"
    | "success"
    | "error"
    | "info"
    | "warning"
  >("primary");
  // remove it from here once all is set
  // TODO: add function to handle theme change in context without props drilling

  const handleComponentSizeChange = useCallback((event) => {
    setComponentSizeValue(event.target.value);
  }, []);

  const handleComponentColorChange = useCallback((event) => {
    setComponentColorValue(event.target.value);
  }, []);

  const myCachedTheme = useMemo(() => {
    const paletteColor = orange[500];

    return createTheme({
      palette: {
        primary: {
          main: paletteColor,
        },
      },
      components: {
        MuiButton: {
          defaultProps: {
            size: componentSizeValue,
            color: componentColorValue,
          },
          styleOverrides: {
            root: {
              // addition styles
            },
          },
        },
      },
    });
  }, [componentSizeValue, componentColorValue]);

  const theme = createTheme(myCustomThemeContext.myCustomTheme);

  return (
    <ThemeProvider theme={myCachedTheme}>
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

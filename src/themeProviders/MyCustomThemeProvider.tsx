import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import { red } from "@mui/material/colors";

interface MyCustomTheme {
  palette: {
    primary: {
      main: string;
    };
  };
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          variants: {
            props: { variant: string };
            style: Record<string, unknown>;
          }[];
        };
      };
    };
  };
}

export default function MyCustomThemeProvider() {
  const [myTheme, setMyTheme] = useState<MyCustomTheme>({
    palette: {
      primary: {
        main: red[500],
      },
    },
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            // fontSize: "5rem",
            variants: [
              {
                props: { variant: "outlined" },
                style: {
                  // borderWidth: "31px",
                },
              },
            ],
          },
        },
      },
    },
  });


  const theme = createTheme(myTheme);
  return (
    <div>
      <p>My custome theme provider</p>
    </div>
  );
}

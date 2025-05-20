import { red } from "@mui/material/colors";
import MyCustomTheme from "../appTypes/MyCustomTheme";

const initialTheme: MyCustomTheme = {
  palette: {
    primary: {
      main: red[500],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
      },
    },
  },
};


export default function MyCustomThemeWrapper({ children }: { children: React.ReactNode }) {}
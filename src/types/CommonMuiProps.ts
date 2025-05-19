 export interface commonComponentProps {
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

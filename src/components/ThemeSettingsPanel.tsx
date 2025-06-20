// src/components/ButtonSettingsDrawer.tsx
import React from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  TextField,
  Slider,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useButtonTheme } from "../themeContexts/ButtonThemeContext";
import ButtonStyleConfig from "../appTypes/ButtonStyleConfig";
// import { useButtonTheme } from "../context/ButtonThemeContext";
// Для Color Picker можна використовувати бібліотеку, наприклад, react-colorful або `@uiw/react-color`
// Або створити простий інпут type="color"

interface ButtonSettingsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const ThemeSettingsPanel: React.FC<ButtonSettingsDrawerProps> = ({
  open,
  onClose,
}) => {
  // const { buttonConfig, updateButtonConfig } = useButtonTheme();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // updateButtonConfig({ backgroundColor: e.target.value });
    console.log({ backgroundColor: e.target.value });
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // updateButtonConfig({ textColor: e.target.value });
    console.log({ textColor: e.target.value });
  };

  const handleHoverColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // updateButtonConfig({ hoverColor: e.target.value });
    console.log({ hoverColor: e.target.value });
  };

  const handleBorderRadiusChange = (e: Event, newValue: number | number[]) => {
    // updateButtonConfig({ borderRadius: `${newValue}px` });
    console.log({ borderRadius: `${newValue}px` });
  };

  const handlePaddingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Для простоти, просто змінюємо padding
    // updateButtonConfig({ padding: e.target.value });
    console.log({ padding: e.target.value });
  };

  const handleFontSizeChange = (e: Event, newValue: number | number[]) => {
    // updateButtonConfig({ fontSize: `${newValue}rem` });
    console.log({ fontSize: `${newValue}rem` });
  };

  const handleBoxShadowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // updateButtonConfig({ boxShadow: e.target.value });
    console.log({ boxShadow: e.target.value });
  };

  const buttonConfig: ButtonStyleConfig = {
    backgroundColor: "#1976d2", // MUI primary.main за замовчуванням
    textColor: "#FFFFFF",
    hoverColor: "#115293", // Затемнений primary.dark
    borderRadius: "4px",
    padding: "6px 16px",
    fontSize: "0.875rem",
    boxShadow:
      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{
          width: 300,
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        role="presentation"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h6">Button settings</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TextField
          label="Background"
          type="color"
          value={buttonConfig.backgroundColor}
          onChange={handleColorChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">🎨</InputAdornment>
            ),
          }}
        />

        <TextField
          label="Text color"
          type="color"
          value={buttonConfig.textColor}
          onChange={handleTextColorChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">🅰️</InputAdornment>
            ),
          }}
        />

        <TextField
          label="Color on hover"
          type="color"
          value={buttonConfig.hoverColor}
          onChange={handleHoverColorChange}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">👆</InputAdornment>
            ),
          }}
        />

        <Typography gutterBottom>Радіус заокруглення (px)</Typography>
        <Slider
          value={parseFloat(buttonConfig.borderRadius)}
          onChange={handleBorderRadiusChange}
          aria-labelledby="border-radius-slider"
          valueLabelDisplay="auto"
          min={0}
          max={50}
        />

        <TextField
          label="Padding"
          value={buttonConfig.padding}
          onChange={handlePaddingChange}
          placeholder="e.g. 6px 16px"
          fullWidth
        />

        <Typography gutterBottom>Font size (rem)</Typography>
        <Slider
          value={parseFloat(buttonConfig.fontSize)}
          onChange={handleFontSizeChange}
          aria-labelledby="font-size-slider"
          valueLabelDisplay="auto"
          min={0.5}
          max={2.0}
          step={0.05}
        />

        <TextField
          label="Box-shadow"
          value={buttonConfig.boxShadow}
          onChange={handleBoxShadowChange}
          placeholder="e.g. 0px 3px 5px rgba(0,0,0,0.2)"
          fullWidth
          multiline
          rows={2}
        />
      </Box>
    </Drawer>
  );
};

export default ThemeSettingsPanel;

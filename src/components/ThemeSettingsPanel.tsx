import React, { useContext } from "react";
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
import { MyCustomThemeContext } from "../themeContexts/MyCustomThemeContext"; // Імпорт вашого контексту

interface ThemeSettingsPanelProps {
  open: boolean;
  onClose: () => void;
}

const ThemeSettingsPanel: React.FC<ThemeSettingsPanelProps> = ({
  open,
  onClose,
}) => {
  // Доступ до контексту теми
  const context = useContext(MyCustomThemeContext);
  if (!context) {
    // Викидаємо помилку, якщо контекст недоступний (компонент використовується поза провайдером)
    throw new Error('ThemeSettingsPanel має використовуватися всередині MyCustomThemeProvider');
  }
  // Деструктуризація buttonConfig та updateButtonConfig з контексту
  const { buttonConfig, updateButtonConfig } = context;

  // Обробники для зміни властивостей стилю кнопки
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateButtonConfig({ backgroundColor: e.target.value });
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateButtonConfig({ textColor: e.target.value });
  };

  const handleHoverColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateButtonConfig({ hoverColor: e.target.value });
  };

  const handleBorderRadiusChange = (e: Event, newValue: number | number[]) => {
    // Переконайтеся, що newValue є числом для послідовності
    if (typeof newValue === 'number') {
      updateButtonConfig({ borderRadius: `${newValue}px` });
    }
  };

  const handlePaddingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateButtonConfig({ padding: e.target.value });
  };

  const handleFontSizeChange = (e: Event, newValue: number | number[]) => {
    // Переконайтеся, що newValue є числом для послідовності
    if (typeof newValue === 'number') {
      updateButtonConfig({ fontSize: `${newValue}rem` });
    }
  };

  const handleBoxShadowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateButtonConfig({ boxShadow: e.target.value });
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
          <Typography variant="h6">Налаштування кнопки</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <TextField
          label="Колір фону"
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
          label="Колір тексту"
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
          label="Колір при наведенні"
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
          label="Відступи (Padding)"
          value={buttonConfig.padding}
          onChange={handlePaddingChange}
          placeholder="наприклад, 6px 16px"
          fullWidth
        />

        <Typography gutterBottom>Розмір шрифту (rem)</Typography>
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
          label="Тінь (Box-shadow)"
          value={buttonConfig.boxShadow}
          onChange={handleBoxShadowChange}
          placeholder="наприклад, 0px 3px 5px rgba(0,0,0,0.2)"
          fullWidth
          multiline
          rows={2}
        />
      </Box>
    </Drawer>
  );
};

export default ThemeSettingsPanel;

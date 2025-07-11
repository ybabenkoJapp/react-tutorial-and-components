import { ThemeProvider } from "@mui/material/styles";
import { Button, Typography, Container, Box, Stack } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MyTestComponent from "../components/MyTestComponent";
import ThemeSettingsPanel from "../components/ThemeSettingsPanel";
import { useState, useContext } from "react";
import { MyCustomThemeContext } from "../themeContexts/MyCustomThemeContext";

export default function MyCustomThemeMainComponent() {
  const context = useContext(MyCustomThemeContext);
  if (!context) {
    throw new Error(
      "MyCustomThemeMainComponent має використовуватися всередині MyCustomThemeProvider",
    );
  }

  const {
    myCustomTheme,
    handleComponentColorChange,
    handleComponentSizeChange,
  } = context;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const handleDynamicButtonClick = () => {
    // В цьому випадку ми просто відкриваємо панель, оскільки
    // `buttonConfig` вже є єдиним, який керується панеллю.
    // Якщо б у вас було кілька "динамічних" кнопок з різними початковими стилями,
    // вам потрібно було б передавати конкретний ButtonStyleConfig сюди.
    toggleDrawer(true)(); // Викликаємо функцію, що повертає обробник подій
  };


  return (
    <ThemeProvider theme={myCustomTheme}>
      <Container
        sx={{
          mt: 12,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Stack sx={{ gap: 2 }}>
          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Динамічна тема MUI
            </Typography>
            <Button
              color="inherit"
              onClick={toggleDrawer(true)}
              startIcon={<SettingsIcon />}
            >
              Налаштувати кнопку
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Typography variant="h6" sx={{ mt: 4 }}>
              Інші кнопки (контролюються загальною темою):
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button variant="contained" onClick={handleDynamicButtonClick}>
                Динамічна кнопка "contained"
              </Button>
              <Button variant="outlined" onClick={handleDynamicButtonClick}>
                Динамічна кнопка "outlined"
              </Button>
              <Button variant="text" onClick={handleDynamicButtonClick}>
                Динамічна кнопка "text"
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Розміри кнопок
            </Typography>
            <Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={() => handleComponentSizeChange("small")}
                >
                  Малий розмір (Загальна тема)
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleComponentSizeChange("regular")}
                >
                  Загальни розмір (Загальна тема)
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleComponentSizeChange("large")}
                >
                  Великий розмір (Загальна тема)
                </Button>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Кольори кнопок
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                onClick={() => handleComponentColorChange("secondary")}
              >
                Вторинний колір (Загальна тема)
              </Button>
              <Button
                variant="text"
                onClick={() => handleComponentColorChange("primary")}
              >
                Колір головний (Загальна тема)
              </Button>
              <Button
                variant="text"
                onClick={() => handleComponentColorChange("success")}
              >
                Колір успіху (Загальна тема)
              </Button>
              <Button
                variant="text"
                onClick={() => handleComponentColorChange("warning")}
              >
                Колір попередження (Загальна тема)
              </Button>
            </Box>
          </Box>
          <Box>
            <MyTestComponent>
              <Button variant="contained">Contained (MyTestComponent)</Button>
              <Button variant="outlined">Outlined (MyTestComponent)</Button>
              <Button variant="text">Text (MyTestComponent)</Button>
            </MyTestComponent>
          </Box>
        </Stack>
      </Container>

      <ThemeSettingsPanel open={drawerOpen} onClose={toggleDrawer(false)} />
    </ThemeProvider>
  );
}

// commented due code merging start
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import { MyThemeProvider } from "../themeContexts/ThemeContext";
// import ThemedButton from "../components/ThemedButton";
// import { red } from "@mui/material/colors";
// import { Button } from "@mui/material";
// import MyTestComponent from "../components/MyTestComponent";
// import ThemeSettingsPanel from "../components/ThemeSettingsPanel";
// import { useState } from "react";
// import ButtonStyleConfig from "../appTypes/ButtonStyleConfig";
// import { createDynamicTheme } from "../muiTheme/dynamicTheme";

// const buttonConfig: ButtonStyleConfig = {
//   backgroundColor: "#1976d2", // MUI primary.main by default
//   textColor: "#FFFFFF",
//   hoverColor: "#115293", // primary.dark
//   borderRadius: "4px",
//   padding: "6px 16px",
//   fontSize: "0.875rem",
//   boxShadow:
//     "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
// };

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: red[500],
//     },
//   },
// });

// export default function MyCustomThemeMainComponent() {
//   const [drawerOpen, setDrawerOpen] = useState(true);
//   const dynamicTheme = createDynamicTheme(buttonConfig);

//   const toggleDrawer = (open: boolean) => () => {
//     setDrawerOpen(open);
//   };
//   return (
//     <ThemeProvider theme={dynamicTheme}>
//       <div>Hello from App component!</div>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: "purple",
//           "&:hover": { backgroundColor: "darkmagenta" },
//         }}
//         onClick={toggleDrawer(true)}
//       >
//         Contained
//       </Button>
//       <ThemeSettingsPanel open={drawerOpen} onClose={toggleDrawer(false)} />
//       <MyTestComponent>
//         <Button variant="contained">Contained</Button>
//         <Button variant="outlined">Outlined</Button>
//         <Button variant="text">Text</Button>
//       </MyTestComponent>
//       <div>
//         <ThemeProvider theme={theme}>
//           <MyThemeProvider>
//             <ThemedButton />
//           </MyThemeProvider>
//         </ThemeProvider>
//         <Button variant="contained" onClick={toggleDrawer(true)}>
//           Contained
//         </Button>
//         <ThemeSettingsPanel open={drawerOpen} onClose={toggleDrawer(false)} />
//       </div>
//     </ThemeProvider>
//   );
// }
// commented due code merging end

// new code start
// src/components/MyCustomThemeMainComponent.tsx
import { ThemeProvider } from "@mui/material/styles";
import { Button, AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import MyTestComponent from "../components/MyTestComponent"; // Припускається, що цей компонент існує
import ThemeSettingsPanel from "../components/ThemeSettingsPanel";
import { useState, useContext } from "react";
import { MyCustomThemeContext } from "../themeContexts/MyCustomThemeContext"; // Імпорт вашого контексту

export default function MyCustomThemeMainComponent() {
  // Доступ до контексту теми
  const context = useContext(MyCustomThemeContext);
  if (!context) {
    // Викидаємо помилку, якщо контекст недоступний (компонент використовується поза провайдером)
    throw new Error('MyCustomThemeMainComponent має використовуватися всередині MyCustomThemeProvider');
  }
  // Деструктуризація необхідних значень з контексту
  const { myCustomTheme, handleComponentColorChange, handleComponentSizeChange } = context;

  const [drawerOpen, setDrawerOpen] = useState(false);

  // Функція перемикання для бічної панелі налаштувань
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    // Головний ThemeProvider використовує динамічно створену тему з контексту
    <ThemeProvider theme={myCustomTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Динамічна тема MUI
          </Typography>
          <Button color="inherit" onClick={toggleDrawer(true)} startIcon={<SettingsIcon />}>
            Налаштувати кнопку
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)' }}>
        <Typography variant="h5" gutterBottom>
          Приклад динамічної кнопки (стилі з бічної панелі):
        </Typography>
        {/* Стилі варіанту 'contained' цієї кнопки контролюватимуться ThemeSettingsPanel */}
        {/* Видалено локальні sx стилі, щоб показати, що вони тепер керуються темою */}
        <Button variant="contained">
          Динамічна кнопка
        </Button>

        <Typography variant="h6" sx={{ mt: 4 }}>
          Інші кнопки (контролюються загальною темою):
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Ці кнопки демонструють зміну загальних властивостей теми (колір/розмір) */}
          <Button variant="contained" onClick={() => handleComponentColorChange("secondary")}>
            Вторинний колір (Загальна тема)
          </Button>
          <Button variant="outlined" onClick={() => handleComponentSizeChange("large")}>
            Великий розмір (Загальна тема)
          </Button>
          <Button variant="text" onClick={() => handleComponentColorChange("success")}>
            Колір успіху (Загальна тема)
          </Button>
        </Box>

        {/* Припускається, що MyTestComponent візуалізує інші кнопки, які також отримують тему */}
        <MyTestComponent>
          <Button variant="contained">Contained (MyTestComponent)</Button>
          <Button variant="outlined">Outlined (MyTestComponent)</Button>
          <Button variant="text">Text (MyTestComponent)</Button>
        </MyTestComponent>
      </Container>
      {/* Панель налаштувань для кнопки */}
      <ThemeSettingsPanel open={drawerOpen} onClose={toggleDrawer(false)} />
    </ThemeProvider>
  );
}
// new code end
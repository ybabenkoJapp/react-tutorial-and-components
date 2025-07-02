import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { MyCustomThemeContext } from "../themeContexts/MyCustomThemeContext";
import { useCallback, useMemo, useState, ReactNode } from "react";
import ButtonStyleConfig from "../appTypes/ButtonStyleConfig"; // Імпорт нового типу
import { red, orange, green, blue, yellow, grey } from "@mui/material/colors";
import { MuiElementColor, MuiElementSize } from "../appTypes/utilityTypes";

// Конфігурація кнопки за замовчуванням для наших динамічних стилів (з моєї пропозиції)
const defaultButtonConfig: ButtonStyleConfig = {
  backgroundColor: '#1976d2', // MUI primary.main за замовчуванням
  textColor: '#FFFFFF',
  hoverColor: '#115293', // primary.dark
  borderRadius: '4px',
  padding: '6px 16px',
  fontSize: '0.875rem',
  boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
};

// Карта кольорів для загальних кольорів кнопок (з вашого оригінального коду)
const colorMap = {
  primary: red[500],
  secondary: orange[500],
  success: green[500],
  error: red[500],
  info: blue[500],
  warning: yellow[700],
  inherit: grey[500],
};

export const MyCustomThemeProvider = function ({
  children,
}: {
  children: React.ReactNode;
}) {
  // Стан для динамічних стилів кнопки (контролюється бічною панеллю)
  const [buttonConfig, setButtonConfig] = useState<ButtonStyleConfig>(defaultButtonConfig);

  // Стан для загального розміру/кольору компонента (з вашого оригінального коду, впливає на defaultProps)
  const [componentSizeValue, setComponentSizeValue] = useState<MuiElementSize>("small");
  const [componentColorValue, setComponentColorValue] = useState<MuiElementColor>("primary");

  // Функція для оновлення динамічних стилів кнопки
  const updateButtonConfig = useCallback((newConfig: Partial<ButtonStyleConfig>) => {
    setButtonConfig((prevConfig) => ({ ...prevConfig, ...newConfig }));
  }, []);

  const resetButtonConfig = useCallback(() => {
    setButtonConfig(defaultButtonConfig);
  }, []);

  // Функція для оновлення загальних властивостей елементів теми (колір/розмір)
  // Я зробив її більш чистою, щоб вона просто оновлювала стани, а не створювала тему тут
  const undateMyCustomThemeElementProperty = useCallback(
    (property: unknown, type: "color" | "size") => {
      if (type === "color") {
        setComponentColorValue(property as MuiElementColor);
      } else { // type === "size"
        setComponentSizeValue(property as MuiElementSize);
      }
    },
    [] // Залежності порожні, оскільки сеттери стабільні
  );

  const handleComponentSizeChange = useCallback(
    (size: unknown) => undateMyCustomThemeElementProperty(size, "size"),
    [undateMyCustomThemeElementProperty],
  );
  const handleComponentColorChange = useCallback(
    (color: unknown) => {
      undateMyCustomThemeElementProperty(color, "color");
    },
    [undateMyCustomThemeElementProperty],
  );

  // Створення об'єднаної теми MUI за допомогою useMemo для ефективності
  // Цей useMemo тепер об'єднує вашу логіку defaultProps та логіку styleOverrides
  const myCustomTheme = useMemo(() => {
    return createTheme({
      palette: {
        primary: {
          main: colorMap[componentColorValue] || red[500],
        },
        // Тут можна визначити інші кольори палітри, якщо потрібно
      },
      components: {
        MuiButton: {
          defaultProps: {
            size: componentSizeValue,
            color: componentColorValue, // Це встановлює колір за замовчуванням для всіх кнопок
          },
          styleOverrides: {
            // Застосування динамічних стилів кнопки конкретно до варіанту 'contained'
            contained: {
              backgroundColor: buttonConfig.backgroundColor,
              color: buttonConfig.textColor,
              borderRadius: buttonConfig.borderRadius,
              padding: buttonConfig.padding,
              fontSize: buttonConfig.fontSize,
              boxShadow: buttonConfig.boxShadow,
              '&:hover': {
                backgroundColor: buttonConfig.hoverColor,
              },
            },
            // Тут можна додати перевизначення стилів для інших варіантів кнопок (outlined, text)
          },
        },
        // Тут можна додати інші перевизначення компонентів
      },
      // Інші налаштування теми, такі як типографіка, брейкпоінти тощо
    });
  }, [buttonConfig, componentSizeValue, componentColorValue]); // Перестворювати тему, якщо будь-який з цих станів змінюється

  // Ця функція тепер здебільшого символічна або для майбутнього розширення.
  // Перевага надається прямим сеттерам стану (setButtonConfig, setComponentSizeValue).
  const updateMyCustomThemeSettings = useCallback(
    (newMyCustomThemeSettings: Partial<Theme>) => {
      console.warn("updateMyCustomThemeSettings зараз не реалізована для прямого оновлення частин теми. Використовуйте спеціальні сеттери, такі як updateButtonConfig, setComponentSizeValue тощо. Тема перестворюється за допомогою useMemo.");
    },
    []
  );

  // Значення контексту, що надається споживачам
  const myCustomThemeContextValue = useMemo(
    () => ({
      myCustomTheme,
      setMyCustomTheme: (theme: Theme) =>
        console.warn(
          "setMyCustomTheme не експонується безпосередньо для зовнішнього використання. Тема управляється всередині.",
        ),
      updateMyCustomThemeSettings,
      componentSizeValue,
      componentColorValue,
      handleComponentSizeChange,
      handleComponentColorChange,
      buttonConfig, // Додаємо buttonConfig до контексту
      updateButtonConfig, // Додаємо updateButtonConfig до контексту
      resetButtonConfig, // Додаємо функцію скидання
    }),
    [
      myCustomTheme,
      updateMyCustomThemeSettings,
      componentSizeValue,
      componentColorValue,
      handleComponentSizeChange,
      handleComponentColorChange,
      buttonConfig,
      updateButtonConfig,
      resetButtonConfig,
    ],
  );

  return (
    <MyCustomThemeContext.Provider value={myCustomThemeContextValue}>
      <ThemeProvider theme={myCustomTheme}>{children}</ThemeProvider>
    </MyCustomThemeContext.Provider>
  );
};
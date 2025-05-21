import { Button } from "@mui/material";
import { useMyCustomTheme } from "../myCustomHooks/useMyCustomTheme";

export default function MyTestComponent() {
  const {
    componentSizeValue,
    componentColorValue,
    handleComponentSizeChange,
    handleComponentColorChange,
  } = useMyCustomTheme();

  return (
    <div style={{ padding: 20 }}>
      <h2>My Component</h2>
      <p>Current Size: {componentSizeValue}</p>
      <p>Current Color: {componentColorValue}</p>
      <Button variant="contained">Test Button</Button>
      {/* Радіокнопки для зміни розміру */}
      <div>
        <label>Element Size: {componentSizeValue}</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <label>
            <input
              type="radio"
              value="small"
              checked={componentSizeValue === "small"}
              onChange={() => handleComponentSizeChange("small")}
            />
            Small
          </label>
          <label>
            <input
              type="radio"
              value="medium"
              checked={componentSizeValue === "medium"}
              onChange={() => handleComponentSizeChange("medium")}
            />
            Medium
          </label>
          <label>
            <input
              type="radio"
              value="large"
              checked={componentSizeValue === "large"}
              onChange={() => handleComponentSizeChange("large")}
            />
            Large
          </label>
        </div>
      </div>

      {/* Радіокнопки для зміни кольору */}
      <div>
        <label>Element Color: {componentColorValue}</label>
        <div style={{ display: "flex", gap: "10px" }}>
          <label>
            <input
              type="radio"
              value="primary"
              checked={componentColorValue === "primary"}
              onChange={() => handleComponentColorChange("primary")}
            />
            Primary
          </label>
          <label>
            <input
              type="radio"
              value="secondary"
              checked={componentColorValue === "secondary"}
              onChange={() => handleComponentColorChange("secondary")}
            />
            Secondary
          </label>
          <label>
            <input
              type="radio"
              value="success"
              checked={componentColorValue === "success"}
              onChange={() => handleComponentColorChange("success")}
            />
            Success
          </label>
          <label>
            <input
              type="radio"
              value="error"
              checked={componentColorValue === "error"}
              onChange={() => handleComponentColorChange("error")}
            />
            Error
          </label>
          <label>
            <input
              type="radio"
              value="info"
              checked={componentColorValue === "info"}
              onChange={() => handleComponentColorChange("info")}
            />
            Info
          </label>
          <label>
            <input
              type="radio"
              value="warning"
              checked={componentColorValue === "warning"}
              onChange={() => handleComponentColorChange("warning")}
            />
            Warning
          </label>
          <label>
            <input
              type="radio"
              value="inherit"
              checked={componentColorValue === "inherit"}
              onChange={() => handleComponentColorChange("inherit")}
            />
            Inherit
          </label>
        </div>
      </div>
    </div>
  );
}
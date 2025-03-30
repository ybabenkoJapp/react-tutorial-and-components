import { useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import BasicButton from "./components/BasicButton";
import BasicRating from "./components/BasicRating";

function App() {
  const [count, setCount] = useState(0);

  const buttons = [
    { variant: "text", children: "Text", id: 1 },
    { variant: "contained", children: "Contained", id: 2 },
    { variant: "outlined", children: "Outlined", id: 3 },
  ];

  const ratings = [
    {
      name: "simple-controlled",
      controlledvalue: 2,
      value: 3.5,
      component: "legend",
      typography: "Controlled",
      id: 1,
    },
    {
      name: "simple-uncontrolled",
      component: "legend",
      typography: "Uncontrolled",
      defaultValue: 2,
      id: 2,
    },
    {
      name: "Disabled",
      component: "legend",
      typography: "Disabled",
      isDisabled: true,
      id: 2,
    },
  ];

  return (
    <>
      <p>Basic buttons</p>
      {buttons.map(({ variant, children, id }) => (
        <BasicButton variant={variant} children={children} key={id} />
      ))}
      <br />
      <p>Basic Ratings</p>
      {/* { name, Controlledvalue, component, typography, defaultValue } */}
      {ratings.map((props) => (
        <BasicRating {...props} key={props.id} />
      ))}
    </>
  );
}

export default App;

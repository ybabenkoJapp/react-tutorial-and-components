import * as React from "react";
import { Card, CardContent } from "@mui/material";

export default function BasicCard({ children }) {
  return (
    <Card sx={{ minWidth: 275, minHeight: 275 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}

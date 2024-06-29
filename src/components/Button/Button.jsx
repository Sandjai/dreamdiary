import styles from "./styles.module.css";
import classnames from "classnames";
import { SIZES } from "../../constants/ui";

import Button from "@mui/material/Button";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    green: {
      main: "#5ba199",
      light: "rgba(91, 161, 153, 0.3)",
      dark: "#469597",
      contrastText: "#ffffff",
    },
  },
});

export const Button_custom = ({
  children,
  className,
  onClick,
  size = SIZES.m,
  type,
  color = "green",
  variant = "contained",
}) => {
  return (
    // <Button variant={variant} color={color} size={size}>{children}</Button>

    <ThemeProvider theme={theme}>
      <Button
        size={size}
        className={className}
        type={type}
        onClick={onClick}
        variant={variant}
        color={color}
      >
        {children}
      </Button>
    </ThemeProvider>
    // <button
    //   type="button"
    //   onClick={onClick}
    //   className={classnames(
    //     styles[type],
    //     styles.button,
    //     className,
    //     styles[size]
    //   )}
    // >
    //   {children}
    // </button>
  );
};

import { SunIcon } from "@modulz/radix-icons";
import React, { useEffect } from "react";
import { IconButton } from "./IconButton";
import { darkTheme } from "../style";
import { Tooltip } from "./Tooltip";
import { useTheme } from "../useTheme";

export function ThemeToggle(props) {
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    document.documentElement.classList.toggle(
      darkTheme.className,
      theme === "dark"
    );
    document.documentElement.style.setProperty("color-scheme", theme);
  }, [theme]);

  return (
    <Tooltip content="Toggle theme" side="bottom" align="end">
      <IconButton
        variant="ghost"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        {...props}
        aria-label="toggle a light and dark color scheme"
      >
        <SunIcon />
      </IconButton>
    </Tooltip>
  );
}

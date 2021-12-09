import { styled } from "../style";

export const IconButton = styled("button", {
  // Reset
  alignItems: "center",
  appearance: "none",
  borderWidth: "0",
  boxSizing: "border-box",
  display: "inline-flex",
  flexShrink: 0,
  fontSize: "14px",
  justifyContent: "center",
  lineHeight: "1",
  outline: "none",
  padding: "0",
  textDecoration: "none",
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  color: "$hiContrast",
  backgroundColor: "$loContrast",
  border: "1px solid $slate7",
  "@hover": {
    "&:hover": {
      borderColor: "$slate8",
    },
  },
  "&:active": {
    backgroundColor: "$slate2",
  },
  "&:focus": {
    borderColor: "$slate8",
    boxShadow: "0 0 0 1px $colors$slate8",
  },
  "&:disabled": {
    pointerEvents: "none",
    backgroundColor: "transparent",
    color: "$slate6",
  },

  variants: {
    size: {
      1: {
        borderRadius: "$4",
        size: "25px",
      },
    },
    variant: {
      ghost: {
        backgroundColor: "transparent",
        borderWidth: "0",
        "@hover": {
          "&:hover": {
            backgroundColor: "$slateA3",
          },
        },
        "&:focus": {
          boxShadow:
            "inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8",
        },
        "&:active": {
          backgroundColor: "$slateA4",
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: "$slateA4",
          },
      },
    },
    state: {
      active: {
        backgroundColor: "$slate4",
        boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
          },
        },
        "&:active": {
          backgroundColor: "$slate4",
        },
      },
      waiting: {
        backgroundColor: "$slate4",
        boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
        "@hover": {
          "&:hover": {
            boxShadow: "inset 0 0 0 1px hsl(206,10%,76%)",
          },
        },
        "&:active": {
          backgroundColor: "$slate4",
        },
      },
    },
  },
  defaultVariants: {
    size: "1",
    variant: "ghost",
  },
});

import { ExternalLinkIcon } from "@modulz/radix-icons";
import React from "react";
import { styled } from "../style";

export const Link = styled(
  (props) => {
    const { newtab, children, ...otherProps } = props;
    return (
      <a
        {...(newtab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...otherProps}
      >
        {children}
        {newtab ? (
          <ExternalLinkIcon
            style={{
              display: "inline",
              marginLeft: 2,
              height: 18,
              paddingBottom: 3,
              verticalAlign: "bottom",
            }}
          />
        ) : null}
      </a>
    );
  },
  {
    alignItems: "center",
    flexShrink: 0,
    outline: "none",
    textDecorationLine: "none",
    textUnderlineOffset: "3px",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    "@hover": {
      "&:hover": {
        textDecorationLine: "underline",
      },
    },
    "&:focus": {
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineOffset: "2px",
      textDecorationLine: "none",
      outlineColor: "$blue8",
    },
    color: "$blue11",
    textDecorationColor: "$blue4",
  }
);

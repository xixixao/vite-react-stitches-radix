import React from "react";
import { styled } from "../style";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export function Tooltip({ children, content, ...props }) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <Content sideOffset={3} {...props}>
        {content}
        <Box css={{ color: "$transparentPanel" }}>
          <TooltipPrimitive.Arrow
            offset={7}
            width={11}
            height={5}
            style={{ fill: "currentColor" }}
          />
        </Box>
      </Content>
    </TooltipPrimitive.Root>
  );
}

const Box = styled("div");

const Content = styled(TooltipPrimitive.Content, {
  backgroundColor: "$transparentPanel",
  borderRadius: "$4",
  padding: "$4 $8",
  color: "$loContrast",
  font: "$detail",
});

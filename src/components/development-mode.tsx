import { ReactNode } from "react";

import { Hint } from "./hint";

interface InDevelopmentHintProps {
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right";
}

export const DevelopmentMode = ({ children, side }: InDevelopmentHintProps) => {
  return (
    <Hint label="On development mode" side={side}>
      <span>{children}</span>
    </Hint>
  );
};

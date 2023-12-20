import React from "react";

import { ArrowRightLine } from "./icons/ArrowRightLine";
import { ArrowRightS } from "./icons/ArrowRightS";
import { BardFillTriple } from "./icons/BardFillTriple";
import { Compasses2Line } from "./icons/Compasses2";
import { GithubFill } from "./icons/GithubFill";
import { Reset } from "./icons/Reset";

import cn from "clsx";
import { Color } from "../../types/types";
import { ArrowUpDownLine } from "./icons/ArrowUpDownLine";
import { DeviceLine } from "./icons/DeviceLine";
import { PencilLine } from "./icons/PencilLine";
import { Settings } from "./icons/Settings";
import { ShieldLine } from "./icons/ShieldLine";
import { SpeedUpFill } from "./icons/SpeedUpFill";

const getHexByColor = (color: Color): string => {
  const tailwindConfig = require(`../../tailwind.config`);
  return color.split("-").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, tailwindConfig.theme.colors);
};

export type IconName =
  | "arrow-right-line"
  | "arrow-right-s"
  | "arrow-up-down-line"
  | "bard-fill-triple"
  | "compasses-2-line"
  | "github-fill"
  | "pencil-line"
  | "speed-up-fill"
  | "device-line"
  | "settings"
  | "shield-line"
  | "reset";

export type IconProps = {
  name: IconName;
  color?: Color;
  size?: number | "full";
};

export const Icon: React.FC<IconProps> = ({
  name,
  size = 4,
  className,
  ...props
}) => {
  const color = getHexByColor(props.color ?? "current") as string;

  let icon: React.ReactNode = null;

  if (name === "arrow-right-line") {
    icon = <ArrowRightLine />;
  }

  if (name === "arrow-right-s") {
    icon = <ArrowRightS />;
  }

  if (name === "arrow-up-down-line") {
    icon = <ArrowUpDownLine />;
  }

  if (name === "bard-fill-triple") {
    icon = <BardFillTriple />;
  }

  if (name === "compasses-2-line") {
    icon = <Compasses2Line />;
  }

  if (name === "github-fill") {
    icon = <GithubFill />;
  }

  if (name === "reset") {
    icon = <Reset />;
  }

  if (name === "pencil-line") {
    icon = <PencilLine />;
  }

  if (name === "settings") {
    icon = <Settings />;
  }

  if (name === "speed-up-fill") {
    icon = <SpeedUpFill />;
  }

  if (name === "device-line") {
    icon = <DeviceLine />;
  }

  if (name === "shield-line") {
    icon = <ShieldLine />;
  }

  if (!icon) return null;

  return (
    <div
      className={cn("transition-all duration-500", className)}
      style={{
        height: `${size * 0.25}rem`,
        width: `${size * 0.25}rem`,
        color: color,
      }}
      {...props}
    >
      {icon}
    </div>
  );
};

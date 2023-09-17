import React from "react";
import { GetIconNameWithTheme } from "./GetIconNameWithTheme";
import { useDarkMode } from "../../context/DarkModeContext/DarkModeContext";
import { Assets } from "../../assets/Assets";

export const GetLogo = ({ img }) => {
    const { Icon } = Assets;
    const { theme } = useDarkMode();
    const iconName = GetIconNameWithTheme(img, theme);
    return React.createElement(Icon[iconName], null, null);
};

export const GetIconNameWithTheme = (iconName, theme) => {
    if (theme === "light") {
        return `Ri${iconName}Line`;
    } else if (theme === "dark") {
        return `Ri${iconName}Fill`;
    }
    return `Ri${iconName}Line`;
};

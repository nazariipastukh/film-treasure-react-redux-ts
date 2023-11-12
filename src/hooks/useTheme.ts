import {useContext} from "react";
import {ThemeContext} from "../hoc";
import {IThemeContext} from "../interfaces/themeContextInterface";

export const useTheme = (): IThemeContext => {
    return useContext(ThemeContext);
};
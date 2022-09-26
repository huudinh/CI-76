import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const Footer = () => {
    const themeCtx = useContext(ThemeContext);

    const handleSelectChange = (event) => {
        themeCtx.setTheme(event.target.value);
    }

    return (
        <div className="center border" style={{ height: 50 }}>Footer
            <select value={ themeCtx.theme } onChange={handleSelectChange}>
                <option value='light'>Light</option>
                <option value='dark'>Dark</option>
            </select>
        </div>
    );
};

export default Footer;
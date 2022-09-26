import ProductList from "./ProductList";
import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const Content = () => {
    const themeCtx = useContext(ThemeContext);

    return (
        <div className="center border" 
            style={{ 
                flex:1,
                backgroundColor: themeCtx.theme === 'light' ? 'white' : 'black', 
                color: themeCtx.theme === 'light' ? 'black' : 'white',
            }}>
            <ProductList />
        </div>
    );
}

export default Content;
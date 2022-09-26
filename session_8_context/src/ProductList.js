import ThemeContext from "./ThemeContext";
import { useContext } from "react";

const ProductList = () => {
    const value = useContext(ThemeContext);

    return (
        <div>
            <div>{value.theme}</div>
        </div>
    )
};

export default ProductList;
import { useState, useRef, useEffect } from "react";

const useInput = () => {
    const [input, setInput] = useState('');

    const handleInputChange = (event) => {
        setInput(event.target.value);
    };

    return {
        value: input,
        handleChange: handleInputChange
    };
};

const useHover = () => {
    const [isHover, setHover] = useState(false);
    const elemRef = useRef(null);

    useEffect(() => {
        const node = elemRef.current;
        node.addEventListener('mouseenter', () => {
            setHover(true);
        })
        node.addEventListener('mouseleave', () => {
            setHover(false);
        })
    }, []);

    return [elemRef, isHover]

};

const useLocalStorage = (name) => {
    const [value, setValue] = useState(0);

    const handleIncrease = () => {
        setValue(value + 1);
    };
    const handleDecrease = () => {
        setValue(value - 1);
    };

    useEffect(() => {
        const items = Number(localStorage.getItem(name));
        if (items) {
            setValue(items);
        }
    }, [name]);

    useEffect(() => {
        localStorage.setItem(name, value);
    }, [value, name]);

    return {
        value: value,
        increase: handleIncrease,
        decrease: handleDecrease,
    };
}

export { useInput, useHover, useLocalStorage }
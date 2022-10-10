import { useInput } from "./hooks";

const UseInput = () => {
    const input = useInput();
    const input2 = useInput();
    const input3 = useInput();

    const handleGetValue = () => {
        console.log(input.value);
        console.log(input2.value);
        console.log(input3.value);
    }

    return (
        <div>
            <input value={input.value} onChange={input.handleChange} />
            <input value={input2.value} onChange={input2.handleChange} />
            <input value={input3.value} onChange={input3.handleChange} />
            <button onClick={handleGetValue}>Get value</button>
        </div>
    );
};

export default UseInput;
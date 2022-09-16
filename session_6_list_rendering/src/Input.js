import { useState } from 'react';

const generateId = () => Math.floor(Math.random() * 10000);

const Input = () => {
    const [inputs, setInputs] = useState([]);

    const append = () => {
        setInputs((prev) => {
            return [...prev, generateId()];
        })
    };
    
    const prepend = () => {
        setInputs((prev) => {
            return [generateId(), ...prev];
        })
    };

    return (
        <div>
            <button onClick={append}>Append</button>
            <button onClick={prepend}>Prepend</button>
            <ul>
                {inputs.map((input, idx) => {
                    return(
                        <li key={idx}>
                            <label>
                                {input}
                                <input />
                            </label>
                        </li>
                    )
                })}
            </ul>
            <hr></hr>
            <ul>
                {inputs.map((input, idx) => {
                    return(
                        <li key={input}>
                            <label>
                                {input}
                                <input />
                            </label>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Input;
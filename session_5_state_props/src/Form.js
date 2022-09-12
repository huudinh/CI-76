import { useState } from "react";

const Form = () => {
    const [value, setValue] = useState('Jogging');

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue('');
        // console.log('submit');
    };

    const handleInputChanged = (event) => {
        // console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={value} onChange={handleInputChanged} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default Form;
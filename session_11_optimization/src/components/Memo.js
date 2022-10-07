import { useState, memo } from "react";

const Memo = () => {
    const [value, setValue] = useState({ name: 'Mindx', age: 20 });

    const updateValue = () => {
        setValue({ ...value});
    }

    const updateName = () => {
        setValue({ ...value, name: value.name + 'x' });
    };

    const updateAge = () => {
        setValue({ ...value, age: value.age + 1 });
    };

    return (
        <div>
            <button onClick={updateValue}>Change value</button>
            <button onClick={updateName}>Change name</button>
            <button onClick={updateAge}>Change age</button>
            <Normal name={value.name} age={value.age} />
            <Memoized name={value.name} age={value.age} />
        </div>
    )
};

const Normal = (props) => {
    console.log('Normal, Re-render');
    return (
        <div>
            Normal: { props.name } { props.age }
        </div>
    )
}

const Pure = (props) => {
    // shallow compare
    console.log('Pure, Re-render');
    return (
        <div>
            Pure: { props.name } { props.age }
        </div>
    )
}

const propsAreEquals = (prevProps, nextProps) => {
    console.log('prevProps', prevProps);
    console.log('nextProps', nextProps);
    return prevProps.name === nextProps.name && prevProps.age === nextProps.age;
}

const Memoized = memo(Pure, propsAreEquals);

export default Memo;
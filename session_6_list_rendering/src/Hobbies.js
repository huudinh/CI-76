import { useState } from 'react';

const Hobbies = () => {
    const [hobbies, setHobbies] = useState([
        { id: 1, hobbies: 'meo' },
        { id: 2, hobbies: 'piao' },
    ]);

    const handleDelete = (id) => {
        const updateHobbies = hobbies.filter((item) => {
            return item.id !== id;
        });
        setHobbies(updateHobbies);
    }

    return (
        <div>
            <h1>Rate your Hobbies</h1>
            <ul>
                {hobbies.map((item, idx) => {
                    return (
                        <li key={item.id}>
                            <span>I </span>
                            <select>
                                <option>like</option>
                                <option>love</option>
                            </select>
                            <span>{item.hobbies}</span>
                            <button onClick={() => {
                                handleDelete(item.id);
                            }}>x</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Hobbies;
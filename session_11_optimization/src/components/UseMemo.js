import { useState, useEffect, useMemo, useCallback } from "react";

const UseMemo = () => {
    const [items, setItems] = useState([1, 2, 3]);
    const [visible, setVisible] = useState(true);
    const [user, setUser] = useState(null);

    const doubleItems = items.map((item) => item * 2);

    const memoziedDoubleItems = useMemo(()=> {
        return items.map((item) => item * 2);
    }, [items])

    const addToItems = () => {
        setItems([...items, 1])
    }

    const changeVisible = () => {
        setVisible(!visible);
    }

    useEffect(() => {
        console.log('doubleItems changed');
    }, [doubleItems]);

    useEffect(() => {
        console.log('memoziedDouble Item Changed');
    }, [memoziedDoubleItems]);

    const getUser = useCallback(() => {
        fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((resJson) => {
                setUser(resJson.results[0]);
            });
    }, []);

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <div>
            <button onClick={addToItems}>Push</button>
            <button onClick={changeVisible}>Change visible</button>
            {visible && (
                <div>
                    <p>{items.join(', ')}</p>
                    <p>{doubleItems.join(', ')}</p>
                    <p>{memoziedDoubleItems.join(', ')}</p>
                </div>
            )}
            <button onClick={getUser}>Refresh</button>
            {user && (
                <div>
                    <img src={user.picture.medium} alt="" />
                    <p>
                        {user.name.first} {user.name.last}
                    </p>
                </div>
            )}
        </div>
    )
};

export default UseMemo;
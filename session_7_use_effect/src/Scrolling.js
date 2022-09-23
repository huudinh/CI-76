import { useEffect, useState } from "react";

const Scrolling = () => {
    const [scrollTop, setScrollTop] = useState(0);
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log('start effect');
        const handleScrolling = () => {
            setScrollTop(document.documentElement.scrollTop);
        }
        document.addEventListener('scroll', handleScrolling);

        return () => {
            // cleanup
            console.log('cleanup');
            document.removeEventListener('scroll', handleScrolling);
        }
    }, []);

    useEffect(() => {
        console.log('counting effect');
        console.log(visible)
        document.title = `You have click ${count} times`;
    }, [count, visible])

    return (
        <div style={{ height:2000 }}>
            Scrolling {scrollTop} <br></br>

            <div>
                <button
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    Change visible
                </button>
                {visible && <p>This is hidden content</p>}

            </div>

            {count} {' '}
            <button 
                onClick={()=>{
                    setCount(count + 1);
                }}
            >
                Increase
            </button>
        </div>
    );
}

export default Scrolling;
import { useHover } from "./hooks";

const UseHover = () => {
    const [elemRef, isHover] = useHover();
    const [elemRef2, isHover2] = useHover();


    return (
        <div>
            <div style={{ width:100, height:100, border:'1px solid black' }}
                ref={elemRef}
            >
                {isHover ? 'Hovering' : 'Not hovering'}
            </div>
            <div style={{ width:200, height:200, border:'1px solid black' }}
                ref={elemRef2}
            >
                {isHover2 ? 'Hovering' : 'Not hovering'}
            </div>
        </div>
    );
};

export default UseHover;
const Card = (props) => {
    return (
        <div
            style = {
                {
                    padding: 10,
                    border: '1px solid black',
                    borderRadius:8,
                    boxShadow: '0 4px 8px rgba(0,0,0,.2)',
                }
            }
        >
            {props.children}
        </div>
    );
};

export default Card;
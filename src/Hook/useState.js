import React from 'react';
import "./style1.css";

const UseState = () => {

    const [count, setCount] = React.useState(1);
    return (
        <>
            <div className="center_div">
                <p>{count}</p>
                <div className="button2" onClick={() => setCount( count + 1 )}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                <div className="button2" onClick={() => (count > 0 ? setCount( count - 1 ): setCount(0))}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DEC
                </div>
            </div>
        </>
    )
}

export default UseState;

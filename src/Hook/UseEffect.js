import React,{useEffect,useState} from 'react';
import "./style1.css";

const UseEffect = () => {

    const [count, setCount] = useState(1);

    useEffect(() => {
       document.title = `Chats(${count})`;
    }, )
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
              
            </div>
        </>
    )
}

export default UseEffect;

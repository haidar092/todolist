import React, {useReducer} from 'react';
import "./style1.css";

const reducer = (state , action) => {
    if(action.type === "inc"){
        state = state +1;
    }
    if(state > 0 && action.type === "dec"){
        state = state -1;
    }
    return state;
};

const UseReducer = () => {


    const Data = 0;

    const [state, dispatch] = useReducer(reducer, Data);

   
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={() => dispatch({type :"inc"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Inc
                </div>
                <div className="button2"  onClick={() => dispatch({type :"dec"})}>
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

export default UseReducer;

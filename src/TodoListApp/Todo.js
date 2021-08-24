import React, { useEffect, useState } from 'react';
import "./Style.css";

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return [];
    }
};

const Todo = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [editItems, setEditItems] = useState("");
    const [toggleButton, setToggleButton] = useState(false);
    //add a items
    const addItems = () => {
        if (!input) {
            alert("plz fill the data");
        }
        else if (input && toggleButton){
            setItems(
                items.map((curElem) =>{
                    if (curElem.id === editItems){
                        return{...curElem, name:input}
                    }
                    return curElem;
                })

            );
            setInput([]);
            setEditItems();
            setToggleButton(false);
        }
        
        else {
            const myNewInput = {
                id: new Date().getTime()
                    .toString(),
                name: input,
            };
            setItems([...items, myNewInput]);
            setInput("");
        }
    };
    //edit the item 
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        }
        );
        setInput(item_todo_edited.name);
        setEditItems(index);
        setToggleButton(true);
    }
    //deleteitem
    const deleteItem = (index) => {
        const updateItem = items.filter((curElem) => {
            return curElem.id !== index;
        })
        setItems(updateItem);
    };
    const RemoveAll = () => {
        setItems([]);
    };
    //LOCALSTORAGE
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="" srcset="" />
                        <figcaption>Add yOUR List Here✌</figcaption>
                    </figure>
                    <div className="additems">
                        <input type="text" placeholder="✍ Add Items" value={input} onChange={(event) => setInput(event.target.value)} />
                        {toggleButton ? (
                            <i className="fa fa-edit add-btn " onClick={addItems}></i>
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={addItems}></i>
                        )
                        };

                    </div>
                    <div className="showItems">
                        {items.map((curElem, index) => {
                            return (
                                <div className="eachItem" key={curElem.id}>
                                    <h3>{curElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                                        <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })};

                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove ALL" onClick={RemoveAll}>
                            <span> CHECK LiST </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;

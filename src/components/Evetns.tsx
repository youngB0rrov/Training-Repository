import React, { FunctionComponent, useState } from "react";

const Events: FunctionComponent = () => {

    const [value, setValue] = useState<string>('');
    const [isDraged, setIsDraged] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);  
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('Draged over!');
        setIsDraged(true);
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('Drage leave!');
        setIsDraged(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('Droped!');
        setIsDraged(false);
    }

    return (
        <div>
            <input type="text" onChange={changeHandler}/>
            <button onClick={clickHandler}>Click to show input text</button>
            <div>
                <div 
                    style={{width: 200, height: 200, backgroundColor: 'green', marginBottom: 30}}
                    draggable
                > 
                    First figure 
                </div>
                <div 
                    style={{width: 200, height: 200, backgroundColor: (isDraged) ? 'green' : 'blue', marginBottom: 30}}
                    onDragOver={dragOverHandler}
                    onDragLeave={dragLeaveHandler}
                    onDrop={dropHandler}
                > 
                    Second figure 
                </div>
            </div>
        </div>
    )
}

export default Events;
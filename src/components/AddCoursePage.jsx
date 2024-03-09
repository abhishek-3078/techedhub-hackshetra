import React from 'react';
import './AddCoursePage.css';
import { useState } from 'react';

const ComponentForm = ({ index }) => {
    return (
        <div className="flex justify-center items-center">
            <form className="flex flex-col bg-purple items-start">
            <div className="text-white flex justify-center w-[20px] h-[20px] bg-black rounded-[20px]">
                {index+1}
            </div>
                <input className="input-field" type="text" placeholder={`Title ${index + 1}`} />
                <textarea name="desc" className="input-field" placeholder="description" />
                <textarea name="attachment" className="input-field" placeholder="attachment" />
            </form>
        </div>
    );
};

const AddCoursePage = () => {
    const [componentArray, setComponentArray] = useState([<ComponentForm key={0} index={0} />]);
    const [counter, setCounter] = useState(1);

    const addComponent = () => {
        setComponentArray([...componentArray, <ComponentForm key={counter} index={counter} />]);
        setCounter(counter + 1);
    };

    return (
        <>
            <div className="flex justify-center align-baseline">
                <h1 className="text-white">Roadmap</h1>
            </div>
            <button onClick={addComponent}>Add Component</button>
            {componentArray.map((item) => item)}
        </>
    );
};

export default AddCoursePage;

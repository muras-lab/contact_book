import React, { useState } from 'react';

const AddTodo = (props) => {

    let [name, setName] = useState('')
    let [lastName, setlastName] = useState('')
    let [number, setNumber] = useState('')

    function handleValue1(e) {
        setName(e.target.value)
    }
    function handleValue2(e) {
        setlastName(e.target.value)
    }
    function handleValue3(e) {
        setNumber(e.target.value)
    }

    function handleClick() {
        let newObj = {
            name: name,
            lastName: lastName,
            number: number,
            id: Date.now(),
            status: false
        }
        props.handleTask(newObj)
        setName('')
        setlastName('')
        setNumber('')
    }

    return (
        <div className="container">
            <h3>contact list</h3>
            <p><input placeholder="Name" value={name} onChange={handleValue1} type="text" /></p>
            <p><input placeholder="lastName" value={lastName} onChange={handleValue2} type="text" /></p>
            <p><input placeholder="number" value={number} onChange={handleValue3} type="text" /></p>
            <button onClick={handleClick}>Add contact</button>
        </div>
    );
};

export default AddTodo;
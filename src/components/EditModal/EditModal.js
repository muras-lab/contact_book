import React, { useState } from 'react';
import './EditModal.css'
const EditModal = (props) => {

    let [editContact1, setEditContact1] = useState(props.editContact.name)
    let [editContact2, setEditContact2] = useState(props.editContact.lastName)
    let [editContact3, setEditContact3] = useState(props.editContact.number)
    let [editContact4] = useState(props.editContact)

    function setName(e) {
        let name = e.target.value
        setEditContact1(name)
    }

    function setLastName(e) {
        let lastName = e.target.value
        setEditContact2(lastName)
    }

    function setNumber(e) {
        let number = e.target.value
        setEditContact3(number)
    }

    function handleSave() {
        let newObj = {
            name: editContact1,
            lastName: editContact2,
            number: editContact3,
            id: editContact4.id,
            status: editContact4.status
        }
        props.handleSaveContact(newObj)
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button onClick={props.handleCloseModal}>&times;</button>
                </div>
                <input placeholder="Name"
                    onChange={setName}
                    type="text"
                    value={editContact1}
                    className="inp-edit"
                />
                <input placeholder="last-name"
                    onChange={setLastName}
                    type="text"
                    value={editContact2}
                    className="inp-edit"
                />
                <input placeholder="Number"
                    onChange={setNumber}
                    type="text"
                    value={editContact3}
                    className="inp-edit"
                />
                <p><button onClick={handleSave}>Save</button></p>
            </div>
        </div>
    );
};

export default EditModal;

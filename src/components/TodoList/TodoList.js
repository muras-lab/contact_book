import React from 'react';

const TodoList = (props) => {
    let style = {
        listStyleType: 'none'
    }
    return (
        <ul style={style}>
            {props.contact.map((item, index) => (

                <li key={item.id} className={item.status ? 'completed' : ''}>
                    <p><input onChange={() => props.changeStatus(item.id)}
                        type="checkbox"
                    />
                    name: {item.name}</p> <p>last-name: {item.lastName}</p> <p>number: {item.number}</p>
                    <button onClick={() => props.handleDelete(item.id)}>&times;</button>
                    <button onClick={() => props.handleEdit(index)}>Edit</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
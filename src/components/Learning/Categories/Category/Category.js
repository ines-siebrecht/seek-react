import React from 'react';

const categorySelect = (props) => (
    <div>
        <button onClick={props.clicked}>{props.title}</button>
        <p>{props.description}</p>
    </div>
);

export default categorySelect;

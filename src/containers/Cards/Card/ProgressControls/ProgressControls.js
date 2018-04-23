import React from 'react';

const progressControls = (props) => (
    <div>
        <p>Where you correct?</p>
        <button onClick={props.selectedFailed}>✕</button>
        <button onClick={props.selectedSuccessful}>✔</button>
    </div>
);

export default progressControls;

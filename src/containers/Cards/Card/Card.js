import React from 'react';

import ProgressControls from './ProgressControls/ProgressControls';

import styles from './Card.css';

const card = (props) => {
    let content = <p>loading...</p>;
    let controls = null;

    if (props.displayMode === 'jeopardy') {
        content = <div>{props.description}</div>;
    }

    if (props.displayMode === 'switched') {
        content = <div>{props.word}</div>;
    }

    if (props.showResult) {
        controls = <ProgressControls
            selectedSuccessful={props.selectedSuccessful}
            selectedFailed={props.selectedFailed}/>;

        switch (props.displayMode) {
            case 'jeopardy':
                content =  <div>{props.word}</div>;
                break;

            case 'switched':
                content = <div>{props.description}</div>;
                break;
        }
    }

    return (
        <div className={styles.Card}>
            {content}
            <button onClick={props.checkResult}>{props.showResult ? '←' : '→'}</button>
            {controls}
        </div>
    );
};

export default card;

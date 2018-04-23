import React, {Component} from 'react';

import Card from './Card/Card';
import styles from './Cards.css';

class Cards extends Component {
    state = {
        cards: [
            {
                id: 1,
                word: 'cat',
                description: 'a small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws. ' +
                'It is widely kept as a pet or for catching mice, and many breeds have been developed.',
            },
            {
                id: 2,
                word: 'sheep',
                description: 'a domesticated ruminant mammal with a thick woolly coat and (typically only in the male) ' +
                'curving horns. It is kept in flocks for its wool or meat, and is proverbial for its tendency to ' +
                'follow others in the flock.',
            },
            {
                id: 3,
                word: 'dog',
                description: 'a domesticated carnivorous mammal that typically has a long snout, an acute sense of ' +
                'smell, non-retractile claws, and a barking, howling, or whining voice.',
            },
            {
                id: 4,
                word: 'goat',
                description: 'a hardy domesticated ruminant mammal that has backward-curving horns and (in the male) ' +
                'a beard. It is kept for its milk and meat, and noted for its lively behaviour.',
            },
            {
                id: 5,
                word: 'chicken',
                description: 'a domestic fowl kept for its eggs or meat, especially a young one.',
            },
        ],
        displayMode: 'jeopardy',
        showResult: false,
    };

    checkResultHandler = () => {
        this.setState({showResult: !this.state.showResult});
    };

    successfulCheckHandler = (cardIndex) => {
        const cards = [...this.state.cards];

        cards.splice(cardIndex, 1);
        this.setState({cards: cards, showResult: false});
    };

    failedCheckHandler = (cardIndex) => {
        const cards = [...this.state.cards];

        const newCard = cards.slice(cardIndex, 1);

        cards.splice(cardIndex, 1);
        cards.push(newCard[0]);

        this.setState({cards: cards, showResult: false});
    };

    render() {
        const cards = this.state.cards.map((c, index) => {
            return (
                <Card
                    key={c.id}
                    word={c.word}
                    description={c.description}
                    displayMode={this.state.displayMode}
                    showResult={this.state.showResult}
                    checkResult={this.checkResultHandler}
                    selectedSuccessful={() => {this.successfulCheckHandler(index)}}
                    selectedFailed={() => {this.failedCheckHandler(index)}}
                />
            );
        });

        return (
            <div className={styles.Cards}>
                {cards}
            </div>
        )
    }
}

export default Cards;

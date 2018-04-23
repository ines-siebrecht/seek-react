import React, {Component} from 'react';

import Category from '../../components/Learning/Categories/Category/Category';

import styles from './Categories.css';

class Categories extends Component {
    state = {
        categories: [
            {
                id: 1,
                title: 'Farm Animals',
                description: 'animals living on a farm'
            },
            {
                id: 2,
                title: 'Tropical Birds',
                description: 'colorful birds from the rain forrest'
            },
            {
                id: 3,
                title: 'Bears',
                description: 'family of bears'
            },
        ]
    };

    selectCategoryHandler = (id) => {
        this.props.history.push({pathname: this.props.match.url + '/' + id});
    };

    render () {
        const categoryList = this.state.categories.map(cat => (
            <Category
                key={cat.id}
                title={cat.title}
                description={cat.description}
                clicked={() => this.selectCategoryHandler(cat.id)}/>
        ));

        return (
            <div className={styles.Categories}>
                <div className={styles.CategoryList}>
                    {categoryList}
                </div>
                <span className={styles.AddCategory}>+</span>
            </div>
        );
    }
}

export default Categories;

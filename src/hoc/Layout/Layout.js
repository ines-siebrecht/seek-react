import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

import styles from './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                <nav>side drawer</nav>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;

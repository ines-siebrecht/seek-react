import React from 'react';

import Logo from '../../UI/Logo/Logo';
import styles from './Toolbar.css';

const toolbar = () => {
   return (
       <header className={styles.Toolbar}>
           <Logo/>
           <span>menu</span>
       </header>
   );
};

export default toolbar;

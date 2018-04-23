import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Categories from './containers/Categories/Categories';
import Cards from './containers/Cards/Cards';

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
              <Switch>
                  <Route path="/categories/:id" exact component={Cards}/>
                  <Route path="/categories" exact component={Categories}/>
              </Switch>
          </Layout>
        </div>
    );
  }
}

export default App;

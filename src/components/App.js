import React, { Component } from 'react';
import Sidebar from './Layout/Sidebar'
import Bookmarks from '../views/Bookmarks'
import AddBookmark from '../views/AddBookmark'
import { Provider } from 'react-redux'
import { store } from '../store'
import { Route } from 'react-router-dom'

const routes = [
    { path: '/', component: Bookmarks },
    { path: '/new', component: AddBookmark },
]

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App h-screen w-full">
            <Sidebar />
            { routes.map(({ path, component }, index) => <Route path={path} component={component} exact key={index} />) }
        </div>
      </Provider>
    );
  }
}

export default App;

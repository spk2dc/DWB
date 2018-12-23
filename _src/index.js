import React from 'react';
import Todo from './lib/components/Todo';
import AppNotify from './lib/components/AppNotify';
import "babel-polyfill";
import Dialog from './lib/components/Dialog';
import IdentityWidget from './lib/components/IdentityWidget';

class App extends React.Component {
  render() {
    return (
      <div>
        <Todo />
        <AppNotify />        
        <Dialog />
        <IdentityWidget />
      </div>
    );
  }
}

import './main.css';

export default App;
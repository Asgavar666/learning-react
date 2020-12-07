import React from 'react';
import Hero from '../Hero/Hero';
import List from '../List/List';
import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Please don't overREACT</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]} image='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'>
           
        </List>
        
      </main>
    )
  }
}

export default App;

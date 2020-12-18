import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
    }
    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.node,
      icon: PropTypes.node,
    }
    addCard(title) {
      this.setState(state => (
        {
          cards: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.cards.length - 1].key +1 : 0,
              title,
              cards: [],
                        

            },
          ],
        }
      ));
    }

    render(){
      return(
        <section className={styles.component}>
          <h3 className = {styles.title}>
            <span className={styles.icon}>
              <Icon name={this.props.icon}></Icon>
            </span>
            {this.props.title}
          </h3>
          <div className={styles.icon}>
            {this.state.cards.map(({key, ...cardProps}) => (
              <Card key={key} {...cardProps} />
            ))}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
        </section>
      );
    }
}

export default Column;
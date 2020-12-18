import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon';
//import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
   
    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.node,
      icon: PropTypes.node,
    }
   

    render(){
      const {title, icon, cards} = this.props;

      return(
        <section className={styles.component}>
          <h3 className = {styles.title}>
            <span className={styles.icon}>
              <Icon name={icon}></Icon>
            </span>
            {title}
          </h3>
          
          <div className={styles.icon}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          {/*
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>
          */}
          
        </section>
      );
    }
}

export default Column;
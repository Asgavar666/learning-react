import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';


class Column extends React.Component {
   
    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.node,
      addCard: PropTypes.func,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    };

    render() {
      const { title, icon, cards, addCard } = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon name={icon} /></span>{title}</h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>
        </section>
      );
    }
}
  
export default Column;
  
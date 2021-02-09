import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import styles from './SearchResult.scss';
import Card from '../Card/Card';

class SearchResult extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };  
  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <h3 className={styles.title}>
            Search Results
          </h3>
          <div className={styles.cards}>
            {cards.map((cardProps) => (
              <Card key={cardProps.id} {...cardProps} />
            ))}
          </div>
        </section>
      </Container>  
    );
  }
}


export default SearchResult;
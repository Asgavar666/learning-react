import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../COlumn/Column';


class List extends React.Component {
  static PropTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    image: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }
  render() {
    return (
      <section className={styles.component}>
       
        
         <Hero titleText={this.props.title} imageAddress={this.props.image}/>

         <div className={styles.description}>
           {this.props.children}
         </div>
         <div className={styles.columns}>
           <Column title={'Animals'}></Column>
           <Column title={'Plants'}></Column>
           <Column title={'Minerals'}></Column>
           
           
          
         </div>
      </section>
    )
  }
}

export default List;

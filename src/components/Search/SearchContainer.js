import {connect} from 'react-redux';
import Search from './Search';
import {
  getSearchString,
  countVisibleCards,
  countAllCards,
  createAction_changeSearchString,
} from '../../redux/searchStringRedux';

//import getCardsForColumn from '../../redux/cardRedux';

const mapStateToProps = (state) => ({
  searchString: getSearchString(state),
  countVisible: countVisibleCards(state),
  countAll: countAllCards(state),
  //CardsForColumn: getCardsForColumn(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);


import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Home from '../components/home';

function mapStateToProps(state) {
  return {
    home: state.home.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToLink: (link) => (dispatch(push(link))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

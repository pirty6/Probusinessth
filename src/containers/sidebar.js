
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Sidebar from '../components/sidebar';

function mapStateToProps(state) {
  return {
    links: state.sidebar.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    goToLink: (link) => (dispatch(push(link))),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

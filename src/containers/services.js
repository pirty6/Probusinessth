
import { connect } from 'react-redux';
import Services from '../components/services';

function mapStateToProps(state) {
  return {
    services: state.services.currentPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);

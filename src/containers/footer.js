
import { connect } from 'react-redux';
// import { push } from 'react-router-redux';
import Footer from '../components/footer';

function mapStateToProps(state) {
  return {
    footer: state.footer.footer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import injectReducer from 'utils/injectReducer';

import reducer from './reducer';

import * as authenticationActions from './actions';
import { makeSelectHomepage } from './selectors';

import HomePage from './index';

const mapStateToProps = createStructuredSelector({
  homepageStore: makeSelectHomepage(),
});

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authenticationActions, dispatch),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'Homepage', reducer });

export default compose(
  withReducer,
  withConnect,
)(HomePage);

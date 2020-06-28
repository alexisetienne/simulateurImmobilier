import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import * as authenticationActions from './actions';
import { makeSelectHomepage } from './selectors';

import Auth from './index';

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
export default compose(withConnect)(Auth);

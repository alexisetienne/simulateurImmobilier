import { createSelector } from 'reselect';

/**
 * The auth state selectors
 */

const selectHomepage = () => state => state.homepage;

const makeSelectHomepage = () =>
  createSelector(
    selectHomepage(),
    substate => substate.toJS(),
  );

export { makeSelectHomepage };

import R from 'ramda';

export const buildReducer = (initialState, cases) => (state = initialState, action) =>
  cases.hasOwnProperty(action.type)
    ? cases[action.type](state, action)
    : state;

export const prefixActionTypes = (base, types) => R.zipObj(types, types.map(R.concat(`${base}/`)));
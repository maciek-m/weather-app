const CITY_SEARCH_REDUCER = 'citySearchReducer';

export function mapStateToProps(state) {
  const props = state[CITY_SEARCH_REDUCER];
  return props;
}

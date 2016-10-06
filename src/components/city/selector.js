export const CITY_REDUCER = 'cityReducer';

export function mapStateToProps(state) {
  const props = state[CITY_REDUCER];
  return props;
}

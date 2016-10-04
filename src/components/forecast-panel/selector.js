const FORECAST_REDUCER = 'forecastReducer';

export function mapStateToProps(state) {
  const props = state[FORECAST_REDUCER];
  return props;
}

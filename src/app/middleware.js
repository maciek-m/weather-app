export const loggerMiddleware = store => next => action => {
  console.log('Dispatching action: ', action); // eslint-disable-line no-console
  console.log('Next state: ', store.getState()); // eslint-disable-line no-console
  return next(action);
};

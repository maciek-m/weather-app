export const loggerMiddleware = store => next => action => {
  console.log('Dispatching action: ', action);
  console.log('Next state: ', store.getState());
  return next(action);
};

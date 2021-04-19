import { createStore } from 'redux';
import rootReducer from 'store/modules/rootReducer';

const enhancer =
  process.env.NODE_ENV === 'development'
    ? (console.tron.createEnhancer() as any)
    : null;

const store = createStore(rootReducer, enhancer);

export default store;

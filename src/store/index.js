import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import reactotron from '../../ReactotronConfig';

const createEnhancers = (getDefaultEnhancers) => {
  if (__DEV__) {
    return getDefaultEnhancers().concat(reactotron.createEnhancer())
  } else {
    return getDefaultEnhancers()
  }
}

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
    enhancers: createEnhancers,
});
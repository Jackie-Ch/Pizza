import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './features/pizzas/pizzasSlice';

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  },
});

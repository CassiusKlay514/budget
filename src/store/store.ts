import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import expensesReducer from './expensesSlice';
import goalsReducer from './goalsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    expenses: expensesReducer,
    goals: goalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
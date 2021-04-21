import { homeReducer, HomeState } from './home.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectHomeState = createFeatureSelector('home');

export const selectHomeText = createSelector(
  selectHomeState,
  (HomeState: HomeState) => HomeState.text,
);

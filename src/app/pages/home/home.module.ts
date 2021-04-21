import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { HomePage } from './home.page';
import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';




@NgModule({

  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
  ],

  declarations: [HomePage,],
})
export class HomeModule { }

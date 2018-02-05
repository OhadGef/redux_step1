import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import {AppState, INITIAL_STATE} from './state.model';
import {rootReducer} from './reducers';

@NgModule({
  imports: [
    NgReduxModule
  ],
  declarations: []
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      INITIAL_STATE
    );
  }
}

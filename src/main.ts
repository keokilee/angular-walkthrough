import { bootstrap } from 'angular2/platform/browser'
import { provideStore } from '@ngrx/store'

import { App } from './components/app'
import { guests } from './reducers/guests'

document.write('<app></app>')
bootstrap(App, [ provideStore({ guests }, {guests: []}) ])

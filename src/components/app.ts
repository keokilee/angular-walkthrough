import { Component } from 'angular2/core'

import { GuestBookForm } from './guest_book_form'
import { Guest } from '../models/guest'

@Component({
  selector: 'app',
  template: `
    <div>
      <h1>Guest Book</h1>
      <guest-book-form [guest]="guest"></guest-book-form>
    </div>
  `,
  directives: [ GuestBookForm ]
})
export class App {
}

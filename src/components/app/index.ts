import { Component } from 'angular2/core'

import { GuestBookForm } from '../guest-book-form'
import { Guest } from '../../models/guest'

@Component({
  selector: 'app',
  template: require('./template.html'),
  directives: [ GuestBookForm ]
})
export class App {
  private guests: Guest[]

  constructor() {
    this.guests = []
  }

  public addGuest(guest: Guest) {
    this.guests = [...this.guests, guest]
  }
}

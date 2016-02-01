import { Component, EventEmitter } from 'angular2/core'

import { Guest } from '../../models/guest'

@Component({
  outputs: ['added'],
  selector: 'guest-book-form',
  template: require('./template.html')
})
export class GuestBookForm {
  public addGuest: (Guest) => void
  private added = new EventEmitter<Guest>()
  private guest: Guest

  get diagnostic() {
    if (process.env.NODE_ENV === 'development') {
      return JSON.stringify(this.guest)
    }
  }

  constructor() {
    this.guest = this.newGuest()
  }

  submit(guest: Guest) {
    this.added.emit(this.guest)
    this.guest = this.newGuest()
  }

  private newGuest(): Guest {
    return { name: '', date: new Date() }
  }
}

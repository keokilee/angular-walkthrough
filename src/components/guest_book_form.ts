import { Component } from 'angular2/core'
import { Store } from '@ngrx/store'

import { ADD_GUEST } from '../reducers/guests'
import { Guest } from '../models/guest'

@Component({
  selector: 'guest-book-form',
  template: `
    <form>
      <input [(ngModel)]="guest.name" placeholder="name" />
      <button (click)="addGuest(guest)">Add Guest</button>
    </form>
  `
})

export class GuestBookForm {
  private guest: Guest

  constructor(public store: Store<Guest[]>) {
    this.guest = this.newGuest()
  }

  addGuest(guest: Guest) {
    this.store.dispatch({ type: ADD_GUEST, payload: this.guest })
    this.guest = this.newGuest()
  }

  private newGuest(): Guest {
    return { name: '', date: new Date() }
  }
}

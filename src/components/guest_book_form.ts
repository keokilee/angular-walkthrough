import { Component } from 'angular2/core'

import { Guest } from '../models/guest'

@Component({
  selector: 'guest-book-form',
  template: `
    <div>
      <input [(ngModel)]="guest.name" placeholder="name" />
    </div>
  `
})

export class GuestBookForm {
  public guest: Guest
}

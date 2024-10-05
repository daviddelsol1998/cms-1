import { Component, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css',
})
export class ContactDetailComponent {
  @Input() contact: Contact;

  constructor() {
    console.log(this.contact);
  }
}

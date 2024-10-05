import { Component } from '@angular/core';
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactDetailComponent } from "./contact-detail/contact-detail.component";
import { Contact } from './contact.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactListComponent, ContactDetailComponent, NgFor,NgIf],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  
  selectedContacts = []; 
  
  onClick(selectedContact: Contact) {
    this.selectedContacts.push(selectedContact);
  }
}

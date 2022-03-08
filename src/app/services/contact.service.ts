import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactsComponent } from '../pages/contacts/contacts.component';
import { EditComponent } from '../pages/contacts/edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Robert', 
      age: 20, 
      state: 'Penang', 
      email: 'robert20@hotmail.com'
    },
    {
      id: 2,
      name: 'Edward', 
      age: 35, 
      state: 'Johor' , 
      email: 'edward@yahoo.com'
    },
    {
      id: 3,
      name: 'Bavind',
      age: 22,
      state: 'Johor',
      email: 'bavind00@gmail.com'

    }
  ];

  constructor() { }

  onGet() {
    return this.contacts;
  }

  onGetContact(id: Number) {
    return this.contacts.find(x=>x.id === id);
  }

  onAdd(contact: Contact): void {
    this.contacts.push(contact);
  }

  onDelete(id: Number) {
    let contact = this.contacts.find(x=>x.id === id);
    let index = contact && this.contacts.indexOf(contact,0);
    index && this.contacts.splice(index,1);
  }

  onUpdate(contact: Contact) {
    let oldContact = this.contacts.find(x=>x.id === contact.id);
    if(oldContact) {
      oldContact.name = contact.name;
      oldContact.age = contact.age;
      oldContact.state = contact.state;
      oldContact.email = contact.email;
    }
  }

}

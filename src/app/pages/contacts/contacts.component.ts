import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contacts = this.contactService.onGet();
  }

  onDelete(id : Number) {
    this.contactService.onDelete(id);
  }

}

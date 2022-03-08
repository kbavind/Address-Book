import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  header: string;
  contact: Contact = {
    id: 0,
    name: '',
    age: 0,
    state: '',
    email: ''
  };

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.getAll('id');
    this.header = this.id === 0? 'Add Contact': 'Edit Contact';

    if(this.id != 0) {
      this.contact= this.contactService.onGetContact(this.id)
    }
  }


  onSubmit(form: NgForm) {
    let contact: Contact = {
      id: form.value.id,
      name: form.value.name,
      age: form.value.age,
      state: form.value.state,
      email: form.value.email,
    }

    if(this.id === 0) {
      this.contactService.onAdd(contact);
    }
    else{
      this.contactService.onUpdate(contact);
    }

    this.router.navigateByUrl('');
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contact } from './models/contact.model';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { EditComponent } from './pages/contacts/edit/edit.component';

const routes: Routes = [
  {
    path: "",
    component: ContactsComponent
  },
  {
     path: "contact/add/:id",
    component: EditComponent
  },
  {
    path: "contact/edit/:id",
    component: EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

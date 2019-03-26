import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})



export class listComponent {
  public Persons = [];
  public person = {};

  constructor(private listService: ListService) {
    this.Persons = listService.getPersons()
  }
  colwidth = 12;
  showForm: boolean = false;
  cols = [
    { field: 'firstname', header: 'First Name' },
    { field: 'lastname', header: 'Last Name' },
    { field: 'dob', header: 'Date of Birth ' },
    { field: 'gender', header: 'Gender' },
    { field: 'contact', header: 'Contact' }
  ];

  deletePerson(index) {
    this.listService.splicePerson(index);
  }

  editPerson(index) {
    this.colwidth = 6;
    this.person = JSON.parse(JSON.stringify(this.listService.editPerson(index)));
    if (this.person) {
      this.person.dob = new Date(this.person.dob);
    }

    console.log("person from edit", this.person.value);

  }

  addClick(showForm) {
    if (this.colwidth == 6) {
      this.colwidth = 12;
    } else {
      this.colwidth = 6;
    }
    this.showForm = !showForm;
  }

}

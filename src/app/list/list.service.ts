import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class ListService {

  persons = [{
    id: 1, firstname: 'Vignesh', lastname: 'Selvaraj', dob: '1994-01-23', gender: 'male', contact: '9629725924'
  },
  {
    id: 2, firstname: 'Dinesh', lastname: 'k', dob: '1996-12-03', gender: 'male', contact: '9897907879'
  },
  {
    id: 3, firstname: 'Ramesh', lastname: 'V', dob: '1992-05-03', gender: 'male', contact: '9000453420'
  }, {
    id: 4, firstname: 'Moni', lastname: 'A', dob: '1992-06-06', gender: 'female', contact: '9897090909'
  }]


  getPersons() {
    return this.persons;
  }

  setPerson(person) {
    // console.log("person",person)
    this.persons.push(person);
    this.getPersons();
  }

  splicePerson(index) {
    //console.log("index",index);
    this.persons.splice(index, 1);
    this.getPersons();
  }


  editPerson(index) {
    return this.persons[index];
  }
  editValue(person, index) {
    this.persons[index - 1] = person;
  }

  dobValidator(control: AbstractControl): { [key: string]: boolean } | null {
     console.log("control.value",control.value,"Date",new Date());
    if (control.value !== undefined) {
        if(control.value > new Date()){
           return { 'dobRange': true };
        }
       
    }
    return null;
}

}

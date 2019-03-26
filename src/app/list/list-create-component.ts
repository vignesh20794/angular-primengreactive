import { Component, OnInit, Input, OnChanges,Output,EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ListService } from './list.service';
import { MessageService } from 'primeng/api';
import * as Rx from "rxjs";
@Component({
  selector: 'app-list-create',
  templateUrl: './list-create-component.html',
  providers: [MessageService]
})

export class ListCreate implements OnInit, OnChanges {
  registerForm: FormGroup;
  submitted = false;

  @Input() person = {
    firstname: '',
    lastname: '',
    dob: '',
    contact: '',
    gender: '',
    id: ''
  };
  @Output() state:EventEmitter<boolean> = new EventEmitter<boolean>();

  stateEmit = new Rx.BehaviorSubject(false);

  public title = 'Create'

  constructor(private formBuilder: FormBuilder, private listService: ListService, private messageService: MessageService) { }

  ngOnInit() {
    this.clearForm();
  }
  ngOnChanges() {
    //console.log("this.person", this.registerForm);
    if (this.registerForm != undefined) {

      this.title = 'Edit';
      this.registerForm.setValue({
        firstname: this.person.firstname,
        lastname: this.person.lastname,
        dob: this.person.dob,
        contact: this.person.contact,
        gender: this.person.gender,
      })
    }

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Validation Failed' });
      return;
    } else {
       this.submitted = false;
      if (this.title == 'Create') {
        console.log("formData", this.registerForm.value);
        this.listService.setPerson(this.registerForm.value);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Person added Successfully' });
        this.clearForm();
      } else if (this.title == 'Edit') {
        if (this.person.id) {
          let d = new Date(this.person.dob);
          let myDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
          this.registerForm.get('dob').setValue(new Date(myDate));
          this.listService.editValue(this.registerForm.value, this.person.id);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Person Updated Successfully' });
          this.clearForm();
        }
      }

    }

  }

  clearForm() {
    this.title = 'Create';
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: ['', [Validators.required,this.listService.dobValidator]],
      contact: ['', [Validators.required, Validators.maxLength(10), Validators.pattern(/[7-9]{1}[0-9]{9}/)]],
      gender: ['', Validators.required]
    });
  }

  emitState(event){
    console.log("emitState called")
    //this.state.emit(false);
    this.stateEmit.next(false);
  }

  onSelectMethod(event) {
    //console.log("this.registerForm",event);
    let d = new Date(event);
    let myDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    //console.log("myDate", myDate);
    this.registerForm.get('dob').setValue(new Date(myDate));
  }

}
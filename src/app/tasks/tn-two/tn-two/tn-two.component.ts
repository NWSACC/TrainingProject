import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-tn-two',
  templateUrl: './tn-two.component.html',
  styleUrls: ['./tn-two.component.css']
})
export class TnTwoComponent implements OnInit {
  contactForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [this.NameValidator()]],
      email: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  SubmitContactInformation() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    let currentContactList = JSON.parse(sessionStorage.getItem("contactModel"));
    if (currentContactList === null || currentContactList === undefined) {
      currentContactList = [];
    }
    currentContactList.push(this.contactForm.value);
    sessionStorage.setItem("contactModel", JSON.stringify(currentContactList));
  }

  NameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === undefined || control.value === null || control.value === '') {
        return { 'required': true };
      }
  
      if (control.value.length < 3) {
        return { 'invalid': true };
      }
  
      if (control.value.includes("fuck")) {
        return { 'forbidden': true };
      }
  
      return null;
    };
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataDisplayComponent } from '../user-data-display/user-data-display.component';
import { Users } from '../_helpers/interfaces/userDetails';

import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userForm: FormGroup;
  submited: boolean;

  @Input() userData: Users = {} as Users;
  @Input() isEdit: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService) {
    this.submited = false;
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  handleSubmit() {
    this.submited = true;

    if (this.userForm.invalid) {
      return;
    }

    if (this.isEdit) {
      this.userService.put(this.userData);
    } else {
      this.userService.post(this.userData);
    }
  }

  get f() {
    return this.userForm.controls;
  }

}

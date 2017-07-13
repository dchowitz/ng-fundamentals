import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em { float: right; color: #e05c65; padding-left: 10px; }
    .error input { background-color: #e3c3e5; }
    .error ::-webkit-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor (private auth: AuthService, private router: Router) {
    const user = this.auth.currentUser;
  }

  ngOnInit() {
    this.firstName = new FormControl(this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['/events']);
    }
  }

  isInvalidLastName() {
    return this.lastName.invalid && this.lastName.touched;
  }

  isInvalidFirstName() {
    return this.firstName.invalid && this.firstName.touched;
  }
}
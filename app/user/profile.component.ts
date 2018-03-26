import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IToastr, TOASTR_TOKEN } from '../common/toast.service';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'profile.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-mozt-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `],
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private _authService: AuthService,
              private _router: Router,
              @Inject(TOASTR_TOKEN) private toastr: IToastr) {}

  ngOnInit() {
    this.firstName = new FormControl(this._authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  cancel() {
    this._router.navigate(['/events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this._authService.updateCurrentUser(formValues.firstName, formValues.lastName).subscribe(() => {
        this.toastr.success('Profile Saved');
      });
      if (this.toastr.success) {
        this._router.navigate(['/events']);
      }
    }
  }

  logout() {
    this._authService.logout().subscribe(() => {
      this._router.navigate(['/user/login']);
    });
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

}

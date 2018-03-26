import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
    `],
})
export class LoginComponent {
    loginInvalid = false;
    public mouseOverLogin = false;
    public userName: string;
    public password: string;

    constructor(private _authService: AuthService, private router: Router) {}

    login(formValues) {
        this._authService.loginUser(formValues.userName,
            formValues.password).subscribe((resp) => {
                if (!resp) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['/events']);
                }
            });
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}

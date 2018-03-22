import { Injectable } from "@angular/core";
import { IUser } from "./user.model";
import { Http, Response, Headers, RequestOptions }from '@angular/http'; 
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private _http: Http) {}

    loginUser(username: string, password: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let loginInfo = {username: username, password: password};

        console.log(loginInfo.username);
        return this._http.post('/api/login', JSON.stringify(loginInfo), options)
        .do(resp => {
            if (resp) {
                this.currentUser = <IUser>resp.json().user;
            }
        }).catch(error => {
            return Observable.of(false);
        })
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    isAuthenticated() {
        console.log(this.currentUser);
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this._http.get('api/currentIdentity').map((response: any) => {
            if (response._body) {
                return response.json();
            } else {
                return {}
            }
        })
        .do(currentUser => {
            if (!!currentUser.userName) {
                this.currentUser = currentUser;
            }
        })
        .subscribe();
    }

    logout() {
        this.currentUser = undefined;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this._http.post('/api/logout', JSON.stringify({}), options);
    }

}